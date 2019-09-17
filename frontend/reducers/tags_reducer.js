import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
} from '../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nState = { ...state };
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      nState[action.tag.id] = action.tag;
      return nState;
    case REMOVE_TAG:
      delete nState[action.tag.id];
      return nState;
    default:
      return state;
  }
};

export default tagsReducer;
