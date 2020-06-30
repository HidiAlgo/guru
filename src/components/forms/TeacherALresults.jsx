import React from 'react'
import Subjects from '../forms/Subjects'
import {Field} from 'formik'

function TeacherALresults() {
    return (
        <div className="container bg-light" >
            <h4>A/L results</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Subjects</th>
                        <th className="text-center" colSpan="5">Resulst</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th className="text-center">A</th>
                        <th className="text-center">B</th>
                        <th className="text-center">C</th>
                        <th className="text-center">S</th>
                        <th className="text-center">F</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>General English</td>
                        <Subjects subject="al_result.general_english" />
                    </tr>
                    <tr>
                        <td><Field type="text" name="al_result.subject1[0]" className="form-control" placeholder="Subject one" /></td>
                        <Subjects subject="al_result.subject1[1]" />
                    </tr>
                    <tr>
                        <td><Field type="text" name="al_result.subject2[0]" className="form-control" placeholder="Subject two" /></td>
                        <Subjects subject="al_result.subject2[1]" />
                    </tr>
                    <tr>
                        <td><Field type="text" name="al_result.subject3[0]" className="form-control" placeholder="Subject three" /></td>
                        <Subjects subject="al_result.subject3[1]" />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TeacherALresults
