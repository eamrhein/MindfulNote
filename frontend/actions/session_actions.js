import * as sessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CURRENT_NOTEBOOK = 'CURRENT_NOTEBOOK';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const currentNoteBook = (id) => ({
  type: CURRENT_NOTEBOOK,
  id,
});

export const signup = (user) => (dispatch) => (
  sessionAPI.signup(user)
    .then((data) => dispatch(receiveCurrentUser(data)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = (user) => (dispatch) => (
  sessionAPI.login(user)
    .then((data) => dispatch(receiveCurrentUser(data)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => (dispatch) => (
  sessionAPI.logout()
    .then(() => dispatch(logoutCurrentUser()),
      (errors) => dispatch(receiveErrors(errors.responseJSON)))
);
