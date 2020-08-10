import ToyReact from './react.js';

const ToyReactDOM = {
  render(component, root) {
    root.appendChild(component);
  }
}

export default ToyReactDOM;