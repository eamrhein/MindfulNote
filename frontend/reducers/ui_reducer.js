import {
  combineReducers,
} from 'redux';

import activeNoteReducer from './active_note_reducer';
import loadingReducer from './loading_reducer';

const uiReducer = combineReducers({
  activeNote: activeNoteReducer,
  loading: loadingReducer,
});

export default uiReducer;
