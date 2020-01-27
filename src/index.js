import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/style.scss';
// import "./img/user.png"
// working polyfill with importing like that
// require('core-js/stable')
// require('regenerator-runtime/runtime')

ReactDOM.render(<App />, document.getElementById('app'));


async function doSmth() {
  // await console.log(123);
}

doSmth();

// const { j } = { j: 2, k: 3 };
// console.log(j);

module.hot.accept();
