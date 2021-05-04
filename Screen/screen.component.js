import React, { useEffect, useState } from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from 'react-native';

export default function Screen(props) {
  const {
    list,
    children,
    safeAreaStyle = {},
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
      <SafeAreaView style={[{ flex: 1 }, safeAreaStyle]}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={100}
        >
          {children}
        </KeyboardAvoidingView>
        {FooterComponent && !isKeyboardUp && (<FooterComponent />)}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[{ flex: 1 }, safeAreaStyle]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={100}
      >
        <ScrollView>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
      {FooterComponent && !isKeyboardUp && (<FooterComponent />)}
    </SafeAreaView>
  );
}
