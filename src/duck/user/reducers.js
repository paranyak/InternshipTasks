import { handleAction } from 'redux-actions';
import * as types from '../../actionTypes';

const reducer = handleAction(
  types.FETCH_USER,
  (state, action) => ({
    ...state,
    request: true,
    data: action.payload,
  }),
  {
    request: false, error: false, data: null,
  },
);

export default reducer;
