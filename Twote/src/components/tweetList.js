import React from 'react';
import { connect } from 'react-redux';


const TweetList = React.createClass({

   componentWillMount() {
      console.log("state inside TweetList")
      console.log(this.props.tweets)
   },

   render() {
    return (
            <div>
                <h1>TESTETSTETS</h1>
            </div>
        )

   }

});



function mapStateToProps(state) {
   return { tweets: state.tweets };
}

export default connect(mapStateToProps)(TweetList);