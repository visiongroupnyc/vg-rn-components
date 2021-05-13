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

  export default function MyCustomTextComponent() {
    return (
      <Text
        baseProps={{
          bigFont: { fontSize: 50, fontWeight: 'bold' }
        }}
      />
    );
  }

  // ... //

import MyCustomTextComponent from '...';

export default function MyAwesomeComponent() {
  return (
    <MyCustomTextComponent bigfont>
      Now i'm super heavy font
    <MyCustomTextComponent/>
  )
}
```

## Default properties
Property     | Default    
------------ | --------------
h1           | fontSize: 18 
h2           | fontSize: 16
h3           | fontSize: 14 
h4           | fontSize: 12 
h5           | fontSize: 10 
center       | textAlign: 'center'
right        | textAlign: 'right' 
left         | textAlign: 'left' 
capitalize   | textTransform: 'capitalize' 
uppercase    | textTransform: 'uppercase' 
lightier     | fontWeight: '300' 
block        | width: '100%' 
underline    | textDecorationLine: 'underline', textDecorationColor: '#000'
lineThrough | textDecorationLine: 'line-through' 