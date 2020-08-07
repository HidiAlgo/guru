import React, { Component } from 'react'
import {Modal, Dropdown} from 'react-bootstrap'


import Location from '../../front_end_data/Location'
import Subjects from '../../front_end_data/Subjects'

import TeacherAddService from '../../services/TeacherAddService'

export class Add extends Component {

    constructor(props) {
        super(props)
        this.wrapper = React.createRef();
    
        this.state = {
             show: true,
             title:'',
             grade:1,
             subject: '',
             district: '',
             city:'',
             phone_number: '',
             email: '',
             banner: null,
             edit_banner: null,
             banner_byte: null,
             hour_price: '',
             description: '',
             imgURL: null, 
             id: null,
             category: 'Select'
        }
        this.onDrop = this.onDrop.bind(this);
    }

    componentDidMount(){
        this._isMounted = true;
        if(this.props.edit){

            const {title, grade, subject, district, city, phone_number, email, hour_price, description, id, banner} = this.props.edit
            const edit_banner = `data:image/jpeg;base64,${this.props.edit.banner}`
            this.setState({
                title, grade, subject, district, city, phone_number, email, banner, edit_banner, hour_price, description, id, banner
            })
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    
    onDrop(event) {
        this.setState({
            banner: event.target.files[0],
            imgURL: URL.createObjectURL(event.target.files[0]), 
            edit_banner: null
        });
        
    }



    closeModal = () => {
        this.resetState()
        this.props.closeModal() 
    }

    saveDetails = () =>{
        let {title, grade, subject, district, city, phone_number, email, banner, hour_price, description, imgURL} = this.state
        let newAdd = {title,grade,subject, district,city,phone_number,email,banner,hour_price, description, imgURL}
        let backEndAdd = {title,grade,subject,district,city,phone_number,email,hour_price,description}


        if(this.state.id){
            backEndAdd.id = this.state.id
            TeacherAddService.editAdd(backEndAdd)
                .then((response) => {
                    if(!this.state.edit_banner){
                        TeacherAddService.saveAddBanner(this.state.id, banner)
                            .then((response) => {
                                
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    }else{
                        backEndAdd.banner = this.state.banner
                        this.props.createAdd(backEndAdd, this.state.id)
                    }

                    this.props.closeModal();
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else{
            TeacherAddService.saveAdd(backEndAdd)
                .then((response) => {
                    this.setState({
                        id: response.data.id
                    })
                    TeacherAddService.saveAddBanner(response.data.id, banner)
                        .then((response) => {
                                console.log(response)
                                this.props.createAdd(newAdd, this.state.id)
                                this.props.closeModal();
                        })
                        .catch((error) => {
                                console.log(error)
                        })            
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        
        
    }

    resetState(){
        this.setState({
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
            imgURL: null
        })
    }
    changeText = (event) => {
        let name = event.target.name
        this.setState({
            [name] : event.target.value
        })
    }
    changeGrade = (event) => {
        this.setState({
            grade: event.target.value,
            subject: '',
            category: ''
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

    setSubject = (value, selectedCategory) => {
        this.setState({
            subject: value,
            category: selectedCategory
        })
    }


    render() {

        // const style={
        //     width:'200px',
        //     height:'200px',
        //     fontSize:'100px'
        // }


        return (
            <div>
                {/* <button className="btn btn-outline-info text-center" onClick={this.showModal} style={style}>+</button> */}
                <Modal show={this.state.show} onHide={this.showModal} animation="false" centered animation={false}>
                    <Modal.Header closeButton onClick={this.closeModal}>
                        <Modal.Title>Create a new Add</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
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
                                    <input type="number" className="form-control" name="grade" min="1" max="13" onChange={this.changeGrade} value = {this.state.grade}/>
                                    <small className="form-text text-muted">Enter your teaching grade between 1 and 13</small>
                                </div>
                            </div>

                            {this.state.subject === '' && <Subjects setSubject = {this.setSubject} age={this.state.grade} selectedCategory = {this.state.selectedCategory} selectedSubject = "Select"/>}      
                            {this.state.subject !== '' && <Subjects setSubject = {this.setSubject} age={this.state.grade} selectedCategory = {this.state.selectedCategory} selectedSubject = {this.state.subject}/>}
                            {this.state.district === '' && <Location pass={this.pass} selectedDistrict="Select"/>}
                            {this.state.district !== '' && <Location pass={this.pass} selectedDistrict={this.state.district}/>}


                            <div className="row">
                                <div className = "col-12">
                                    <label>Phone number</label>
                                    <input type = "text" className = "form-control" name="phone_number" value = {this.state.phone_number} onChange={this.changeText}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className = "col-12">
                                    <label>Email</label>
                                    <input type = "email" className = "form-control" name="email" value = {this.state.email} onChange={this.changeText} />
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-12">
                                    <lable for="image">Select a banner image</lable>
                                    <input type="file" id="image" onChange={this.onDrop}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {this.state.imgURL && <img src={this.state.imgURL} style={{width: "450px"}}/>}
                                    {this.state.edit_banner && <img src={this.state.edit_banner} style={{width: "450px"}}/>}
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

