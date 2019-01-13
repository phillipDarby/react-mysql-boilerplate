import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import { addUser } from './actions/index';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';

window.store = store;
window.addUser = addUser;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root-div')
);
registerServiceWorker();
