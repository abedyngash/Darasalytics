import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';


class AttendanceDuration extends React.Component {

    
	render () {
        const {single_class, index, course, index_of_tab, attendances} = this.props; 

		return (
			<div>
                                
                <div className="mt-4">
                                
                    <h5 className="border-bottom pb-2 mb-2">Attendees within this week - ({attendances.length})</h5>
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
                            {attendances === undefined || attendances && attendances.length == 0 ? 
                            
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

                </div>                        
                      
            </div>
			)
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



export default compose(
    connect(mapStateToProps),
    firestoreConnect( props =>
        {
            const {single_class, unitcode, unitname, courses, index_of_tab} = props; 
            console.log(props)
            
                return [
                    {    
                        collection : 'StudentScanClass',
                        where: [
                            ['unitcode', '==', unitcode],
                            ['course', '==', courses[index_of_tab].course],
                            ["date", ">", begin_date_weekly],
                            ["date", "<", end_date_weekly],
                            ['yearofstudy', '==', courses[index_of_tab].yearofstudy.toString()],
                        ],
                        
                    }  
                ]     
                 
        }
    )
    
) (AttendanceDuration);