import React from 'react'
import Subjects from '../forms/Subjects'
import {Field} from 'formik'

function TeacherOLresults() {
    return (
       
        <div className="container bg-light">
             <h4>O/L Results</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col" className="text-center" colSpan="5">Result</th>
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
                        <td>Mathematics</td>
                        <Subjects subject="ol_result.mathematics" />
                    </tr>
                    <tr>
                        <td>Science</td>
                        <Subjects subject="ol_result.science" />
                    </tr>
                    <tr>
                        <td>Sinhala</td>
                        <Subjects subject="ol_result.sinhala" />
                    </tr>
                    <tr>
                        <td>English</td>
                        <Subjects subject="ol_result.english" />
                    </tr>
                    <tr>
                        <td>Religion</td>
                        <Subjects subject="ol_result.religion_subject" />
                    </tr>
                    <tr>
                        <td>History</td>
                        <Subjects subject="ol_result.history" />
                    </tr>
                    <tr>
                        <td>
                            <Field as="select" className="form-control" name="ol_result.bucket1[0]">
                                <option value="no_option">Bucket one</option>
                                <option value="tamil_language">Tamil Language</option>
                                <option value="geography">Geography</option>
                                <option value="commerce">Commerce</option>
                                <option value="citizenship_Education">Citizenship Education</option>
                            </Field>
                        </td>
                        <Subjects subject="ol_result.bucket1[1]" />
                    </tr>
                    <tr>
                        <td>
                            <Field as="select" className="form-control" name="ol_result.bucket2[0]">
                                <option value="no_option_two">Bucket two</option>
                                <option value="eastern_music">Eastern music</option>
                                <option value="western_music">Western music</option>
                                <option value="art">Art</option>
                                <option value="dancing">Dancing</option>
                                <option value="english_lit">English lit</option>
                                <option value="drama_theater">Drama Theater</option>
                                <option value="japanese">Japanese</option>
                                <option value="sinhala lit">Sinhala lit</option>
                            </Field>
                        </td>
                        <Subjects subject="ol_result.bucket2[1]" />
                    </tr>
                    <tr>
                        <td>
                            <Field as="select" className="form-control" name="ol_result.bucket3[0]">
                                <option value="no_option">Bucket three</option>
                                <option value="ict">ICT</option>
                                <option value="agriculture">Agriculture</option>
                                <option value="health_&_Physical_education">Health & Physical education</option>
                                <option value="home_science">Home science</option>
                                <option value="media_studies">Media studies</option>
                                <option value="design_technology">Design technology</option>
                            </Field>
                        </td>
                        <Subjects subject="ol_result.bucket3[1]" />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TeacherOLresults
