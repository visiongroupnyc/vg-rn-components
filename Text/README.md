# Text
## Properties & values
The `<Text/>` supports all the properties described [here](https://reactnative.dev/docs/textinput) and the listed on the next table.
Property     |      Type            | Default    
------------ | -------------------- | ----------
baseProps    | object               | undefined 

## `baseProps`:
`baseProps` is an object that overrides the default props and adds new ones.

## Use example: `baseProps` props.
```javascript
  import React from 'react';

  import Text from 'vision-group-components';

  export function App() {
    // default textDecorationColor is '#000'
    return (
      <Text
        baseProps={{
          underline: {
            textDecorationColor: '#000',
          }
        }}
      />
    );
  }
```