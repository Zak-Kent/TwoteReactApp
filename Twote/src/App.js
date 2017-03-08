import React, { Component } from 'react';
import TweetList from './components/tweetList';
import TweetForm from './components/tweetUpdateForm';
import './App.css';



class App extends Component {
  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      
      <div>
          <TweetList />
          <TweetForm onSubmit={this.handleSubmit} />
      </div>

    );
  }
}


export default App;
