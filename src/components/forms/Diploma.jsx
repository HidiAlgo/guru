import React, {useState, Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import {Field, Formik, Form} from 'formik'

class Diploma extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            diploma_name: '',
            started_year: new Date(),
            end_year: new Date(),
            institute: "",
            description: ""
            
        }
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.changeText = this.changeText.bind(this)
        this.saveDetails = this.saveDetails.bind(this)
    }
    saveDetails(){
        const {diploma_name, started_year, end_year, institute, description} = this.state;
        const dip_details = {
            diploma_name,
            started_year,
            end_year,
            institute,
            description
        }
        this.props.addDip(dip_details)
        this.setState({
            diploma_name: '',
            started_year: new Date(),
            end_year: new Date(),
            institute: "",
            description: ""
        })
        this.handleClose()
    }
    handleShow(){
        this.setState({
            show: true
        })
    }
    handleClose(){
        this.setState({
            show:false
        })
    }
    saveDiploma(values){
        console.log(values)
    }
    changeText(event){
        let name = event.target.name
        this.setState({
            [name]: event.target.value
        })
       

    }
    render() {
        return (
            <div className="row">
                <Button variant="primary" onClick={this.handleShow}>
                    Add a deploma
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Diploma details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="diploma_name">Diploma name</label>
                        <input type="text" className="form-control"value={this.state.diploma_name} onChange={this.changeText} name="diploma_name" id="diploma_name"></input>

                        <label htmlFor="started_year">Started year</label>
                        <input type="date" className="form-control"value={this.state.started_year} onChange={this.changeText} name="started_year" id="started_year"></input>

                        <label htmlFor="end_year">End year</label>
                        <input type="date" className="form-control"value={this.state.end_year} onChange={this.changeText} name="end_year" id="end_year"></input>

                        <label htmlFor="institute">Institute</label>
                        <input type="text" className="form-control"value={this.state.institute} onChange={this.changeText} name="institute" id="institute"></input>

                        <label htmlFor="description">Description</label>
                        <textarea rows="4"  className="form-control"value={this.state.description} onChange={this.changeText} name="description" id="description"></textarea>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.saveDetails}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Diploma
