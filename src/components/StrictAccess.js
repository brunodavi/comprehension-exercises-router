import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export default class StrictAccess extends Component {
  constructor(props) {
    super(props)

    const { username, password } = this.props.user;
    const redirect = username === 'joao' && password === '1234';
    this.state = { redirect };
  }

  componentDidMount() {
    if (!this.state.redirect) alert('Access denied');
  }

  render() {
    const { redirect } = this.state;
    const { username } = this.props.user;
    return (
      <Route>
        { !redirect ? <Redirect to="/" /> : <span>Welcome { username }!</span> }
      </Route>
    )
  }
}
