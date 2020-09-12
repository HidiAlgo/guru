import React, { Component } from 'react'

import {Tabs, Tab, Col, Row, Form, Button} from 'react-bootstrap'
import AuthenticationService from '../../services/AuthenticationService'
import TeacherAddService from '../../services/TeacherAddService'

export default class TeacherProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             addCount: 0,
             birth_date: null,
             city: null,
             email: null,
             first_name: null,
             last_name: null,
             nic: null,
             password: null,
             phone_number: null,
             photo: null,
             state: null,
             street_address: null,
             street_address2: null,
             zip_code: null,
             education: {
                 id: null,
                 degrees: [],
                 diplomas: [],
                 teacherAlResult: {
                     al_id: null,
                     general_english: null,
                     other_subjects: null
                 },
                 teacherOlResult: {
                     bucket_subjects: null,
                     english: null,
                     history: null,
                     mathematics: null,
                     ol_id: null,
                     religion_subject: null,
                     science: null,
                     sinhala: null
                 }
             }

        }
    }

    componentDidMount(){
        AuthenticationService.getTeacherDetails()
            .then((response) =>{

                let {birth_date, city, email, first_name, last_name, nic, phone_number, photo, state, street_address, street_address2, zip_code} = response.data
                let {english,history,mathematics,religion_subject,science,sinhala, bucket_subjects, ol_id } = response.data.education.teacherOlResult
                let {al_id, general_english,other_subjects} = response.data.education.teacherAlResult
                console.log(response.data)
                let bday = new Date(birth_date)
                birth_date = bday.toISOString().substr(0,10)
                this.setState({
                    birth_date,city, email, first_name, last_name, nic, phone_number, photo, state, street_address, street_address2, zip_code,
                    education: {
                        degrees: response.data.education.degrees,
                        diplomas: response.data.education.diplomas,
                        teacherAlResult: {
                            al_id,general_english, other_subjects
                        },
                        teacherOlResult: {
                            english,history,mathematics,religion_subject,science,sinhala, bucket_subjects, ol_id
                        }
                    }
                })
                TeacherAddService.getTeacherAddCount(this.state.email)
                    .then((response) => {
                        this.setState({
                            addCount: response.data
                        })
                    })
                    .catch((error) => {

                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    render() {

        return (
            <div className="container">
                <div className="row">
  		            <div className="col-sm-10"><h1>{this.state.first_name + " "+this.state.last_name}</h1></div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="text-center">
                            {!this.state.photo && <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar rounded-circle img-thumbnail" alt="avatar"></img>}
                            {this.state.photo && <img src={`data:image/jpeg;base64,${this.state.photo}`} style={{width:"220px",height: "220px"}}className="avatar rounded-circle img-thumbnail" alt="avatar"></img>}
                            <h6>Upload a different photo...</h6>
                            <input type="file" className="text-center center-block file-upload"></input>
                        </div><hr></hr><br></br>
                        <ul className="list-group">
                            <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Shares</strong></span> 125</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Likes</strong></span> 13</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Posts</strong></span>{this.state.addCount}</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> 78</li>
                        </ul> 
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-12">
                                <Tabs defaultActiveKey="user" id="uncontrolled-tab-example">
                                    <Tab eventKey="user" title="User">
                                        <hr></hr>
                                        <Form>
                                            <Row>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>First name</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="first name" value={this.state.first_name}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>Last name</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="last name" value={this.state.last_name}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>Phone number</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="phone number" value={this.state.phone_number}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>Email</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="email" value={this.state.email}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>Birthdate</h6></Form.Label>
                                                        <Form.Control type="date" placeholder="birth date" defaultValue={this.state.birth_date}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>Gender</h6></Form.Label>
                                                        <Row>
                                                            <Col><Form.Check type="radio" label="Male "></Form.Check></Col>                                       
                                                            <Col><Form.Check type="radio" label="Female "></Form.Check></Col>
                                                            <Col><Form.Check type="radio" label="Other "></Form.Check></Col>
                                                        </Row>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>NIC</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="national ID card number" value={this.state.nic}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>Street address 1</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="street address one" value={this.state.street_address}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>Street address 2</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="street address two" value={this.state.street_address2}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>State</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="state" value={this.state.state}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>City</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="city" value={this.state.city}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group>
                                                        <Form.Label><h6>Zip code</h6></Form.Label>
                                                        <Form.Control type="text" placeholder="zip code" value={this.state.zip_code}></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Button variant="primary" type="submit">
                                                    save
                                                </Button>
                                            </Row>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="o_l" title="O/L">
                                        <hr></hr>
                                        <Row>
                                            <table className="table table-striped">
                                                <tr>
                                                    <th>Subject</th>
                                                    <th>Result</th>
                                                </tr>
                                                <tr>
                                                    <td>Mathematics</td>
                                                    <td>{this.state.education.teacherOlResult.mathematics}</td>
                                                </tr>
                                                <tr>
                                                    <td>English</td>
                                                    <td>{this.state.education.teacherOlResult.english}</td>
                                                </tr>
                                                <tr>
                                                    <td>Science</td>
                                                    <td>{this.state.education.teacherOlResult.science}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sinhala</td>
                                                    <td>{this.state.education.teacherOlResult.sinhala}</td>
                                                </tr>
                                                <tr>
                                                    <td>History</td>
                                                    <td>{this.state.education.teacherOlResult.history}</td>
                                                </tr>
                                                <tr>
                                                    <td>Religion subject</td>
                                                    <td>{this.state.education.teacherOlResult.religion_subject}</td>
                                                </tr>
                                                {this.state.education.teacherOlResult.bucket_subjects &&
                                                    <>
                                                        <tr>
                                                            <td>{this.state.education.teacherOlResult.bucket_subjects[0].subject.replace('_', ' ')}</td>
                                                            <td>{this.state.education.teacherOlResult.bucket_subjects[0].result}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>{this.state.education.teacherOlResult.bucket_subjects[1].subject.replace('_', ' ')}</td>
                                                            <td>{this.state.education.teacherOlResult.bucket_subjects[1].result}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>{this.state.education.teacherOlResult.bucket_subjects[2].subject.replace('_', ' ')}</td>
                                                            <td>{this.state.education.teacherOlResult.bucket_subjects[2].result}</td>
                                                        </tr>
                                                    </>
                                                }
                                            </table>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="a_l" title="A/L" >
                                        <Row>
                                            <table className="table table-striped">
                                                <tr>
                                                    <th>Subject</th>
                                                    <th>Result</th>
                                                </tr>
                                                <tr>
                                                    <td>General English</td>
                                                    <td>{this.state.education.teacherAlResult.general_english}</td>
                                                </tr>
                                                {this.state.education.teacherAlResult.other_subjects &&
                                                
                                                    <>
                                                        <tr>
                                                            <td>{this.state.education.teacherAlResult.other_subjects[0].subject}</td>
                                                            <td>{this.state.education.teacherAlResult.other_subjects[0].result}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>{this.state.education.teacherAlResult.other_subjects[1].subject}</td>
                                                            <td>{this.state.education.teacherAlResult.other_subjects[1].result}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>{this.state.education.teacherAlResult.other_subjects[2].subject}</td>
                                                            <td>{this.state.education.teacherAlResult.other_subjects[2].result}</td>
                                                        </tr>
                                                    </>
                                                }
                                            </table>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="degree" title="Degrees" >
                                        <hr></hr>
                                        <Row>
                                            <Col>
                                                {this.state.education.degrees.map((degree) => 
                                                    <div className="card mt-4" key={degree.degree_id}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{degree.degree_title}</h5>
                                                            <p className="card-text">{degree.description}</p>
                                                            <button className="btn btn-primary" disabled>View</button>
                                                        </div>
                                                    </div>
                                                )                         
                                            }
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="diploma" title="Diplomas" >
                                        <hr></hr>
                                        <Row>
                                            <Col>
                                            
                                                {this.state.education.diplomas.map((diploma) => 
                                                
                                                <div className="card mt-4" key={diploma.diploma_id}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{diploma.diploma_name}</h5>
                                                        <p className="card-text">{diploma.description}</p>
                                                        <button className="btn btn-primary" disabled>View</button>
                                                    </div>
                                                </div>
                                                
                                                )}
                                            
                                            </Col>
                                        </Row>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}
