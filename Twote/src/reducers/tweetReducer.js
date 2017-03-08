const initialState = [
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
    },
    {
      tweet: "fake tweet text 4", 
      approved: null
    }
  ]

export default function tweetsReducer(state=initialState, action) {   
  switch (action.type) {
    case "APPROVE_TWEET": {
      const newState = state.slice();
      const tweetIdx = action.payload.tweetIdx;
      const approvedValue = action.payload.approvedValue;

      newState[tweetIdx].approved = approvedValue;
      return newState;
    }
    default:
      return state;
  } 
}