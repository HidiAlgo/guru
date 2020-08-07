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
            selectedSubjects: [],
            selectedSubject: "",
            selectedCategory: "Select"
        }
    }

    subjectSelected = (event) => {
        this.props.setSubject(event.target.value, this.state.selectedCategory)
        // this.setState({
        //     selectedSubject: event.target.value
        // })
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

    componentDidMount(){
        this.setState({
            selectedCategory: this.props.selectedCategory,
            selectedSubject: this.props.selectedSubject
        })
        let subject = this.props.selectedSubject
        let category = this.props.selectedCategory;
        let categoryList = this.state.selectedSubjects;
        if(subject !== "Select" && this.props.age>11){
                if(this.state.subjects[4].includes(subject)){
                    category = 'Science and Maths'
                    categoryList = this.state.subjects[4]
                }   
                else if(this.state.subjects[5].includes(subject)){
                    category = 'Arts'
                    categoryList = this.state.subjects[5]
                }    
                else if(this.state.subjects[6].includes(subject)){
                    category = 'Commerce'
                    categoryList = this.state.subjects[6]
                }    
                else if(this.state.subjects[7].includes(subject)){
                    category = 'Aesthetics'
                    categoryList = this.state.subjects[8]
                }    
                else if(this.state.subjects[8].includes(subject)){
                    category = 'Technology'
                    categoryList = this.state.subjects[8]
                }    
                else{
                    console.log("Defauld get excuted")
                }    
            
            this.setState({
                selectedCategory: category,
                selectedSubjects: categoryList,
                selectedSubject: subject
            })
        }
        this.setState({
            selectedSubject: this.props.selectedSubject,
            selectedSubjects: categoryList,
            selectedCategory: category
        })
    }

    render() {
        if(this.props.age <= 2){
            return (
                <div className="row">
                    <div className="form-group col-12">
                        <label>Subject</label>
                        <select className="form-control" name = 'subject' onChange={this.subjectSelected}>
                            <option>{this.state.selectedSubject}</option>
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
                            <option>{this.state.selectedSubject}</option>
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
                            <option>{this.state.selectedSubject}</option>
                            {this.state.subjects[2].map((s, index) => <option key={index}>{s}</option>)}
                        </select>
                    </div>
                </div>
            )
        }else if(this.props.age <= 11){
            return (
                <div className="row">
                    <div className="form-group col-12">
                        <label>{this.state.selectedSubject}</label>
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
                            <option>{this.state.selectedCategory}</option>
                            {this.state.categories.map((c, index) => <option key={index}>{c}</option>)}
                        </select>
                    </div>
                     <div className="form-group col-6">
                        <label>Subject</label>
                        <select className="form-control" name = 'subject' onChange={this.subjectSelected}>
                            <option>{this.state.selectedSubject}</option>
                            {this.state.selectedSubjects.map((s, index) => <option key={index}>{s}</option>)}
                        </select>
                    </div>
                </div>
            )   
        }
    }
}

export default Subjects

