import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App  extends Component {

 
  render() {
    return (
      <div>
        <Router>
       <NavBar/>
       <Switch>
          <Route path="/"><News pageSize={5} category="General" country ="us"/></Route>
          <Route path="/Business"><News pageSize={5} category="Business" country ="us"/></Route>
          <Route path="/Entertainment"><News pageSize={5} category="Entertainment" country ="us"/></Route>
          <Route path="/General"><News pageSize={5} category="General" country ="us"/></Route>
          <Route path="/Health"><News pageSize={5} category="Health" country ="us"/></Route>
          <Route path="/Science"><News pageSize={5} category="Science" country ="us"/></Route>
          <Route path="/Sports"><News pageSize={5} category="Sports" country ="us"/></Route>
          <Route path="/Technology"><News pageSize={5} category="Technology" country ="us"/></Route>
        </Switch>
       </Router>
      </div>
    )
  }
}
