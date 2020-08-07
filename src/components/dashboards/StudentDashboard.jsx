import React, { Component } from 'react'

import TeacherAddService from '../../services/TeacherAddService'

export class StudentDashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             adds: []
        }
    }

    componentDidMount(){
        let {grade, subject, district, city} = this.props.match.params
        let newAdds = null
        TeacherAddService.getAddsForStudents(grade, subject, district, city)
            .then((response) => {
               this.setState({
                   adds: response.data
               })
            })
            .catch((response) => {
                console.log(response)
            })

        
    }

    
    render() {
        return (
            <div className="container">
                
                {this.state.adds.map((add, index) => (
                    <div key={index} className="row border mt-5" >
                    <div className="col-8">
                        <h4>{add.teacherAdd.title}</h4>
                        <p>{add.teacherAdd.description}</p>
                        <hr></hr>
                        <div className="d-flex flex-row">
                            <div className="d-flex justify-content-start">
                                <div className="p-2"><b>Hourly price: </b>{add.teacherAdd.hour_price}</div>
                                <div className="p-2"><b>Phone Number: </b>{add.teacherAdd.phone_number}</div>
                                <div className="p-2"><b>Email: </b>{add.teacherAdd.email}</div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <h5 className="p-2">{add.name}</h5>
                                <div className="p-2"><img src={`data:image/jpeg;base64,${add.photo}`} style = {{width: "35px",height:"35px"}}></img></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-4" style={{backgroundColor: "grey"}}>
                        <img className = "col-12" src = {`data:image/jpeg;base64,${add.teacherAdd.banner}`}></img>
                    </div>
                </div>
                ))}
            </div>
        )
    }
}

export default StudentDashboard
