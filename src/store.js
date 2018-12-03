import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers.js";

export default function configureStore(initialState = {
    user: {
        login: {error: false, request: false, data: null},
        signin: {error: false, request: false, data: null}
    }
}) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
