import { handleActions } from 'redux-actions';
import * as types from '../../actionTypes';

const logInReducer = handleActions({
  [types.FETCH_USER]:
  (state, action) => ({
    ...state,
    request: true,
    data: action.payload,
  }),
  [types.FETCH_USER_SUCCESS]:
      (state, action) => ({
        ...state,
        request: false,
        data: action.payload,
        error: false,
      }),
  [types.FETCH_USER_ERROR]:
      (state, action) => ({
        ...state,
        request: false,
        error: action.payload.error,
        data: action.payload,
      }),
},
{
  request: false,
  error: false,
  data: null,
});

const signInReducer = handleActions({
  [types.FETCH_SIGN_IN]:
      (state, action) => ({
        ...state,
        request: true,
        data: action.payload,
      }),
  [types.FETCH_SIGN_IN_SUCCESS]:
      (state, action) => ({
        ...state,
        request: false,
        data: action.payload,
        error: false,
      }),
  [types.FETCH_SIGN_IN_ERROR]:
      (state, action) => ({
        ...state,
        request: false,
        error: action.payload.error,
        data: action.payload,
      }),
},
{
  request: false,
  error: false,
  data: null,
});

export default { logInReducer, signInReducer };
