import React, { Component } from 'react'
import TeacherSignUpForm from '../components/forms/TeacherSignUpForm'
import TeacherSignUpEdu from '../components/forms/TeacherSignUpEdu'
import TeacherProfilePhoto from '../components/forms/TeacherProfilePhoto'
import SignUpService from '../services/SignUpService'


export class TeacherSignup extends Component {

    constructor(props) {
        super(props)

        //Religion ['Buddism', 'Islam', 'Roman', 'Catholic', 'Christianity']
        
        this.state = {
            
            form_user_details: true,
            form_user_education: false,
            form_user_profile_picture: false,
            user_details: {},
            education_details: {},
            profile_photo: null


        }
        this.nextToEdu = this.nextToEdu.bind(this)
        this.nextToPhoto = this.nextToPhoto.bind(this)
        this.submit = this.submit.bind(this)

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
    
    submit(img){

        const finalObject = this.state.user_details
        const {first_name, last_name, phone_number, email, password, birth_date, nic, street_address, street_address2, city, state, zip_code, nationality, religion, photo} = this.state.user_details
        const {mathematics, science, sinhala, english, religion_subject, history} = this.state.education_details.ol_result
        const obj = {
            first_name,
            last_name,
            phone_number,
            email,
            password,
            birth_date,
            nic,
            street_address,
            street_address2,
            city,
            state,
            zip_code,
            nationality,
            religion,
            photo,
            education: {
                degrees: this.state.education_details.degrees,
                diplomas: this.state.education_details.diplomas,
                teacherAlResult: {
                    general_english: this.state.education_details.al_result.general_english,
                    other_subjects: [
                        {
                            subject: this.state.education_details.al_result.subject1[0],
                            result: this.state.education_details.al_result.subject1[1]
                        },
                        {
                            subject: this.state.education_details.al_result.subject2[0],
                            result: this.state.education_details.al_result.subject2[1]
                        },
                        {
                            subject: this.state.education_details.al_result.subject3[0],
                            result: this.state.education_details.al_result.subject3[1]
                        }
                    ]
                },
                teacherOlResult: {
                    mathematics,
                    science,
                    sinhala,
                    english,
                    religion_subject,
                    history,
                    bucket_subjects: [
                        {
                            subject: this.state.education_details.ol_result.bucket1[0],
                            result:  this.state.education_details.ol_result.bucket1[1]
                        },
                        {
                            subject: this.state.education_details.ol_result.bucket2[0],
                            result:  this.state.education_details.ol_result.bucket2[1]
                        },
                        {
                            subject: this.state.education_details.ol_result.bucket3[0],
                            result:  this.state.education_details.ol_result.bucket3[1]
                        }
                    ]
                }
            }
        }
        console.log("This is the education details before the form is getting submited")
        console.log(obj)

        let newUser_details = this.state.user_details
        newUser_details.photo = null
        this.setState({ 
            user_details:newUser_details,
            profile_photo: img
        }, () => (SignUpService.saveUserDetails(obj)
        .then((response) => {
            console.log("success one")
            SignUpService.saveUserImage(this.state.user_details.email, img)
                .then((response) =>{
                    console.log("success two")
                    this.props.history.push("/findaguru/beaguru/login/")
                } )
                .catch((error) => {
                    console.log("Error")
                })
        }).catch((error) => {
            console.log("error one")
        })))
    }
   
    render() {
        return (
            
            <div className="container col-12">

                <h1 className="mt-3">Sign up</h1> 
                
                {this.state.form_user_details && <TeacherSignUpForm click_button={this.nextToEdu}/>}
                {this.state.form_user_education && <TeacherSignUpEdu click_button={this.nextToPhoto} user_details={this.state.user_details}/>}
                {this.state.form_user_profile_picture && <TeacherProfilePhoto click_button={this.submit}/>}
                
            </div>

        )
    }
}

export default TeacherSignup
