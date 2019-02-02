const isGenerator = value => value.constructor.name === "GeneratorFunction";

function assert(val, msg = "Error!") {
  if (!val) throw new Error(msg);
}

function handleContent(element, item) {
  if (item instanceof HTMLElement) {
    element.appendChild(item);
    return;
  }

  if (item instanceof Array) {
    item.map(sub => handleContent(element, sub));
    return;
  }

  switch (typeof item) {
    case "object":
      element.appendChild(el(item));
      break;

    case "function":
      if (isGenerator(item)) {
        if (!item.__mounted) item.mount();
        handleContent(element, item.render());
      } else handleContent(element, item());

      break;

    case "undefined":
      break;

    default:
      element.innerHTML += item;
      break;
  }
}

function el() {
  const content = Array.from(arguments);
  const tag = content.shift();
  const attrs = content.shift();
  const element = document.createElement(tag);

  if (attrs) {
    Object
      .entries(attrs)
      .map(entry => element.setAttribute(entry[0], entry[1]));
  }

  content.map(item => handleContent(element, item));
  return element;
}

Function.prototype.mount = function () {
  assert(isGenerator(this),
    "Function could not be mounted.");

  this.__generator = this();
  this.render = () => this.__generator.next().value;
  this.__mounted = true;
};

function render(el, container) {
  root.innerHTML = "";

  handleContent(
    document.querySelector(container),
    el
  );
};