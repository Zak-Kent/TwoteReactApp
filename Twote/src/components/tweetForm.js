import React from 'react';

export class TweetForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);

    this.state = {
      approval: null,
    }
  }

  handleOptionChange(e) {
    console.log("my target value: ", e.target.value)
    this.setState({approval: e.target.value})
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <label>
              <input type="radio" value="1" checked={this.state.approval==="1"}
              onChange={this.handleOptionChange}/>
              Approved
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="2" checked={this.state.approval==="2"}
              onChange={this.handleOptionChange}/>
              Denied
            </label>
          </div>
        </form>
      </div>
    )
  }
}

