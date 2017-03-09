import 'whatwg-fetch';

export function apiGetTweets(url) {
  // calls api using provided url and thunk 

  return function(dispatch) {
    // nested return lets you chain aysnc actions with thunk middleware so you can call .then on 
    // the response of the fetch() after it dispatches its action to store. This is called in
    // index.jsx apiAction() method 
    return fetch(url, {
            method: 'GET',
            // mode: 'no-cors'
           })
             .then((res) => {
              // need to pass data stream from fetch through JSON() to get correct format 
              return res.json()
              })
                .then((jsonRes) => {
                  dispatch({type: "RECEIVE_TWEETS", payload: jsonRes});
                })
                .catch((err) => {
                  // dispatch(type: "FETCH_RACKS_ERROR", payload: err)
                  console.log(err);
                })
  }
}

export function apiPatchTweet(url, tweetObj) {

  console.log("tweetObj inside apiPatchTweet: ", tweetObj)
  return function(dispatch) {
    return fetch(url, {
      method: 'PUT', 
      body: JSON.stringify(tweetObj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return res.json()
      })
        .then((jsonRes) => {
          console.log("response from patch: ", jsonRes)
        })
        .catch((err) => {
          console.log(err);
        })
  }
}
