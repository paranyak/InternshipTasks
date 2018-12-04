import createAction from 'redux-actions/es/createAction';
import * as types from '../../actionTypes';

export const fetchUsersStart = createAction(
  types.FETCH_USER,
  (name, password) => ({ name, password }),

);
