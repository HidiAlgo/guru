import React from 'react'

import StudentGradeSelection from "./forms/StudentGradeSelction"
import StudentSubjectSelection from './forms/StudentSubjectSelection'
import StudentLocationSelection from './forms/StudentLocationSelection'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function StudentSelections(props) {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/findaguru/forstudents" exact component={StudentGradeSelection}/>
                    <Route path="/findaguru/forstudents/:grade" exact component={StudentSubjectSelection}/>
                    <Route path="/findaguru/forstudents/:grade/:subject" exact component={StudentLocationSelection}/>
                </Switch>
            </Router>
            {/* <StudentGradeSelection history={props.history} /> */}
        </div>
    )
}

export default StudentSelections
