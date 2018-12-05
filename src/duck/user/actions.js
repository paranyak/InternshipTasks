import createActions from 'redux-actions/es/createActions';
import * as types from '../../actionTypes';

const userActions = createActions(
  {
    [types.FETCH_USER]: (name, password) => ({ name, password }),
    [types.FETCH_USER_SUCCESS]: (name, password, token) => ({ name, password, token }),
    [types.FETCH_USER_ERROR]: (name, password, error) => ({ name, password, error }),

  },
);


const signInActions = createActions(
  {
    [types.FETCH_SIGN_IN]: (name, password, email) => ({ name, password, email }),
    [types.FETCH_SIGN_IN_SUCCESS]: (name, password, email, token) => ({
      name, password, email, token,
    }),
    [types.FETCH_SIGN_IN_ERROR]: (name, password, email, error) => ({
      name, password, email, error,
    }),

  },
);

export default { signInActions, userActions };
