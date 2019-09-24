import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import {createStore, applyMiddleware} from "redux";

import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import { logger } from "redux-logger";
import thunk from "redux-thunk";


import App  from  "./App";
import combineReducers from "./reducers/combineReducers";


const spaStore = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store={spaStore}>
  <Router>
  <App/>
  </Router>
  </Provider>,
  document.getElementById("app")); 