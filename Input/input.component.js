import React from 'react';

import {
  View,
  TextInput,
  Text,
} from 'react-native';

import input_styles from './input.styles';

function Input(props) {
  const {
    label,
    value,
    onChange,
    theme = '#000',
    style = {},
    labelStyle = {},
  } = props;

  return (
    <View style={[input_styles.input_container]}>
      {label && (
        <Text style={[{ color: theme, marginBottom: 4 }, labelStyle]}>
          {`${label}`}
        </Text>
      )}
      <TextInput
        autoCapitalize="none"
        {...props}
        style={[input_styles.input, {
          borderColor: theme,
          color: theme,
        }, style]}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

export default Input;
