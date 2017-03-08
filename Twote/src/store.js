import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

// import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {
  tweets: [
    {
      tweet: "fake tweet text 1", 
      approved: null
    },
    {
      tweet: "fake tweet text 2", 
      approved: null
    },
    {
      tweet: "fake tweet text 3", 
      approved: null
    }
  ]
}

export const reducer = (state=initialState, action) => {
  
  switch (action.type) {
    case "APPROVE_TWEET": {
      return { ...state, approved: action.payload }
    }

  }
  
  return state;
}

const middleware = applyMiddleware(thunk, logger())

export default createStore(reducer, composeWithDevTools(middleware));