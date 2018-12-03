import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
export default function configureStore(initialState={login:{error:false, request : false, data: null}}) {

   return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware( thunk))
    );
}
