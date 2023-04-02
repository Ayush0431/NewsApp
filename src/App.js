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
          <Route  exact path="/"><News key ="General" pageSize={5} category="General" country ="us"/></Route>
          <Route  exact path="/Business"><News  key="Business" pageSize={5} category="Business" country ="us"/></Route>
          <Route  exact path="/Entertainment"><News key ="Entertainment" pageSize={5} category="Entertainment" country ="us"/></Route>
          <Route  exact path="/General"><News key="General" pageSize={5} category="General" country ="us"/></Route>
          <Route  exact path="/Health"><News key ="Health" pageSize={5} category="Health" country ="us"/></Route>
          <Route  exact path="/Science"><News key ="Science" pageSize={5} category="Science" country ="us"/></Route>
          <Route  exact path="/Sports"><News key ="Sports" pageSize={5} category="Sports" country ="us"/></Route>
          <Route  exact path="/Technology"><News key ="Technology" pageSize={5} category="Technology" country ="us"/></Route>
        </Switch>
       </Router>
      </div>
    )
  }
}
