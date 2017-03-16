
export default function tweetsReducer(state=[], action) {   
  switch (action.type) {
    case "RECEIVE_TWEETS": {
      console.log("action inside tweetsReducer: ", action)
      return action.payload;
    }
    default:
      return state;
  } 
}