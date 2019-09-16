import {
  combineReducers,
} from 'redux';

import activeNoteReducer from './active_note_reducer';
import loadingReducer from './loading_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
  activeNote: activeNoteReducer,
  loading: loadingReducer,
  modal: modalReducer,
});

export default uiReducer;
