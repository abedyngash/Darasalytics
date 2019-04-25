import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const AttendCourses = (props) => {
	const {attendances} = props;
	
    return (
        <div>
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
                        {props.course.course} Year {props.course.yearofstudy}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        This is for semester wise attendance
                        <br/>
                        {props.course.course} Year {props.course.yearofstudy}
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => {
   
    
    const dbReceived = state.firestore && state.firestore.data.StudentScanClass;
    
    const attendances = dbReceived ? state.firestore.ordered.StudentScanClass : [];
	
    return {
       
        attendances: attendances,
       
        
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect( props =>
        {
            const {single_class, index} = props; 
            
           
            return [
                {    
                    collection : 'StudentScanClass',
					where: [
		                ['unitcode', '==', props.single_class.unitcode],
		                ['course', '==', props.single_class.courses[props.index].course],
		                ['yearofstudy', '==', props.single_class.courses[props.index].yearofstudy.toString()],
		            ],
                    
                }  
                ]          
        }
    )
    
) (AttendCourses);
