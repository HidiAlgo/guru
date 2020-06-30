import React, { Component } from 'react'

export class Subjects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            subjects: [['Sinhala', 'Mathematics', 'Parisaraya'],['Sinhala', 'Mathematics', 'Parisaraya', 'English'],
                ['Buddhism','Christianity','Catholic','Shivenary','Islam','Sinhala Language','English Language', 'Mathematics', 'Science', 'History',
                'Geography','Life skills & Citizenshipn Education', 'Dancing', 'Eastern Music', 'Western Music', 'Art', 'Drama & Theatre', 'Practical & Technical Studies',
                'Health & Physical Education', 'Tamil Language'],
                ['Buddhism', 'Christianity', 'Catholism', 'Islam', 'Sinhala Language & Literature', 'English', 'Mathematics', 'History', 'Science', 'Geography',
                'Citizenship Education', 'Enterpreneurial Education', 'Business Studies & Accounts', 'Eastern Music', 'Western Music', 'Art','Traditional Dancing'
                , 'Drama & Theatre', 'Sinhala Literature', 'English Literature', 'Information & Communication Technology', 'Agriculture & Food Technology',
                    'Art & Craft', 	'Home Economics', 'Health & Physical Education'],
                ['Physics', 'Chemistry', 'Agronomy', 'Biology', 'Mathematics', 'Combined Mathematics'],
                ['Sinhala Language and Literature', 'Economics', 'Logic and the scientific method', 'Geography', 'Political science', 'History'],
                ['Economics', 'Business Statistics', 'Business Studies', 'Accounting'],
                ['Art', 'Drama and the Theatre', 'Dance', 'Eastern music', 'Western Music'],
                ['ICT', 'Engineering Technology', 'Science for Technology', 'Bio Systems Technology']],
            
            categories: ['Science and Maths', 'Arts', 'Commerce', 'Aesthetics', 'Technology'],
            selectedSubjects: []
        }
    }

    subjectSelected = (event) => {
        this.props.setSubject(event.target.value)
    }

    changeSelectedSubjects = (event) => {
        let subs = []
        switch(event.target.value){
            case 'Science and Maths':
                subs = this.state.subjects[4]
                break;
            case 'Arts':
                subs = this.state.subjects[5]
                break;
            case 'Commerce':
                subs = this.state.subjects[6]
                break;
            case 'Aesthetics':
                subs = this.state.subjects[7]
                break;
            case 'Technology':
                subs = this.state.subjects[8]
                break;
        }
        this.setState({
            selectedSubjects: subs
        })
    }

    render() {
        if(this.props.age <= 2){
            return (
                <div className="row">
                    <div className="form-group col-12">
                        <label>Subject</label>
                        <select className="form-control" name = 'subject' onChange={this.subjectSelected}>
                            <option>Select</option>
                            {this.state.subjects[0].map((s, index) => <option key={index}>{s}</option>)}
                        </select>
                </div>
                </div>
            )
        }else if(this.props.age <= 5){
            return (
                <div className="row">
                    <div className="form-group col-12">
                        <label>Subject</label>
                        <select className="form-control" name = 'subject' onChange={this.subjectSelected}>
                            <option>Select</option>
                            {this.state.subjects[1].map((s, index) => <option key={index}>{s}</option>)}
                        </select>
                    </div>
                </div>
            )
        }else if(this.props.age <= 9){
            return (
                <div className="row">
                    <div className="form-group col-12">
                        <label>Subject</label>
                        <select className="form-control" name = 'subject' onChange={this.subjectSelected}>
                            <option>Select</option>
                            {this.state.subjects[2].map((s, index) => <option key={index}>{s}</option>)}
                        </select>
                    </div>
                </div>
            )
        }else if(this.props.age <= 11){
            return (
                <div className="row">
                    <div className="form-group col-12">
                        <label>Subject</label>
                        <select className="form-control" name = 'subject' onChange={this.subjectSelected}>
                            <option>Select</option>
                            {this.state.subjects[3].map((s, index) => <option key={index}>{s}</option>)}
                        </select>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="row">
                    <div className="form-group col-6">
                        <label>Category</label>
                        <select className="form-control" name = 'category' onChange={this.changeSelectedSubjects}>
                            <option>Select</option>
                            {this.state.categories.map((c, index) => <option key={index}>{c}</option>)}
                        </select>
                    </div>
                     <div className="form-group col-6">
                        <label>Subject</label>
                        <select className="form-control" name = 'subject' onChange={this.subjectSelected}>
                            <option>Select</option>
                            {this.state.selectedSubjects.map((s, index) => <option key={index}>{s}</option>)}
                        </select>
                    </div>
                </div>
            )   
        }
    }
}

export default Subjects
