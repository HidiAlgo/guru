import React from 'react';


import Home from './components/Home'
import TeacherLogin from './components/TeacherLogin'
import ErrorComponent from './components/ErrorComponent'
import TeacherSignup from './components/TeacherSignup'
import TeacherDashboard from './components/dashboards/TeacherDashboard'
import FooterComponent from './components/navigations/FooterComponent'
import HeaderComponent from './components/navigations/HeaderComponent'
import AuthenticatedRoute from './services/AuthenticatedRoute'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App container-fluid">

      <Router>
        <HeaderComponent/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/findaguru/home" component={Home}/>
          <Route path="/findaguru/beaguru/login" component={TeacherLogin}/>
          <Route path="/findaguru/beaguru/signup/user_details" component={TeacherSignup}/>
          <AuthenticatedRoute path="/findaguru/beaguru/dashboard" component={TeacherDashboard}/>
          <Route component={ErrorComponent}/>
        </Switch>
        <FooterComponent/>
      </Router>

    </div>
  );
}

export default App;
