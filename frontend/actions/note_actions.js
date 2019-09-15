/* eslint-disable import/prefer-default-export */
import * as noteApi from '../util/noteApiUtil';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const START_LOADING_ALL_NOTES = 'START_LOADING_ALL_NOTES';

export const receiveALLnotes = (notes) => ({
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

const startLoadingAllNotes = () => ({
  type: START_LOADING_ALL_NOTES,
});

export const createNote = (note) => (dispatch) => {
  noteApi.createNote(note)
    .then((slug) => dispatch(receiveNote(slug)));
};

export const deleteNote = (id) => (dispatch) => (
  noteApi.deleteNote(id)
    .then((slug) => dispatch(removeNote(slug)))
);

export const updateNote = (note) => (dispatch) => (
  noteApi.updateNote(note)
    .then((slug) => dispatch(receiveNote(slug)))
);

export const fetchNotes = () => (dispatch) => {
  dispatch(startLoadingAllNotes());
  return noteApi.fetchNotes()
    .then((slug) => dispatch(receiveALLnotes(slug)));
};

export const fetchNote = (id) => (dispatch) => (
  noteApi.fetchNote(id)
    .then((slug) => dispatch(receiveNote(slug)))
);
