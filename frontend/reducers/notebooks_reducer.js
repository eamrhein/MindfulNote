import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
} from '../actions/notebook_actions';


const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nState = { ...state };
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      nState[action.notebook.id] = action.notebook;
      return nState;
    case REMOVE_NOTEBOOK:
      delete nState[action.notebook.id];
      return nState;
    default:
      return state;
  }
};

export default notebooksReducer;
