import { combineReducers } from 'redux';
import reducer from './duck/user/reducers';

const rootReducer = combineReducers({
  login: reducer.logInReducer,
  signin: reducer.signInReducer,
});

export default rootReducer;
