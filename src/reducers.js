import { combineReducers } from 'redux';
import user from './duck/user/userReducers';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
