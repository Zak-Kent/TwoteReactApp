import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';


export class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    this.props.displayTweets(eventKey)

  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
      </Nav>
    );
  }
};

export default MyNavbar;