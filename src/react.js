const tags = [
  'div',
  'span',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]

const ToyReact = {
  /**
   * 
   */
  createElement(component, props, ...children) {
    // document.createElement(tag);
    // debugger;
    let el;
    if (tags.includes(component)) {
      el = document.createElement(component);
      if (props) {
        Object.keys(props).forEach(key => {
          el.setAttribute(key, props[key]);
        });
      }
      if (children) {
        if (children.length > 0) {
          children.forEach(child => {
            if (typeof child === 'string') {
              child = document.createTextNode(child);
              el.appendChild(child);
            } else if (child instanceof Array) {
              child.forEach(item => {
                if (typeof item === 'string') {
                  item = document.createTextNode(item);
                  console.log('ooooo ', item.nodeType, el);
                  el.appendChild(item);
                }
              });
            } else {
              el.appendChild(child);
            }
          })
        } else {
          el.appendChild(children);
        }
      }
    } else {
      // props.children = children;
      if (props) {
        props.children = children;
      } else {
        props = {
          children,
        }
      }
      const c = new component(props);
      el = c.render();
    }
    return el;
  }
}

export class Component {
  constructor(props) {
    this.props = props;
  }
  render() {}
}

export default ToyReact;
