import { combineReducers } from 'redux';
import user from './duck/user/userReducers';
import reducer from './duck/user/reducers';

const rootReducer = combineReducers({
  login: reducer,
});

export default rootReducer;
