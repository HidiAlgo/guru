import React, { Component } from 'react'

import Add from '../forms/Add'
import AuthenticationService from '../../services/AuthenticationService'
import TeacherAddService from '../../services/TeacherAddService'

//In order to apply a custom alert-confirmation box, use the following third party library
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export class TeacherDashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             adds: [],
             details: null,
             photo: null, 
             name: null,
             count: 0,
             showAdd: false,
             edit: null

        }
    }
    
    componentDidMount(){
        AuthenticationService.getTeacherDetails()
            .then((response) => {
                this.setState({
                    details: response.data,
                    photo: `data:image/jpeg;base64,${response.data.photo}`,
                    name: response.data.first_name +" "+ response.data.last_name,
                    showAdd: false
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

    createAdd = (add, id) => {
        let newAdd = this.state.adds
        if(add.id){
            let i
            for(i = 0;i<newAdd.length;i++){
                if(newAdd[i].id === id){
                    newAdd[i] = add
                    break;
                }
            }
            this.setState({
                adds: newAdd
            })
        }else{
            this.setState({
                addId: id
            }, () => add.id = this.state.addId)
    
            add.banner = null
    
            newAdd.push(add)
    
            this.setState({
                adds: newAdd
            })
        }
        
        // this.refreshData()
        
    }

    removeAdd = (id, title) => {
        confirmAlert({
            title: "Do you want to delete "+title,
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => TeacherAddService.deleteTeacherAdd(id)  
                    .then((response) => {
                        // window.location.reload(false);
                        this.refreshData()
                    })
                    .catch((error) => {
                        console.log(error)
                    })
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          });
    }

    showModal = () => {
        this.setState({
            showAdd: true
        })
    }
    closeModal = () => {
        // console.log("I am the first line in close model in dashboard")
        // this.setState({
        //     showAdd: false
        // },() =>  console.log("I am the last line in close model in dashoboard"))
        this.setState({
            showAdd: false,
            edit: null
        })

    }

    editAdd = (id) => {
        TeacherAddService.getTeacherAdd(id)
            .then((response) => {
                this.setState({
                    edit: response.data,
                    showAdd: true
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        let style = {
            style: "width: 18rem"
        }
        const styleAdd={
            width:'200px',
            height:'200px',
            fontSize:'100px'
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
                                    <button className="btn btn-primary" onClick={() => this.editAdd(add.id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => this.removeAdd(add.id, add.title)}>Remove</button>
                                </div>
                            </div>
                    </div>
                   ))}
                    <div className="col-3">
                        {/* <Add createAdd = {this.createAdd}/> */}
                        <button className="btn btn-outline-info text-center" onClick={this.showModal} style={styleAdd}>+</button>
                       {this.state.showAdd && <Add createAdd={this.createAdd} closeModal = {this.closeModal} edit={this.state.edit}/>}
                    </div>
                </div>
                
            </div>

        )
    }
}

export default TeacherDashboard
