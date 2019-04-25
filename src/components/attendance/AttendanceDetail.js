import React from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';

var course_index = 0;

class AttendanceDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course_key: 0,
            single_class : props.single_class,
            courses : props.courses,
            // attendances : props.attendances,
        };
      }

    handleSelect(key=0, props) {
        
        console.log(key)
        course_index  = course_index + key;
        props.index = key;
        return (key);
    }


    render(){
                
        const {single_class, courses, attendances} = this.props;
        
        // console.log(this.state);
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
                
                <Tabs defaultActiveKey={0} onSelect={this.handleSelect} id="uncontrolled-tab-example">

                { courses.map((course, index) => {
                //    console.log(index)
                   
                    return (
                    <Tab eventKey={index} title={course.course  + " year " + course.yearofstudy}>
                    <div className="mt-4">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Weekly Attendance</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Mothly Attendance</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Semester wise Attendance</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                    <h5 className="border-bottom">This week's class attendees</h5>
                                    {attendances && attendances.map((attendance, index) => 
                                        <div>
                                            
                                            <h6> 
                                                {index + 1} : { attendance.studname} 
                                                <span className="float-right">{attendance.regno}</span>
                                            </h6>
                                        
                                        </div>
                                        
                                    )}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        This is for monthly attendance
                                        <br/>
                                        {course.course} Year {course.yearofstudy}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        This is for semester wise attendance
                                        <br/>
                                        {course.course} Year {course.yearofstudy}
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
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
        attendances: attendances,
        index : 1
        
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect( [
        { collection : 'LecTeachTime' }
    ]),
    firestoreConnect( props =>
        {
            // console.log(props)
            const { single_class } = props.location.state;
           
           
            return [
                {    
                    collection : 'StudentScanClass',
                    where: [
                        ['unitcode', '==',single_class.unitcode], 
                        ['course', '==', single_class.courses[props.index].course.toString()],
                        ['year', '==', '2018'],
                        ['yearofstudy', '==', single_class.courses[props.index].yearofstudy.toString()]

                    ],
                }  
                ]          
        }
    )
) (AttendanceDetail);