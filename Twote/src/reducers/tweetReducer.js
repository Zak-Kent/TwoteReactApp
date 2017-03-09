
export default function tweetsReducer(state=[], action) {   
  switch (action.type) {
    case "APPROVE_TWEET": {
      const newState = state.slice();
      const tweetIdx = action.payload.tweetIdx;
      const approvedValue = action.payload.approvedValue;

      newState[tweetIdx].approved = approvedValue;
      return newState;
    }
    case "RECEIVE_TWEETS": {
      console.log("action inside tweetsReducer: ", action)
      return action.payload;
    }
    default:
      return state;
  } 
}