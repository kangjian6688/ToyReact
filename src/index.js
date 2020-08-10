import ToyReact from './react.js';
import ToyReactDOM from './react-dom.js';
import P from './P.jsx';

const root = (
  <P data = "111">
    I 'm text
    <div>
      <div>w title</div>
      <div>wwww</div>
    </div>
  </P>
);

ToyReactDOM.render(root, document.querySelector('#root'));
