import React from 'react';

import { Text as RNText } from 'react-native';

import defaultProps from './text.config';

function Text(props) {
  const {
    children = '',
    style = {},
    baseProps = {},
  } = props;

  function mapProperties() {
    const styles = {};
    const base = Object.assign(defaultProps, baseProps);
    Object.keys(props).map((property) => {
      if (base[property]) {
        Object.assign(styles, base[property]);
      }
      return property;
    });
    if (style.length) {
      const finalStyleObject = {};
      style.forEach((object) => {
        Object.assign(finalStyleObject, object);
      });
      return Object.assign(styles, finalStyleObject);
    }
    return Object.assign(styles, style);
  }

  return (
    <RNText style={mapProperties()} props>
      {children}
    </RNText>
  );
}

export default Text;
