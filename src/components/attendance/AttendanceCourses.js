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

    // console.log(attendances && attendances[0].studname)
	
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

                    <h5 className="border-bottom pb-2 mb-2">Attendees within the last week - ({attendances.length})</h5>
                    

                    {attendances.length == 0 ? 
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                  <tr>
                                    <th>S/No</th>
                                    <th>Name of Student</th>
                                    <th>Date Attended</th>
                                    <th>Reg Number</th>
                                  </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td colspan='4' className="text-center">No data available</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        :
                        attendances.map((attendance, index) => {
                             return(
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                          <tr>
                                            <th>S/No</th>
                                            <th>Name of Student</th>
                                            <th>Date Attended</th>
                                            <th>Reg Number</th>
                                          </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <td>{index + 1}</td>
                                            <td>{ attendance.studname}</td>
                                            <td>{moment(attendance.date.toDate()).calendar()}</td>
                                            <td>{attendance.regno}</td>
                                        </tbody>
                                    </table>
                                </div>
                                
                                );
                          })
                    }
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
                        // console.log(attendance.date)
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
                    

                    {attendances && attendances.map((attendance, index) => {
                        // console.log(attendance.date)
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
   // console.log(state)
    
    const dbReceived = state.firestore && state.firestore.data.StudentScanClass;
    
    const attendances = dbReceived ? state.firestore.ordered.StudentScanClass : [];
	
    return {
       
        attendances: attendances,
       
        
    }
}

const my_date = new Date();
const timestamp = my_date.getTime();

const begin_date = firebase.firestore.Timestamp.fromDate(new Date(
    1548855907000
    // moment().startOf("week").toDate()
    ));

const today = firebase.firestore.Timestamp.fromDate(new Date(
    timestamp
    ));


const end_date = firebase.firestore.Timestamp.fromDate(new Date(
    1552038838000
    // moment().endOf("week").toDate()
    ));



// console.log(begin_date)
// console.log(end_date)
// console.log(moment(moment().endOf('month') - moment().startOf('month')).weeks())


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
