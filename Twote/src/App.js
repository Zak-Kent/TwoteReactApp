import React, { Component } from 'react';
import { connect } from 'react-redux';

import TweetList from './components/tweetList';
import MyNavbar from './components/myNavbar';
import { apiGetTweets } from './actions/apiTweets';
import './App.css';



class App extends Component {

  constructor() {
    super();
    this.displayTweets = this.displayTweets.bind(this);
  }

  displayTweets(approveValue) {
    let val = approveValue;
    let url = `http://localhost:8000/twitter/tweets/?approved=${val}`;

    this.props.dispatch(apiGetTweets(url))
  }

  render() {
    return (
      
      <div>
          <MyNavbar displayTweets={this.displayTweets}/>
          <TweetList />          
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { 
    tweets: state.tweets, 
  };
}

export default connect(mapStateToProps)(App);
