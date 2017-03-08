import React from 'react';
import { connect } from 'react-redux';

import { approveTweetAction } from '../actions/tweetActions';


const TweetList = React.createClass({

  componentWillMount() {
    console.log("state inside TweetList")
    console.log(this.props.tweets)
  },

  approveTweet(tweet, idx) {
    // send message to store that tweet is approved 

    console.log(tweet)
    const modifiedTweet = {
      ... tweet, approved: 1
    }
    console.log(modifiedTweet)
    console.log(idx)

    this.props.dispatch()

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
                  </li>
                  <button onClick={() => this.approveTweet(tweet, idx)}>Approve Tweet</button>
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
  return { tweets: state.tweets };
}

export default connect(mapStateToProps)(TweetList);