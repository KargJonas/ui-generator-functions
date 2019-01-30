function* Comp() {
  const state = {
    name: "Jonas",
    count: 0
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
render(Comp, "#root");