import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import App from './components/App';

import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);