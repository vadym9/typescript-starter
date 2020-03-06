import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/style.scss';

alert('index  js being initialized');

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
