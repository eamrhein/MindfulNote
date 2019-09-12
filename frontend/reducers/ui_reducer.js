import {
  combineReducers,
} from 'redux';

import activeNoteReducer from './active_note_reducer';

const uiReducer = combineReducers({
  activeNote: activeNoteReducer,
});

export default uiReducer;