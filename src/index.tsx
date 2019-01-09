import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Calculator from './components/Calculator';
import { Provider } from "react-redux";
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
