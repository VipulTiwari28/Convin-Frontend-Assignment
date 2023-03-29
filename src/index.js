import { combineReducers } from 'redux';
import bucketReducer from './reducers/bucketReducer';
import cardReducer from './reducers/cardReducer';
import historyReducer from './reducers/historyReducer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

const rootReducer = combineReducers({
    bucket: bucketReducer,
    card: cardReducer,
    history: historyReducer
});


ReactDOM.render(
    <Provider rootReducer={rootReducer}>
        <App />
    </Provider>,
    document.getElementById('root')
);
export default rootReducer;