import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { bugAdded, bugRemoved, bugResolved, increment, decrement } from "./actions/actions";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import allReducers from "./reducers/allReducers";

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const unsubscribed = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(bugAdded("Bug 1"));

unsubscribed()

store.dispatch(bugRemoved("Bug 1"));
store.dispatch(bugResolved(1))
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
