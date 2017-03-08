import { applyMiddleware, createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension';
import tweetsReducer from './reducers/tweetReducer';

// import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const reducers = {
  tweets: tweetsReducer,
  form: formReducer
}

const reducer = combineReducers(reducers)

const middleware = applyMiddleware(thunk, logger())

export default createStore(reducer, composeWithDevTools(middleware));