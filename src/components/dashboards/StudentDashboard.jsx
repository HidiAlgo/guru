import React, { Component } from 'react'

export class StudentDashboard extends Component {
    render() {
        return (
            <div>
                <h1>Details for the value that should be given for each of the available result items</h1>
                Titles,<br></br>
                Banner,<br></br>
                Hourly price,<br></br>
                Description,<br></br>
                Phone number, email,<br></br>
                Name of the teacher,<br></br>
                link for the teacher's profile,<br></br>
                photo of the teacher,<br></br>
                <hr></hr>
                Retrieved Detals = {this.props.match.params.grade},{this.props.match.params.subject}, {this.props.match.params.district},{this.props.match.params.city}

            </div>
        )
    }
}

export default StudentDashboard
