import React, { Component } from 'react'


export class StudentSubjectSelection extends Component {
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
            
            categories: ['Science and Maths', 'Arts', 'Commerce', 'Aesthetics', 'Technology']
        }
        this.subjectSelected = this.subjectSelected.bind(this)
    }
    subjectSelected(subject){
        this.props.history.push(`/findaguru/forstudents/${this.props.match.params.grade}/${subject}`)
    }
    render() {  
        let grade = this.props.match.params.grade
        const style = {
            width: '200px',
            height: '200px',
            fontSize: '30px'
        }
        const style2 = {
             width: '330px',
            height: '100px',
            fontSize: '20px'
        }
        if(grade <= 2){
            return (
                <div className="container mt-5">
                    <div className="row">

                        {this.state.subjects[0].map((s, index) => <div className="col-4 mt-2" key={index}>
                            <button className="btn btn-outline-success" style={style} onClick={() => this.subjectSelected(s)}>{s}</button>
                        </div>)}
                    </div>                   
                </div>
                
            )
        }else if(grade <= 5){
            return (
                <div className="container mt-5">
                    <div className="row">

                        {this.state.subjects[1].map((s, index) => <div className="col-4 mt-2" key={index}>
                            <button className="btn btn-outline-success text-center" style={style} onClick={() => this.subjectSelected(s)}>{s}</button>
                        </div>)}
                    </div>                   
                </div>
                
            )
        }else if(grade <= 9){
            return (
                <div className="container mt-5">
                    <div className="row">

                        {this.state.subjects[2].map((s, index) => <div className="col-4 mt-2" key={index}>
                            <button className="btn btn-outline-success" style={style2} onClick={() => this.subjectSelected(s)}>{s}</button>
                        </div>)}
                    </div>                   
                </div>
                
            )
        }else if(grade <= 11){
            return (
                <div className="container mt-5">
                    <div className="row">

                        {this.state.subjects[3].map((s, index) => <div className="col-6 mt-2" key={index}>
                            <button className="btn btn-outline-success" onClick={() => this.subjectSelected(s)}>{s}</button>
                        </div>)}
                    </div>                   
                </div>
                
            )
        }else{
            return(
                <div className="container mt-5">
                    <h3>Science and Maths</h3>
                    <div className="row">
                        {this.state.subjects[4].map((s, index) => <div className="col-4 mt-2" key={index}>
                            <button className="btn btn-outline-success text-center" style={style2} onClick={() => this.subjectSelected(s)}>{s}</button>
                        </div>)}
                    </div>  
                    <h3 className="mt-5">Arts</h3>
                    <div className="row">
                        {this.state.subjects[5].map((s, index) => <div className="col-4 mt-2" key={index}>
                            <button className="btn btn-outline-primary text-center" style={style2} onClick={() => this.subjectSelected(s)}>{s}</button>
                        </div>)}
                    </div>  
                    <h3 className="mt-5">Commerce</h3>
                    <div className="row">
                        {this.state.subjects[6].map((s, index) => <div className="col-4 mt-2" key={index}>
                            <button className="btn btn-outline-dark text-center" style={style2} onClick={() => this.subjectSelected(s)}>{s}</button>
                        </div>)}
                    </div> 
                    <h3 className="mt-5">Aesthetics</h3>
                    <div className="row">
                        {this.state.subjects[7].map((s, index) => <div className="col-4 mt-2" key={index}>
                            <button className="btn btn-outline-info text-center" style={style2} onClick={() => this.subjectSelected(s)}>{s}</button>
                        </div>)}
                    </div>
                    <h3 className="mt-5">Technology</h3>
                    <div className="row">
                        {this.state.subjects[8].map((s, index) => <div className="col-4 mt-2" key={index}>
                            <button className="btn btn-outline-dark text-center" style={style2} onClick={() => this.subjectSelected(s)}>{s}</button>
                        </div>)}
                    </div>  
                    <hr></hr>
                </div>
            )
        }
    }
}

export default StudentSubjectSelection
