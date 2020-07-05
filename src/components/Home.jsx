import React, { Component } from 'react'

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.beAGuru = this.beAGuru.bind(this)
        this.findAGuru = this.findAGuru.bind(this)
    }
    
    render() {
        return (
        <div className="container text-center">
            <button  className="btn mt-5 btn-danger" onClick={this.findAGuru}>Find a Guru</button><br></br>
            <button onClick={this.beAGuru} className="btn mt-5 btn-success">Be a Guru</button>
        </div>
        )
    }

    beAGuru(){
        this.props.history.push('/findaguru/beaguru/login')
    }

    findAGuru(){
        this.props.history.push('/findaguru/forstudents')
    }
}

export default Home
