import React, { useLayoutEffect } from 'react';

import { useNavigation } from '@react-navigation/core';

import { View, Image, Text } from 'react-native';
import ControlSystem from './components/control-system';
import Touchable from './components/touchable';

import back_icon from './assets/chevron-left.png';
import menu_icon from './assets/hamburger.png';

import header_styles from './header.styles';

export default function Header(props) {
  const navigation = useNavigation();
  const {
    left,
    center,
    right,
    back = true,
    menu = false,
    style = {},
  } = props;

  function MenuButton() {
    let onPress = () => navigation.toggleDrawer();
    let icon = menu_icon;
    let styles = {};

    if (menu?.onPress) onPress = () => menu.onPress();
    if (menu?.icon) icon = menu.icon;
    if (menu?.iconStyle) styles = menu.iconStyle;

    return (
      <Touchable
        style={header_styles.header__menu_button}
        onPress={() => onPress()}
      >
        <Image
          source={icon}
          style={[
            header_styles.header__menu_button__icon,
            styles,
          ]}
        />
      </Touchable>
    );
  }

  function BackButton() {
    return (
      <Touchable
        style={header_styles.header__back_button}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={menu.icon || back_icon}
          style={header_styles.header__back_button__icon}
        />
        <Text style={header_styles.header__back_button__text}>
          Back
        </Text>
      </Touchable>
    );
  }

  function handleControlls() {
    if (!left && !center && !right) return;
    let LeftComponent = left;
    if (menu) LeftComponent = MenuButton;
    else if (!left && back && navigation.canGoBack()) LeftComponent = BackButton;

    return (
      <View style={header_styles.header_container}>
        <View style={header_styles.header_left}>
          {LeftComponent && <LeftComponent />}
        </View>
        <View style={header_styles.header_center}>
          {center && typeof center === 'function' && center()}
          {center && typeof center === 'string' && (
            <Text style={header_styles.header__center__text}>
              {center}
            </Text>
          )}
        </View>
        <View style={header_styles.header_right}>
          <ControlSystem controllers={right} />
        </View>
      </View>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => handleControlls(),
      headerShow: Boolean(Object.keys(props).length),
      headerStyle: {
        elevation: 0,
        ...style,
      },
    });
  });

  return null;
}
