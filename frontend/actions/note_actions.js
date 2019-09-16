import * as noteAPI from '../util/note_api_util';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const START_LOADING_ALL_NOTES = 'START_LOADING_ALL_NOTES';

export const receiveAllnotes = (notes) => ({
  type: RECEIVE_ALL_NOTES,
  notes,
});

export const removeNote = (note) => ({
  type: REMOVE_NOTE,
  noteId: note.id,
});

export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note,
});

const startLoadingallNotes = () => ({
  type: START_LOADING_ALL_NOTES,
});

export const createNote = (note) => (dispatch) => (
  noteAPI.createNote(note)
    .then((slug) => dispatch(receiveNote(slug)))
);

export const deleteNote = (id) => (dispatch) => (
  noteAPI.deleteNote(id)
    .then((slug) => dispatch(removeNote(slug)))
);

export const updateNote = (note) => (dispatch) => (
  noteAPI.updateNote(note)
    .then((slug) => dispatch(receiveNote(slug)))
);

export const fetchNotes = () => (dispatch) => {
  dispatch(startLoadingallNotes());
  return noteAPI.fetchNotes()
    .then((slug) => dispatch(receiveAllnotes(slug)));
};

export const fetchNote = (id) => (dispatch) => (
  noteAPI.fetchNote(id)
    .then((slug) => dispatch(receiveNote(slug)))
);
