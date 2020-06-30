import React, { Component } from 'react'
import {Field} from 'formik'

export class Subjects extends Component {
    render() {
        return (
            <>
                <td><Field type="radio" name={this.props.subject} className="form-control " value='A' /></td>
                <td><Field type="radio" name={this.props.subject} className="form-control " value='B'/></td>
                <td><Field type="radio" name={this.props.subject} className="form-control " value='C'/></td>
                <td><Field type="radio" name={this.props.subject} className="form-control " value='S'/></td>
                <td><Field type="radio" name={this.props.subject} className="form-control " value='F'/></td>
            </>
        )
    }
}

export default Subjects
