import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingMessage, match } = this.props
    const { id } = match.params;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingMessage }, My awesome Users component number { id } </p>
      </div>
    );
  }
};

export default Users;

