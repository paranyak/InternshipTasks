import { combineReducers } from 'redux';
import login from './login';
import signin from './signin';

export default combineReducers({
    login,
    signin
});

