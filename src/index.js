import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import App from './components/App';
import rootReducer from './reducers/index';
import firebase from './firebase';
import * as serviceWorker from './ServiceWorker';

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>,
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
