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
                                <option value="Tamil_Language">Tamil Language</option>
                                <option value="Geography">Geography</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Citizenship_Education">Citizenship Education</option>
                            </Field>
                        </td>
                        <Subjects subject="ol_result.bucket1[1]" />
                    </tr>
                    <tr>
                        <td>
                            <Field as="select" className="form-control" name="ol_result.bucket2[0]">
                                <option value="no_option_two">Bucket two</option>
                                <option value="Eastern_Music">Eastern music</option>
                                <option value="Western_Music">Western music</option>
                                <option value="Art">Art</option>
                                <option value="Dancing">Dancing</option>
                                <option value="English_lit">English lit</option>
                                <option value="Drama_Theater">Drama Theater</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Sinhala lit">Sinhala lit</option>
                            </Field>
                        </td>
                        <Subjects subject="ol_result.bucket2[1]" />
                    </tr>
                    <tr>
                        <td>
                            <Field as="select" className="form-control" name="ol_result.bucket3[0]">
                                <option value="no_option">Bucket three</option>
                                <option value="ICT">ICT</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Health_&_Physical_Education">Health & Physical education</option>
                                <option value="Home_Science">Home science</option>
                                <option value="Media_Studies">Media studies</option>
                                <option value="Design_Technology">Design technology</option>
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
