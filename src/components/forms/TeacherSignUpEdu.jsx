import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TeacherOLresults from '../forms/TeacherOLresults'
import TeacherALresults from '../forms/TeacherALresults'
import Diploma from '../forms/Diploma'
import Degree from '../forms/Degree'
import {Modal} from 'react-bootstrap'

export class TeacherSignUpEdu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_details: {},
            education: {
                ol_result: {
                    mathematics: '',
                    science: '',
                    sinhala: '',
                    english: '',
                    religion: '',
                    history: '',
                    bucket1: ['', ''],
                    bucket2: ['', ''],
                    bucket3: ['', '']
                },
                al_result: {
                    general_english: '',
                    subject1: ['', ''],
                    subject2: ['', ''],
                    subject3: ['', '']
                },
                diplomas: [],
                degrees: [],
            },
            show: false,
            
        }
        this.signup = this.signup.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.addDiploma = this.addDiploma.bind(this)
        this.addDegree = this.addDegree.bind(this)
    }

    signup(values) {
        // console.log(values)
        // console.log("User details" + this.props.user_details.first_name)
        this.props.click_button(values)
    }

    handleShow() {
        this.setState({
            show: true
        })
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    addDiploma(dip_details){
        const dip = this.state.education.diplomas
        const degree = this.state.education.degrees
        console.log(dip+"dip add Diploma")
        console.log(degree+"degree add Diploma")
        dip.push(dip_details)
        this.setState({
            education: {
                diplomas: dip,
                degrees: degree
            }
        })
    }

    addDegree(degree_details){
        const degree = this.state.education.degrees
        const dip = this.state.education.diplomas
        console.log(dip+"dip add Diploma")
        console.log(degree+"degree add Diploma")
        degree.push(degree_details)
        console.log("Check this out"+degree[0].degree_title)
        this.setState({
            education: {
                diplomas: dip,
                degrees: degree
            }
       })
    }

    render() {
        return (
            <div >
                <h5 className="text-center">Education qualifications</h5>
                <Formik initialValues={this.state.education} onSubmit={this.signup}>
                    {
                        (props) => (
                            <Form>
                                <TeacherOLresults />
                                <hr></hr>
                                <TeacherALresults />
                                <hr></hr>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th colSpan="3">Your diploma informations</th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        
                                            {this.state.education.diplomas && this.state.education.diplomas.map((diploma,index) => (
                                                <tr key={index}>
                                                    <td>{diploma.diploma_name}</td>
                                                    <td>{diploma.started_year}</td>
                                                    <td>{diploma.end_year}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td className="float-right" colSpan="3">
                                                     <Diploma className = "text-center" addDip = {this.addDiploma}/>
                                                </td>
                                            </tr>
                                            
                                    </tbody>
                                </table>
                                <hr></hr>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th colSpan="3">Your degree informations</th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                            {this.state.education.degrees && this.state.education.degrees.map((degree,index) => (
                                                <tr key={index}>
                                                    <td>{degree.degree_title}</td>
                                                    <td>{degree.started_year}</td>
                                                    <td>{degree.end_year}</td>
                                                </tr>
                                            ))} 
                                            <tr>
                                                <td className="float-right" colSpan="3">
                                                     <Degree className = "text-center" addDegree = {this.addDegree}/>
                                                </td>
                                            </tr>
                                            
                                    </tbody>
                                </table>
                                <hr></hr>
                                <button className="btn btn-success" type="submit">Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}

export default TeacherSignUpEdu
