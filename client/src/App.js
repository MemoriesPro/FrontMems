import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <PrivateRoute exact path = '/memories' component = {Memories} />
      <Route exact path = '/' component = {Login} />
      <Route exact path = '/register'
             render = {props => <Register {...props} /> } /> {" "}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
