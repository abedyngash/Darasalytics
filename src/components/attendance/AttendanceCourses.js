import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';

import moment from 'moment';

// import * as admin from 'firebase-admin';


class AttendCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0 //initial state
        }

    }

    handleSelect(key) {
        console.log(parseInt(key));
        // this.setState({index: parseInt(key)})
        
    }

    render() {
       
	const {attendances} = this.props;

    // console.log(attendances && attendances[0].studname)
    const attendances_objects = ['Weekly Attendance', 'Monthly Attendance', 'Semester Wise']
	
    return (
        <div>
        <Tab.Container id="left-tabs-example" onSelect={this.handleSelect} defaultActiveKey={0}>
        	<Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column card card-header">
                    {attendances_objects.map((item, index) => {
                        return (
                                <Nav.Item>
                                    <Nav.Link eventKey={index}>{item}</Nav.Link>
                                </Nav.Item>
                            )
                    })}
                    
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                {attendances_objects.map((item, index) => {
                    return(
                        <Tab.Pane eventKey={index}>

                            <h5 className="border-bottom pb-2 mb-2">Attendees within the last week - ({attendances.length})</h5>
                            

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
                            {attendances.length == 0 ? 
                                        
                                        <tbody>
                                            <tr>
                                                <td colspan='4' className="text-center">No data available</td>
                                            </tr>
                                        </tbody>
                                :
                                attendances.map((attendance, index) => {
                                     return(
                                        
                                                <tbody>
                                                    <td>{index + 1}</td>
                                                    <td>{ attendance.studname}</td>
                                                    <td>{moment(attendance.date.toDate()).calendar()}</td>
                                                    <td>{attendance.regno}</td>
                                                </tbody>
                                           
                                        
                                        );
                                  })
                            }
                                    </table>
                                </div>
                            </Tab.Pane>

                        )
                })}
                    
                    
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
    );
    }
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

const begin_date_weekly = firebase.firestore.Timestamp.fromDate(new Date(
    1548855907000
    // moment().startOf("week").toDate()
    ));

const today = firebase.firestore.Timestamp.fromDate(new Date(
    timestamp
    ));


const end_date_weekly = firebase.firestore.Timestamp.fromDate(new Date(
    1552038838000
    // moment().endOf("week").toDate()
    ));

const begin_date_monthly = firebase.firestore.Timestamp.fromDate(new Date(
    // 1548855907000
    moment().startOf("month").toDate()
    ));

const end_date_monthly = firebase.firestore.Timestamp.fromDate(new Date(
    // 1552038838000
    moment().endOf("month").toDate()
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
                        ["date", ">", begin_date_weekly],
                        ["date", "<", end_date_weekly],
		                ['yearofstudy', '==', props.single_class.courses[props.index].yearofstudy.toString()],
		            ],
                    
                }  
                ]          
        }
    ),
    firestoreConnect( props =>
        {
            const {single_class, index} = props; 
            
           
            return [
                {    
                    collection : 'StudentScanClass',
                    where: [
                        ['unitcode', '==', props.single_class.unitcode],
                        ['course', '==', props.single_class.courses[props.index].course],
                        ["date", ">", begin_date_weekly],
                        ["date", "<", end_date_weekly],
                        ['yearofstudy', '==', props.single_class.courses[props.index].yearofstudy.toString()],
                    ],
                    
                }  
                ]          
        }
    )
    
) (AttendCourses);
