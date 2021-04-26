import React from 'react';

import { TouchableOpacity } from 'react-native';

import touchable_styles from './touchable.styles';

export default function Touchable(props) {
  const {
    children,
    onPress,
    style = {},
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[touchable_styles.touchable, style]}
    >
      {children}
    </TouchableOpacity>
  );
}
