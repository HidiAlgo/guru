import React, { Component } from 'react'
import Add from '../forms/Add'

export class TeacherDashboard extends Component {

    render() {
        let style = {
            style: "width: 18rem"
        }
        return (
            <div className="container" >
                <h3 className="text-center mt-5">Welcome Hashan</h3>
                <div className="row">
                    <div className="col-3">
                        <div className="card" >
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Subject and Grade</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li className="list-group-item">District</li>
                                <li className="list-group-item">City</li>
                                <li className="list-group-item">Hour price</li>
                                <li className="list-group-item">Phone number</li>
                            </ul>
                            <div className="card-body">
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <Add />
                    </div>
                </div>
                
            </div>

        )
    }
}

export default TeacherDashboard
