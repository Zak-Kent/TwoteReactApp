export function approveTweetAction(approved, idx) {

  return function(dispatch) {

    dispatch({ 
      type: "APPROVE_TWEET",
      payload: {
        tweetIdx: idx,
        approvedValue: approved
      }
    }) 
  }
}