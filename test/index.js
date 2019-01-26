function* Comp() {
  this.state = {
    name: "Jonas"
  };

  while (true) {
    yield (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

render(Comp, "#root");

