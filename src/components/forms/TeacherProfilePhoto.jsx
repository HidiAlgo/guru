import React, { Component } from 'react'

export class TeacherProfilePhoto extends Component {
    constructor(props) {
        super(props);
         this.state = { photoUrl: null, img: null };
    }
 
    imageSelected = (event) => {
        this.setState({
            photoUrl: URL.createObjectURL(event.target.files[0]),
            img: event.target.files[0]
        })
    }

    submit = () => {
        this.props.click_button(this.state.img)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <input type="file" onChange={this.imageSelected}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={this.state.photoUrl}  style={{maxWidth:"500px", maxHeight:"500px"}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success" onClick={this.submit}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeacherProfilePhoto
