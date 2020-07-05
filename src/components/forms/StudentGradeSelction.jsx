import React, { Component } from 'react'

export class StudentGradeSelction extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             grade: "0"
        }
        this.gradeSelected = this.gradeSelected.bind(this)
    }
    
    gradeSelected(grade){
        this.setState({
            grade
        })
        this.props.history.push(`/findaguru/forstudents/${grade}`)
    }

    render() {
        const style = {
            width: '200px',
            height: '200px',
            fontSize: '50px'
        }
        const style2 = {
            width: '200px',
            height: '200px',
            fontSize: '40px'
        }
        return (
            <div className="container">
                <h1 className="text-center mt-3">Select your grade</h1>
                <div className="row mt-5">
                    <div className="col-3">
                        <button className="btn btn-outline-success" value="grade_1" onClick={() => this.gradeSelected("1")} style={style}>Grade 1</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-primary" style={style} onClick={() => this.gradeSelected("2")} >Grade 2</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-warning" style={style} onClick={() => this.gradeSelected("3")} >Grade 3</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={style} onClick={() => this.gradeSelected("4")} >Grade 4</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={style} onClick={() => this.gradeSelected("5")} >Grade 5</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-warning" style={style} onClick={() => this.gradeSelected("6")} >Grade 6</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-primary" style={style} onClick={() => this.gradeSelected("7")} >Grade 7</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-success" style={style} onClick={() => this.gradeSelected("8")} >Grade 8</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3">
                        <button className="btn btn-outline-success" style={style} onClick={() => this.gradeSelected("9")} >Grade 9</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-primary" style={style2} onClick={() => this.gradeSelected("10")} >Grade 10</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-warning" style={style2} onClick={() => this.gradeSelected("11")} >Grade 11</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={style2} onClick={() => this.gradeSelected("12")} >Grade 12</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3">
                        <button className="btn btn-outline-dark mb-3" style={style2} onClick={() => this.gradeSelected("13")} >Grade 13</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentGradeSelction

