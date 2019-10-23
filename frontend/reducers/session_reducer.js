import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  CURRENT_NOTEBOOK,
} from '../actions/session_actions';

// eslint-disable-next-line no-underscore-dangle
const _nullUser = Object.freeze({
  id: null,
});

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  const nState = { ...state };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        id: action.currentUser.id,
      };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case CURRENT_NOTEBOOK:
      nState.currentNotebook = action.id;
      return nState;
    default:
      return state;
  }
};

export default sessionReducer;
