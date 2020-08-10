const ToyReact = {
  createElement(component, props, ...children) {
    // document.createElement(tag);
    // debugger;
    let vdom;
    console.log('createElement arguments ', component, props, children);
    if (typeof component === 'function') {
      vdom = new component(props);
    } else {
      vdom = new ElementWrapper(component);
    }
    console.log('createElement vdom ', vdom);

    for (let key in props) {
      vdom.setAttribute(key, props[key]);
    }

    // 拍平 children
    const insertChildren = (children) => {
      let allChildren = [];
      for (let item of children) {
        if (item instanceof Array) {
          allChildren = allChildren.concat(insertChildren(item));
        } else {
          allChildren = allChildren.concat(item);
        }
      }
      return allChildren;
    }
    insertChildren(children).forEach(child => {
      if (!(child instanceof Component)) {
        child = String(child);
      }
      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }
      vdom.appendChild(child);
    });
    return vdom;
  }
}

export class Component {
  setAttribute(name, value) {
    this.props = this.props || {}
    this.props[name] = value;
  }
  appendChild(child) {
    this.props = this.props || {};
    this.props.children = this.props.children || [];
    this.props.children.push(child);
  }
  mountTo(parent) {
    const vdom = this.render();
    vdom.mountTo(parent);
  }
}

class ElementWrapper extends Component {
  constructor(type) {
    super();
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(vchild) {
    vchild.mountTo(this.root);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class TextWrapper extends Component {
  constructor(text) {
    super();
    this.root = document.createTextNode(text);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

export default ToyReact;
