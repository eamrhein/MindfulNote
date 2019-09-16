import * as notebookAPI from '../util/notebook_api_util';
import { REMOVE_NOTE } from './note_actions';

export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

export const receiveAllnotebooks = (notebooks) => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks,
});

export const receiveNotebook = (notebook) => ({
  type: RECEIVE_NOTEBOOK,
  notebook,
});

export const removeNotebook = (notebook) => ({
  type: REMOVE_NOTE,
  notebook,
});

export const createNotebook = (notebook) => (dispatch) => (
  notebookAPI.createNotebook(notebook)
    .then((slug) => dispatch(receiveAllnotebooks(slug)))
);

export const deleteNotebook = (id) => (dispatch) => (
  notebookAPI.deleteNotebook(id)
    .then((slug) => dispatch(removeNotebook(slug)))
);

export const fetchNotebooks = () => (dispatch) => (
  notebookAPI.fetchNotebooks()
    .then((slug) => dispatch(receiveAllnotebooks(slug)))
);

export const fetchNotebook = (notebook) => (dispatch) => (
  notebookAPI.fetchNotebook(notebook)
    .then((slug) => dispatch(receiveNotebook(slug)))
);
