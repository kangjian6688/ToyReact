import ToyReact, { Component } from './react.js';

class P extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data
    }
  }
  render() {
    console.log('rrrr', this.props);
    const {data} = this.state;
    const {children} = this.props;
    return (
      <div id='p' name='p'>
        <div>title</div>
        <div>
          <div>data:</div>
          <div>{data}</div>
          {children && children.map(child => child)}

          are you ok?
        </div>
      </div>
    );
  }
}

export default P;