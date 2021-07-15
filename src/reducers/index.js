import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import formVisibleReducer from './form-visible-reducer';
import cardListReducer from './card-list-reducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  formVisibleOnPage: formVisibleReducer,
  masterCardList: cardListReducer,
});

export default rootReducer;
