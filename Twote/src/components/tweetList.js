import React from 'react';
import { connect } from 'react-redux';


import { approveTweetAction } from '../actions/tweetActions';
import { apiGetTweets } from '../actions/apiGetTweets';
// import TweetForm from './tweetUpdateForm';

const TweetList = React.createClass({
  componentWillMount() {
    console.log("state inside TweetList")
    console.log(this.props.tweets)
    let url = 'http://localhost:8000/twitter/tweets/'
    this.props.dispatch(apiGetTweets(url))
  },

  approveTweet(tweet, idx) {
    // send message to store that tweet is approved 
    const approvedValue = 1 //tweet.approved -- will need to set this later as user input changes 

    this.props.dispatch(approveTweetAction(approvedValue, idx))
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
                    <button onClick={() => this.approveTweet(tweet, idx)}>Approve Tweet</button>
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