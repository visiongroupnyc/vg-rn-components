# Header
```
YOU NEED TO SET ON YOUR <Stack.Navigator /> THE PROP headerMode TO "float" or "screen"
```
## Dependencies
```bash
  $ npm i -S @react-navigation/core expo-constants
```

## Properties & values
Property     |      Type            | Default    
------------ | -------------------- | ----------
left         | function             | undefined 
center       | function, string     | undefined 
right        | function, array      | undefined 
back         | boolean              | true      
menu         | boolean, object      | false     
style        | object               | object    

## Use example: left, center & right props.
```javascript
  import React from 'react';

  import SomeLeftComponent from '...';
  import SomeRightComponent from '...';
  import Header from '...';

  export function App() {
    return (
      <View>
        <Header
          left={ SomeLeftComponent }
          center="My Profile"
          left={ SomeRightComponent }
        />
      </View>
    );
  }
```

As we can see on the props table, `right` prop supports an array, that array is a configuration array that contains objects with the next props:

Property     | Type                 | Default   | weight |
------------ | -------------------- | ----------| ------ |
label        | string               | undefined | 1      |
icon         | asset, uri           | undefined | 2      |
component    | function             | undefined | 3      |
onPress      | function             | undefined | none   |
labelStyle   | object               | undefined | none   |

`label`, `icon` and `component` have weight, which means that if we provide an object with those three properties, the one with more weight will dominate.

## Use example: `right` with an `array`
```javascript
  import React from 'react';

  import MyAwesomeLelfComponent from '...';
  import SearchComponent from '...';
  import Header from '...';

  const my_controllers = [
    {
      component: SearchComponent
    },
    {
      label: 'Done',
      onPress: handleDoneAction,
      labelStyle: {
        color: 'red',
      }
    }
  ]

  export function App() {
    return (
      <View>
        <Header
          left={ MyAwesomeLelfComponent }
          center="My Profile"
          right={ my_controllers }
        />
      </View>
    );
  }
```

## Menu
The `menu` property draw an hamburger icon that can handle the `toggleDrawer()` function of `react-navigation`, this property override any function given on `left`, which means that any `function` that has been passed throught `left` property will be ignored if `menu` prop is present.

`menu` property accepts an object in order to customize `onPress` action, `icon` and icon styles.

Property     | Type                 | Default                     |
------------ | -------------------- | --------------------------- |
icon         | asset, uri           | undefined                   |
onPress      | function             | `navigation.toggleDrawer()` |
iconStyle    | object               | undefined                   |

## Use example: menu
```javascript
  import React from 'react';

  import Header from '...';

  import drawer_icon from '...';

  export function App() {
    return (
      <View>
        /* 
          this example render a default icon with 
          navigation.toggleDrawer() function.
        */
        <Header menu />
      </View>
    );
  }

  export function App() {
    return (
      <View>
        <Header
          menu={{
            icon: drawer_icon,
            iconStyle: {{
              widht: 40,
              height: 40,
            }}
          }}
        />
      </View>
    );
  }
```