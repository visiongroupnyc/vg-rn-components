import React from 'react';

import { View, Image, Text } from 'react-native';
import Touchable from './touchable';

import control_system_styles from './control-system.styles';

function ControlContainer({ children }) {
  return (
    <View style={control_system_styles.controls_container}>
      {children}
    </View>
  );
}

function map_controllers(contollers_array) {
  const maped_controllers = contollers_array.map((controller, inx) => (
    <Touchable
      key={Math.random().toString()}
      onPress={() => controller.onPress()}
      style={{
        marginLeft: inx < contollers_array.length ? 4 : 0,
      }}
    >
      {!controller.component && controller.label && (
        <Text h2 style={{ color: '#0070F3' }}>{controller.label}</Text>
      )}
      {!controller.component && controller.icon && (
        <Image source={controller.icon} style={{ width: 32, height: 32 }} />
      )}
      {controller.component && controller.component()}
    </Touchable>
  ));

  return maped_controllers;
}

export default function ControlSystem(props) {
  const { controllers } = props;

  if (!controllers) {
    return (<ControlContainer />);
  }

  if (typeof controllers === 'function') {
    const Control = controllers;
    return (
      <ControlContainer>
        <Touchable>
          <Control />
        </Touchable>
      </ControlContainer>
    );
  }
  if (typeof controllers === 'object') {
    if (controllers.length) {
      return (
        <ControlContainer>
          {map_controllers(controllers)}
        </ControlContainer>
      );
    }
    return (
      <ControlContainer>
        <Touchable>
          {controllers}
        </Touchable>
      </ControlContainer>
    );
  }
}
