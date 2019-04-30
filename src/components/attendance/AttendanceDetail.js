import React from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';
import AttendCourses from './AttendanceCourses';

var COURSE_INDEX = 1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ;

class AttendanceDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0 //initial state
        }

      }

    handleSelect(key, props) {
		this.setState({index: parseInt(key)})
		
    }

    render(){
        this.handleSelect = this.handleSelect.bind(this);
        
                
        const {single_class, courses} = this.props;
        
        
        console.log(this.state.index);
        if(single_class) {
            return(
            <div className='container content-section'>
            
                <div key={single_class.id} className="card">
                    <div className="card-header">
                        <h4>Unit Name: {single_class.unitname} <span class="float-right">Unit Code: {single_class.unitcode}</span></h4>
                        <div className="border-top mt-3 pt-3">
                            { courses.map(course => 
                            
                            <div>
                                <h6><strong>Course:</strong> {course.course}</h6>
                                <p><strong>Year of Study:</strong> {course.yearofstudy}</p>
                                <hr/>
                            </div>
                            
                            )}
                            {courses.length > 1 ? <div className="float-center"><small className="text-muted">(Common Unit)</small></div>: ''} 
                        </div>
                    </div>
                </div>
                <h2 className='mb-5'>Toggle between the tabs below to see your attendances</h2>
                <Tabs defaultActiveKey={0} className="card-header" onSelect={this.handleSelect} id="uncontrolled-tab-example">
                
                { courses.map((course, index) => {

                    return (
                    	
                    <Tab eventKey={index} title={course.course  + " year " + course.yearofstudy}>
                    <div className="mt-4">
                    <Tab.Container onFocus={this.handleSelect} id="left-tabs-example" defaultActiveKey="first">
                    		<AttendCourses course={course} index={this.state.index} single_class={single_class} />
                            
                        </Tab.Container>
                    </div>
                    </Tab>
                   
                    )
                })}   
                </Tabs>
                
            
            </div>
            )
        } else {

        return (
            <div className='container content-section'>
            Loading Unit details... 
            </div>
        );
        
        }
        
    }

}

// const my_date = new Date();
// const timestamp = my_date.getTime();
// console.log(timestamp)


const mapStateToProps = (state, ownProps) => {
   
    
    const id = ownProps.match.params.id;
    // console.log(id)
    
    const db_received = state.firestore.data.LecTeachTime;
    // console.log(db_received ? db_received : {})
    const units = db_received ? db_received : {};
    // console.log(units)
    const single_class = units ? units[id] : null ;
    
    // console.log(single_class)
    const courses =db_received ? single_class['courses'] || {} : {};
    // console.log(courses)
   
    const dbReceived = state.firestore && state.firestore.data.StudentScanClass;
    // console.log(dbReceived)
    const attendances = dbReceived ? state.firestore.ordered.StudentScanClass : [];
    return {
        single_class: single_class,
        courses: courses,
       
        
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect( [
        { collection : 'LecTeachTime' }
    ]),
    
) (AttendanceDetail);