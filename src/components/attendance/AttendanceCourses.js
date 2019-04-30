import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';

import moment from 'moment';

// import * as admin from 'firebase-admin';


const AttendCourses = (props) => {
	const {attendances} = props;
	
    return (
        <div>
        	<Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column card card-header">
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

                    <h5 className="border-bottom pb-2 mb-2">Attendees within the last week</h5>
                    
                    <div className='ml-3 font-weight-bold'>
                                     
                                <div className="row">
                                    <div className="col-md-1">
                                        S.No
                                    </div>
                                    <div className="col-md-3">
                                        Name
                                    </div>
                                    <div className="col-md-4">
                                        Date of Attendance
                                    </div>
                                    <div className="col-md-4">
                                        Reg Number 
                                    </div>
                                </div>
                            </div>

                    {attendances && attendances.map((attendance, index) => {
                        console.log(attendance.date)
                        return(
                        <div>

                            

                            <h6> 
                                
                                <div className='card card-header'>
                                     
                                    <div className="row">
                                        <div className="col-md-1">
                                            {index + 1} :
                                        </div>
                                        <div className="col-md-3">
                                            { attendance.studname}
                                        </div>
                                        <div className="col-md-4">
                                            {moment(attendance.date.toDate()).calendar()}
                                        </div>
                                        <div className="col-md-4">
                                            {attendance.regno} 
                                        </div>
                                    </div>
                                </div>

                            </h6>
                        
                        </div>
                        )
                    })}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <h5 className="border-bottom pb-2 mb-2">Attendees within the last month</h5>
                    
                    <div className='ml-3 font-weight-bold'>
                                     
                                <div className="row">
                                    <div className="col-md-1">
                                        S.No
                                    </div>
                                    <div className="col-md-3">
                                        Name
                                    </div>
                                    <div className="col-md-4">
                                        Date of Attendance
                                    </div>
                                    <div className="col-md-4">
                                        Reg Number 
                                    </div>
                                </div>
                            </div>

                    {attendances && attendances.map((attendance, index) => {
                        console.log(attendance.date)
                        return(
                        <div>

                            

                            <h6> 
                                
                                <div className='card card-header'>
                                     
                                    <div className="row">
                                        <div className="col-md-1">
                                            {index + 1} :
                                        </div>
                                        <div className="col-md-3">
                                            { attendance.studname}
                                        </div>
                                        <div className="col-md-4">
                                            {moment(attendance.date.toDate()).calendar()}
                                        </div>
                                        <div className="col-md-4">
                                            {attendance.regno} 
                                        </div>
                                    </div>
                                </div>

                            </h6>
                        
                        </div>
                        )
                    })}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <h5 className="border-bottom pb-2 mb-2">Attendees within the semester</h5>
                    
                    <div className='ml-3 font-weight-bold'>
                                     
                                <div className="row">
                                    <div className="col-md-1">
                                        S.No
                                    </div>
                                    <div className="col-md-3">
                                        Name
                                    </div>
                                    <div className="col-md-4">
                                        Date of Attendance
                                    </div>
                                    <div className="col-md-4">
                                        Reg Number 
                                    </div>
                                </div>
                            </div>

                    {attendances && attendances.map((attendance, index) => {
                        console.log(attendance.date)
                        return(
                        <div>

                            

                            <h6> 
                                
                                <div className='card card-header'>
                                     
                                    <div className="row">
                                        <div className="col-md-1">
                                            {index + 1} :
                                        </div>
                                        <div className="col-md-3">
                                            { attendance.studname}
                                        </div>
                                        <div className="col-md-4">
                                            {moment(attendance.date.toDate()).calendar()}
                                        </div>
                                        <div className="col-md-4">
                                            {attendance.regno} 
                                        </div>
                                    </div>
                                </div>

                            </h6>
                        
                        </div>
                        )
                    })}
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => {
   console.log(state)
    
    const dbReceived = state.firestore && state.firestore.data.StudentScanClass;
    
    const attendances = dbReceived ? state.firestore.ordered.StudentScanClass : [];
	
    return {
       
        attendances: attendances,
       
        
    }
}

const my_date = new Date();
const timestamp = my_date.getTime();
const new_timestamp = Math.round(timestamp/1000)*1000 //1000 * (timestamp / 1000)
console.log(new_timestamp)

const begin_date = firebase.firestore.Timestamp.fromDate(new Date(
1548855907000
//1556614782000
// new_timestamp
    ));

const end_date = firebase.firestore.Timestamp.fromDate(new Date(
1552038838000
// 1556614782000
// new_timestamp
    ));
// console.log(begin_date)

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
                        ["date", ">", begin_date],
                        ["date", "<", end_date],
		                ['yearofstudy', '==', props.single_class.courses[props.index].yearofstudy.toString()],
		            ],
                    
                }  
                ]          
        }
    )
    
) (AttendCourses);
