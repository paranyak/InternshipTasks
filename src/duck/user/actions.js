import createActions from 'redux-actions/es/createActions';
import * as types from '../../actionTypes';

const userActions = createActions(
  {
    [types.FETCH_USER]: (name, password) => ({ name, password }),
    [types.FETCH_USER_SUCCESS]: (name, password, token) => ({ name, password, token }),
    [types.FETCH_USER_ERROR]: (name, password, error) => ({ name, password, error }),

  },
);

export default userActions;
