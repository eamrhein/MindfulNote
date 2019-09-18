import {
  START_LOADING_ALL_NOTES,
} from '../actions/note_actions';
import { RECEIVE_ALL_TAGS } from '../actions/tag_actions';

const nullLoading = false;

const loadingReducer = (state = nullLoading, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return false;
    case START_LOADING_ALL_NOTES:
      return true;
    default:
      return state;
  }
};

export default loadingReducer;
