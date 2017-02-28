import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

// import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {
    tweets: [1, 2, 3, 4]
    }

export const reducer = (state=initialState, action) => {
  
  // switch (action.type) {
  //   case "add": {
  //     return { ...state, addedItem: action.payload }
  //   }

  // }
  
  return state;
}

const middleware = applyMiddleware(thunk, logger())

export default createStore(reducer, composeWithDevTools(middleware));