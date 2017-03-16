import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';


export class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      active: '1'
    }
  }

  handleSelect(eventKey) {
    event.preventDefault();

    let stateCopy = {...this.state}
    stateCopy.active = eventKey;
    this.setState(stateCopy);

    this.props.displayTweets(eventKey)
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.state.active} onSelect={this.handleSelect}>
        <NavItem eventKey="0">Pending Tweets</NavItem>
        <NavItem eventKey="1">Approved Tweets</NavItem>
        <NavItem eventKey="2">Denied Tweets</NavItem>
      </Nav>
    );
  }
};

export default MyNavbar;