import jsx from "../jsx-transform/jsx";
import { el, render } from "./lib";

Object.defineProperty(window, "el", {
  value: el,
  enumerable: false,
  configurable: false
});

Object.defineProperty(window, "render", {
  value: render,
  enumerable: false,
  configurable: false
});

window.addEventListener("load", () => {
  const scriptElements = Array.from(document.querySelectorAll("script[type='jsx']"))
    .filter(el => el.src || el.innerHTML.trim());

  function getScripts() {
    return Promise.all(scriptElements.map(el => {
      el.remove();

      if (el.src) {
        return fetch(el.src)
          .then(res => res.text());
      } else {
        return el.innerHTML;
      }
    }));
  }

  getScripts().then(scripts => scripts.map(script => {
    const el = document.createElement("script");
    el.innerHTML = jsx(script, { factory: "el" });
    document.body.appendChild(el);
  }));
});