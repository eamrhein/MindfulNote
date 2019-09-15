import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  START_LOADING_ALL_NOTES,
} from '../actions/note_actions';


const nullLoading = true;

const loadingReducer = (state = nullLoading, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_NOTES:
    case RECEIVE_NOTE:
      return false;
    case START_LOADING_ALL_NOTES:
      return true;
    default:
      return state;
  }
};

export default loadingReducer;
