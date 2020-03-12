import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes/Routes';
import './scss/style.scss';

ReactDOM.render(<Routes />,
  document.getElementById('app'));

module.hot.accept();
