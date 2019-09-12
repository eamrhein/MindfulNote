import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
} from '../actions/note_actions';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nState = { ...state };
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      nState[action.note.id] = action.note;
      return nState;
    case REMOVE_NOTE:
      delete nState[action.noteId];
      return nState;
    default:
      return state;
  }
}

export default notesReducer;
