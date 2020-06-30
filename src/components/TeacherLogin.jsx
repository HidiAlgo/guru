import React, { Component } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import AuthenticationService from '../services/AuthenticationService'

export class TeacherLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             login_error: false
        }

        this.login = this.login.bind(this)
        this.validate = this.validate.bind(this)
        this.signup = this.signup.bind(this)
    }
    
    render() {

        const {email, password} = this.state
        return (
            <div className="container mt-5">
                <h1>Sign in</h1>
                <Formik onSubmit={this.login} validate={this.validate} initialValues={{email, password}}>
                    {
                        (props) => (
                            <Form>
                                {this.state.login_error && <div className = "alert alert-danger">Invalid email or password</div>}
                                <fieldset className="form-group">
                                    <label>Email</label>
                                    <Field className="form-control" type="text" name="email"/>
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>Password</label>
                                    <Field className="form-control" type="password" name="password"/>
                                </fieldset>
                                <button type="submit" className="btn btn-success">Sign in</button><br></br><br></br>
                                
                            </Form>
                        )
                    }
                </Formik>
                <h6>If you are not already a GURU sign up now!!!</h6>
                <button className="btn btn-primary" onClick={this.signup}>Sign up</button>
                
            </div>
        )
    }

    login(values){
        let email = values.email
        let password = values.password
        if(email == 'hashan.mahesh01@gmail.com' && password == 'VUBishoo840*'){
            AuthenticationService.registerSuccessfulLogin(email,password)
            this.props.history.push('/findaguru/beaguru/dashboard')
        }else{
            this.setState({
                login_error: true
            })
        }
    }

    validate(){

    }

    signup(){
        this.props.history.push('/findaguru/beaguru/signup/user_details')
    }
}

export default TeacherLogin
