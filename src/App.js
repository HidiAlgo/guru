import React, { Component }  from 'react';


import Home from './components/Home'
import TeacherLogin from './components/TeacherLogin'
import ErrorComponent from './components/ErrorComponent'
import TeacherSignup from './components/TeacherSignup'
import TeacherDashboard from './components/dashboards/TeacherDashboard'
import FooterComponent from './components/navigations/FooterComponent'
import HeaderComponent from './components/navigations/HeaderComponent'
import AuthenticatedRoute from './services/AuthenticatedRoute'
import StudentSelections from './components/StudentSelections'
import StudentSUbjectSelection from './components/forms/StudentSubjectSelection'
import TeacherProfile from './components/profiles/TeacherProfile'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       photo: null,
       user_name: ""
    }

    this.setPhoto = this.setPhoto.bind(this)
  }

  setPhoto(image, name){
    console.log(" I am at the app.js file")
    this.setState({
      photo: image,
      user_name: name
    })
  }
  
  render() {
    return (
      <div>

        <Router>
          <HeaderComponent userPhoto = {this.state.photo} userName={this.state.user_name}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/findaguru/home" component={Home}/>
            <Route path="/findaguru/beaguru/login" exact component={TeacherLogin}/>
            <Route path="/findaguru/forstudents"  component={StudentSelections}/>
            <Route path="/findaguru/beaguru/signup/user_details" exact component={TeacherSignup}/>
            <AuthenticatedRoute path="/findaguru/beaguru/dashboard" exact render = {(props) => <TeacherDashboard {...props} changePhoto={this.setPhoto}/>}/>
            <AuthenticatedRoute path="/findaguru/beaguru/dashboard/teacher_profile" component={TeacherProfile}/>
            <Route component={ErrorComponent}/>
            {/* <Route component={TeacherProfile}/> */}

            {/* component={() => <TeacherDashboard changePhoto={this.setPhoto}/>} */}
          </Switch>
          <FooterComponent/>
        </Router>

      </div>
    )
  }
}

export default App;
