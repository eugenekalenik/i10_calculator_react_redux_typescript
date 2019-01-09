import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import CalculatorContainer from './container/CalculatorContainer';
import { Provider } from "react-redux";
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
