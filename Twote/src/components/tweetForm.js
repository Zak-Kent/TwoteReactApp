import React from 'react';

export class TweetForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      approved: null,
      tweet: this.props.tweet,
      timeInterval: 5
    }
  }

  handleOptionChange(e) {
    console.log("my target value: ", e.target.value)
    this.setState({approved: e.target.value})
  }

  handleInput(e) {
    e.preventDefault();
    console.log("state inside of handleInput: ", this.state)
    console.log("value of func passed down: ", this.props.approveTweet)
    
    let tweetCopy = {...this.props.tweet}
    tweetCopy.approved = this.state.approved
    tweetCopy.time_interval = this.state.timeInterval

    console.log("tweet copy: ", tweetCopy)


    this.props.approveTweet(tweetCopy)
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <label>
              <input type="radio" value="1" checked={this.state.approved==="1"}
              onChange={this.handleOptionChange}/>
              Approved
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="2" checked={this.state.approved==="2"}
              onChange={this.handleOptionChange}/>
              Denied
            </label>
          </div>
        </form>
        <button onClick={this.handleInput}>Approve Tweet</button>
      </div>
    )
  }
}

TweetForm.propTypes = {
  approveTweet: React.PropTypes.func,
  tweetId: React.PropTypes.number,
}
