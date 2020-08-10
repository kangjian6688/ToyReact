import ToyReact from './react.js';

const ToyReactDOM = {
  render(component, root) {
    component.mountTo(root);
  }
}

export default ToyReactDOM;