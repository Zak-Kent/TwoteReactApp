import React from 'react';
import { connect } from 'react-redux';

import { apiGetTweets, apiPatchTweet } from '../actions/apiTweets';

const TweetList = React.createClass({

  componentWillMount() {
    // gets initial tweets from api and add to state
    let url = 'http://localhost:8000/twitter/tweets/?approved=0';
    this.props.dispatch(apiGetTweets(url))
  },

  approveTweet(tweet) {
    // Triggers PUT request to API that triggers change in tweets approval status
    let tweetCopy = {...tweet};
    tweetCopy.approved = 1;

    let pk = tweetCopy.id;
    let putUrl = `http://localhost:8000/twitter/update/${pk}`;
  
    // change record with PUT then make GET request to update tweets displayed
    this.props.dispatch(apiPatchTweet(putUrl, tweetCopy)).then(() => {
      let getUrl = 'http://localhost:8000/twitter/tweets/?approved=0'
      this.props.dispatch(apiGetTweets(getUrl))
    })
  },

 render() {
  return (
      <div>
        <ul>
          {
            this.props.tweets.map((tweet, idx) => {
              return(
                <div key={idx}>
                  <li>
                    <p>{tweet.tweet}</p>
                    <button onClick={() => this.approveTweet(tweet)}>Approve Tweet</button>
                  </li> 
                </div>
              )
            })
          }
        </ul>
      </div>
    )
 }

});

function mapStateToProps(state) {
  return { 
    tweets: state.tweets, 
  };
}

export default connect(mapStateToProps)(TweetList);