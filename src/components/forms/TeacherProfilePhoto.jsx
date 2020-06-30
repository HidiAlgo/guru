import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';

export class TeacherProfilePhoto extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <ImageUploader
                        withIcon={false}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        withPreview={true}
                    />
                </div>
            </div>
        );
    }
}

export default TeacherProfilePhoto
