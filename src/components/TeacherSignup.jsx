import React, { Component } from 'react'
import TeacherSignUpForm from '../components/forms/TeacherSignUpForm'
import TeacherSignUpEdu from '../components/forms/TeacherSignUpEdu'
import TeacherProfilePhoto from '../components/forms/TeacherProfilePhoto'


export class TeacherSignup extends Component {

    constructor(props) {
        super(props)

        //Religion ['Buddism', 'Islam', 'Roman', 'Catholic', 'Christianity']
        
        this.state = {
            
            form_user_details: true,
            form_user_education: false,
            form_user_profile_picture: false,
            user_details: {},
            education_details: {}


        }
        this.nextToEdu = this.nextToEdu.bind(this)
        this.nextToPhoto = this.nextToPhoto.bind(this)

    }
    nextToEdu(values){
        console.log(values)
        this.setState({
            user_details: values,
            form_user_details:false,
            form_user_education:true

        })
    }

    nextToPhoto(values){
        console.log(this.state.user_details)
        console.log(values)
        this.setState({
            education_details: values,
            form_user_details: false,
            form_user_education: false,
            form_user_profile_picture: true
        })
    }
  
   
    render() {
        return (
            
            <div className="container col-12">

                <h1 className="mt-3">Sign up</h1> 
                
                {this.state.form_user_details && <TeacherSignUpForm click_button={this.nextToEdu}/>}
                {this.state.form_user_education && <TeacherSignUpEdu click_button={this.nextToPhoto} user_details={this.state.user_details}/>}
                {this.state.form_user_profile_picture && <TeacherProfilePhoto/>}
                
            </div>

        )
    }
}

export default TeacherSignup
