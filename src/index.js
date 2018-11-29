import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import Form from './Form';
ReactDOM.render(
    <Provider store={configureStore()}>
        <Form />
    </Provider>,
    document.getElementById('root')
);
