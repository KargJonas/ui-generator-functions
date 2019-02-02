function* Comp() {
  const state = {
    name: "Jonas"
  };

  while (true) {
    yield (
      <div>
        <h1>Hello, {state.name}</h1>
      </div>
    );
  }
}

render(Comp, "#root");