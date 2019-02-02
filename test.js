function* App() {
  const state = {
    name: "Jonas"
  };

  return <h1>Hello, {state.name}</h1>;
}

render(App, "#root");