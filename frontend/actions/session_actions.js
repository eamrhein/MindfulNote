import * as sessionAPI from '../util/sessionApiUtil';

export const RECEIVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const signup = (user) => (dispatch) => (
  sessionAPI.signup(user)
    .then((data) => dispatch(receiveCurrentUser(data)))
);

export const login = (user) => (dispatch) => (
  sessionAPI.login(user)
    .then((data) => dispatch(receiveCurrentUser(data)))
);

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const logout = () => (dispatch) => (
  sessionAPI.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});
