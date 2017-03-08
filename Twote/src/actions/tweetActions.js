export function approveTweetAction(tweet) {

  return function(dispatch) {

    dispatch({ 
      type: "APPROVE_TWEET",
      payload: {
        approved: 1
      }
    }) 
  }
}