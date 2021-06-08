import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/" >
            <span>Home</span>
          </Link>
          <Link to="/about" >
            <span>About</span>
          </Link>
          <Link to="/users" >
            <span>Users</span>
          </Link>
          <Link to="/strict-access" >
            <span>StrictAccess</span>
          </Link>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/strict-access'>
            <StrictAccess user={ {username: 'joao', password: '123'} } />
          </Route>
          <Route path='/users/:id' render={(props) => <Users greetingMessage="Good Morning!" {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
