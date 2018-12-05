import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import Navigation from './component/Navigation';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Navigation />
  </Provider>,
  document.getElementById('root'),
);
