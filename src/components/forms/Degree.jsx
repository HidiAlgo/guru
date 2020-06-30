import React, {useState, Component} from 'react'
import {Modal, Button} from 'react-bootstrap'

class Degree extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            degree_title: '',
            started_year: new Date(),
            end_year: new Date(),
            university: "",
            description: ""
            
        }
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.changeText = this.changeText.bind(this)
        this.saveDetails = this.saveDetails.bind(this)
    }
    saveDetails(){
        const {degree_title, started_year, end_year, university, description} = this.state;
        const degree_details = {
            degree_title,
            started_year,
            end_year,
            university,
            description
        }
        this.props.addDegree(degree_details)
        this.setState({
            degree_title: '',
            started_year: new Date(),
            end_year: new Date(),
            university: "",
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
                    Add a degree
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Degree details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="degree_title">Degree title</label>
                        <input type="text" className="form-control"value={this.state.degree_title} onChange={this.changeText} name="degree_title" id="degree_title"></input>

                        <label htmlFor="started_year">Started year</label>
                        <input type="date" className="form-control"value={this.state.started_year} onChange={this.changeText} name="started_year" id="started_year"></input>

                        <label htmlFor="end_year">End year</label>
                        <input type="date" className="form-control"value={this.state.end_year} onChange={this.changeText} name="end_year" id="end_year"></input>

                        <label htmlFor="university">Institute</label>
                        <input type="text" className="form-control"value={this.state.university} onChange={this.changeText} name="university" id="university"></input>

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

export default Degree
