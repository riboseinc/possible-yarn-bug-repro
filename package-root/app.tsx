import React from 'react';
import { createRoot } from 'react-dom/client';
import { defaultTheme, Provider, ListView, Item, Text } from '@adobe/react-spectrum';


interface Thing {
  foo: string;
  bar: string;
}
const things: Thing[] = [
  { foo: 'hello', bar: 'this should appear below the “hello”' },
  { foo: 'bug reproduces', bar: 'if it appears to the right' },
];
const App: React.VoidFunctionalComponent = function () {
  return (
    <Provider theme={defaultTheme}>
      <ListView items={things}>
        {thing =>
          <Item key={thing.foo} textValue={thing.foo}>
            <Text>{thing.foo}</Text>
            <Text slot="description">{thing.bar}</Text>
          </Item>
        }
      </ListView>
    </Provider>
  );
}


const root = createRoot(document.getElementById('app'));
root.render(<App />);
