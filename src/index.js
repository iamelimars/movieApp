import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import RootContainer from './containers/RootContainer';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
