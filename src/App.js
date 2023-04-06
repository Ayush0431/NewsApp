import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App  extends Component {

 pageSize =5;
  render() {
    return (
      <div>
        <Router>
       <NavBar/>
       <Switch>
          <Route  exact path="/"><News key ="General" pageSize={this.pageSize} category="General" country ="us"/></Route>
          <Route  exact path="/Business"><News  key="Business" pageSize={this.pageSize} category="Business" country ="us"/></Route>
          <Route  exact path="/Entertainment"><News key ="Entertainment" pageSize={this.pageSize} category="Entertainment" country ="us"/></Route>
          <Route  exact path="/General"><News key="General" pageSize={this.pageSize} category="General" country ="us"/></Route>
          <Route  exact path="/Health"><News key ="Health" pageSize={this.pageSize} category="Health" country ="us"/></Route>
          <Route  exact path="/Science"><News key ="Science" pageSize={this.pageSize} category="Science" country ="us"/></Route>
          <Route  exact path="/Sports"><News key ="Sports" pageSize={this.pageSize} category="Sports" country ="us"/></Route>
          <Route  exact path="/Technology"><News key ="Technology" pageSize={this.pageSize} category="Technology" country ="us"/></Route>
        </Switch>
       </Router>
      </div>
    )
  }
}
