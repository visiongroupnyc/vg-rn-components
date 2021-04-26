# Screen
## Properties & values
Property     |      Type            | Default    
------------ | -------------------- | ----------
list         | boolean              | undefined 
children     | function             | undefined 
footer       | object               | undefined 

---

### `list`:
A Screen is composed by this three `react-native` components: `SafeAreaView`, `KeyboardAvoidingView` & `ScrollView`, often in the projects we need to render a `FlatList`, the natural behavior of `FlatList` no matters which orientation it have, is not compatible with `ScrollView` be cause the scroll event, so, for those cases we have the `list` property.

---

### `footer`:
Property              |      Type            | Default    |
--------------------- | -------------------- | ---------- |
component             | function             | undefined  |
keyboardShouldPersist | boolean              | false      |


#### `keyboardShouldPersist`:
The natural behavior of the footer is to be hidden when the keyboard's up, but in some cases we need keep the footer visible, for this proposes, we have the `keyboardShouldPersist` property, let's see an example:

```javascript
  import React from 'react';

  import { Text } from 'react-native';
  import { Screen } from 'vision-group-components';

  import CommentBox from '...';

  export function App() {
    return (
      <Screen
        list
        footer={{
          component: CommentBox,
          keyboardShouldPersist: true,
        }}
      >
        <Text>Leave a comment!<Text>
      </Screen>
    );
  }
```

---