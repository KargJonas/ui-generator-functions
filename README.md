# Generator functions for UI
## This is a demonstration for using JS generator functions as UI components:
### Here is what I mean (the example uses jsx and a react-like-api):

```jsx
// The * indicates a generator function
function* Comp() {
  const state = {
    name: "Jonas"
  };

  while (true) {
    yield (
      <div>
        <h1>{state.name}</h1>
      </div>
    );
  }
}

render(Comp, "#root");
```

### What is the purpose of this?
This could be an alternative to the react-hooks syntax for using "state" in function-components. (Yes - the code above works, you can try it yourself in `index.js`, `live-jsx.js` contains a complete jsx-to-js transpiler and `lib.js` contains a library for generating html elements).

### This does not necessarily have anything to do with React.