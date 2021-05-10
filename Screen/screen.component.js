import React, { useEffect, useState } from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Keyboard,
  View,
} from 'react-native';

export default function Screen(props) {
  const {
    list,
    children,
    safearea = {},
    keyboardavoidingview = {},
    scrollview = {},
    footer = {},
  } = props;

  const [isKeyboardUp, setKeyboardUp] = useState(false);

  useEffect(() => {
    if (footer.keyboardShouldPersist) return;
    const up = Keyboard.addListener('keyboardDidShow', () => setKeyboardUp(true));
    const down = Keyboard.addListener('keyboardDidHide', () => setKeyboardUp(false));
    return () => {
      up.remove();
      down.remove();
    };
  });

  const { component: FooterComponent } = footer;

  if (list) {
    return (
      <SafeAreaView {...safearea} style={[{ flex: 1 }, safearea.style]}>
        <KeyboardAvoidingView
          {...keyboardavoidingview}
          style={[{ flex: 1 }, keyboardavoidingview.style]}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
          <View
            style={[
              { flex: 1 },
              scrollview.style,
              scrollview.contentContainerStyle,
            ]}
          >
            {children}
          </View>
        </KeyboardAvoidingView>
        {FooterComponent && !isKeyboardUp && (<FooterComponent />)}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView {...safearea} style={[{ flex: 1 }, safearea.style]}>
      <KeyboardAvoidingView
        {...keyboardavoidingview}
        style={[{ flex: 1 }, keyboardavoidingview.style]}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <ScrollView
          style={scrollview.style}
          contentContainerStyle={[
            scrollview.contentContainerStyle,
            { flex: 1 },
          ]}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
      {FooterComponent && !isKeyboardUp && (<FooterComponent />)}
    </SafeAreaView>
  );
}
