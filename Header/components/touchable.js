import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import touchable_styles from './touchable.styles';

export default function Touchable(props) {
  const {
    children,
    onPress,
    style = {},
  } = props;

  if (!onPress) {
    return (
      <View style={[touchable_styles.touchable, style]}>
        {children}
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[touchable_styles.touchable, style]}
    >
      {children}
    </TouchableOpacity>
  );
}
