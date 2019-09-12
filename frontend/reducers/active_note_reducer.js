import { RECEIVE_NOTE } from '../actions/note_actions';

const activeNoteReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTE:
      return action.note;
    default:
      return state;
  }
};

export default activeNoteReducer;
