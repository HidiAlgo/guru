import React, { Component } from 'react'
import {Modal, Dropdown} from 'react-bootstrap'
import ImageUploader from 'react-images-upload';

import Location from '../../front_end_data/Location'
import Subjects from '../../front_end_data/Subjects'

export class Add extends Component {
    constructor(props) {
        super(props)
        this.wrapper = React.createRef();
    
        this.state = {
             show: false,
             title:'',
             grade:1,
             subject: '',
             district: '',
             city:'',
             phone_number: '',
             email: '',
             banner: null,
             hour_price: '',
             description: '',
        }
        this.onDrop = this.onDrop.bind(this);
    }
    
    onDrop(picture) {
        this.setState({
            banner: picture
        });
    }

    showModal = ()=>{
        this.setState({
            show:true
        })
    }
    closeModal = () => {
        this.setState({
            show: false
        })
    }

    saveDetails = () =>{
        console.log(this.state)
    }
    changeText = (event) => {
        let name = event.target.name
        this.setState({
            [name] : event.target.value
        })
    }
    pass = (name, value) => {
        if(name === 'district'){
            this.setState({
                district: value
            })
        }else{
            this.setState({
                city: value
            })
        }
    }

    setSubject = (value) => {
        this.setState({
            subject: value
        })
        console.log("I am here")
    }
    render() {

        const style={
            width:'200px',
            height:'200px',
            fontSize:'100px'
        }


        return (
            <div>
                <button className="btn btn-outline-info text-center" onClick={this.showModal} style={style}>+</button>
                <Modal show={this.state.show} onHide={this.showModal} animation="false" centered animation={false}>
                    <Modal.Header closeButton onClick={this.closeModal}>
                        <Modal.Title>Create a new Add</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="row">
                                <div className = "col-12">
                                    <label>Title</label>
                                    <input type = "text" className = "form-control" name="title" value = {this.state.title} onChange={this.changeText}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <label htmlFor="exampleInputEmail1">Grade</label>
                                    <input type="number" className="form-control" name="grade" min="1" max="13" onChange={this.changeText} value = {this.state.grade}/>
                                    <small className="form-text text-muted">Enter your teaching grade between 1 and 13</small>
                                </div>
                            </div>
                            <Subjects setSubject = {this.setSubject} age={this.state.grade}/>
                            <Location pass={this.pass}/>
                            <div className="row">
                                <div className = "col-12">
                                    <label>Phone number</label>
                                    <input type = "text" className = "form-control" name="phone_number" value = {this.state.phone_number} onChange={this.changeText}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className = "col-12">
                                    <label>Email</label>
                                    <input type = "email" className = "form-control" name="email" value = {this.state.email} onChange={this.changeText}/>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-12">
                                    {/* <ImageUploader
                                        buttonText='Choose a banner'
                                        onChange={this.onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}
                                        withPreview={true}
                                    /> */}
                                    <button className="btn btn-success">Add</button>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className = "col-12">
                                    <label>Hour price in Rs</label>
                                    <input type = "text" className = "form-control" name="hour_price" value = {this.state.hour_price} onChange={this.changeText}/>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className = "col-12">
                                    <label>Description</label>
                                    <textarea rows="4" type = "text" className = "form-control" name="description" value = {this.state.description} onChange={this.changeText}/>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={this.closeModal}>Close</button>
                        <button className="btn btn-success" onClick={this.saveDetails}>Save</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Add

