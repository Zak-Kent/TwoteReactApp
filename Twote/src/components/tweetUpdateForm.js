import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TweetForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Approval</label>
          <label><Field name="approval" component="input" type="radio" value="1"/> Yes</label>
          <label><Field name="approval" component="input" type="radio" value="2"/> No</label>
        </div>
        <div>
          <label>Time interval</label>
          <Field name="timeInterval" component="select">
          <option></option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
          </Field>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
TweetForm = reduxForm({
  form: 'tweet' // a unique name for this form
})(TweetForm);

export default TweetForm;