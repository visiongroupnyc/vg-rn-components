import React, { useEffect, useRef } from 'react';

import {
  TouchableOpacity,
  Modal,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Image,
} from 'react-native';

import close from './assets/close_icon.png';
import styles from './slide-up.styles';

function SlideUp(props) {
  const {
    visible,
    onCancel = () => {},
    list = false,
    closeIcon,
    action,
    children,
  } = props;
  const slide = useRef(new Animated.Value(-1900)).current;

  const slideup = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const slidedown = () => {
    Animated.timing(slide, {
      toValue: -1900,
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      if (onCancel) onCancel();
    });
  };

  useEffect(() => {
    if (visible) slideup();
    else slidedown();
  }, [visible]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={slidedown}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.slide_up_overlay}
          onPress={slidedown}
        >
          <Animated.View
            onStartShouldSetResponder={() => true}
            style={[styles.slide_up__animated, { bottom: slide }]}
          >
            {action && (
              <View style={[styles.slide_up__action, { right: 6 }]}>
                {action && typeof action === 'function' && action()}
                {action && typeof action === 'object' && action}
              </View>
            )}
            <TouchableOpacity
              style={[styles.slide_up__action, action ? { left: 6 } : { right: 6 }]}
              onPress={slidedown}
            >
              <Image
                source={closeIcon || close}
                style={styles.slide_up__close_icon}
              />
            </TouchableOpacity>
            {!list ? (
              <ScrollView bounces>{children}</ScrollView>
            ) : (
              <View>{children}</View>
            )}
          </Animated.View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default SlideUp;
