import React, { Component } from 'react'

import Add from '../forms/Add'
import AuthenticationService from '../../services/AuthenticationService'
import TeacherAddService from '../../services/TeacherAddService'

export class TeacherDashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             adds: [],
             details: null,
             photo: null, 
             name: null,
             count: 0

        }
    }
    
    componentDidMount(){
        AuthenticationService.getTeacherDetails()
            .then((response) => {
                this.setState({
                    details: response.data,
                    photo: `data:image/jpeg;base64,${response.data.photo}`,
                    name: response.data.first_name +" "+ response.data.last_name
                }, () => this.props.changePhoto(this.state.photo, this.state.name))
                this.refreshData()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    refreshData = () => {
        TeacherAddService.getTeacherAdds()
        .then((response) => {
            this.setState({
                adds: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    createAdd = (add) => {
        // let reader = new FileReader()
        // reader.readAsDataURL(banner)

        // console.log("this is the url man-----------------", reader.result)
        // add.banner = reader.result
        add.banner = null
        console.log("new Add Object recieved at create add *********************")
        console.log(add)
        let newAdd = this.state.adds
        newAdd.push(add)
        this.setState({
            adds: newAdd
        })
        // this.refreshData()
        
    }

    render() {
        let style = {
            style: "width: 18rem"
        }
        return (
            <div className="container" >
                <h3 className="text-center mt-5">Welcome {this.state.name}</h3>
                <div className="row">
                   {this.state.adds.map((add, index) => (
                    <div className="col-3" key={index}>
                            <div className="card" >
                               {add.banner && <img src={`data:image/jpeg;base64,${add.banner}`} className="card-img-top" alt="..." />}
                               {add.imgURL && <img src={add.imgURL} className="card-img-top" alt="..." />}
                                <div className="card-body">
                                    <h5 className="card-title">{add.title}</h5>
                                    <p className="card-text">{add.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">District: {add.district}</li>
                                    <li className="list-group-item">City: {add.city}</li>
                                    <li className="list-group-item">hour price: {add.hour_price}</li>
                                    <li className="list-group-item">phone number: {add.phone_number}</li>
                                </ul>
                                <div className="card-body">
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                    </div>
                   ))}
                    <div className="col-3">
                        <Add createAdd = {this.createAdd}/>
                    </div>
                </div>
                
            </div>

        )
    }
}

export default TeacherDashboard
