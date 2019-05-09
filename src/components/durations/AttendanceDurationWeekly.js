import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';
import Loader from 'react-loader-spinner'


class AttendanceDuration extends React.Component {

    
	render () {
        const {single_class, index, course, index_of_tab, attendances} = this.props; 

        // console.log(attendances)
        const attendance_objs = attendances.map((elem, index) => (
                {   
                    index: index + 1,
                    name: elem.studname,
                    date: moment(elem.date.toDate()).calendar(), 
                    regno: elem.regno
                }
            ));
        const data = {
                    columns: [
                      {
                        label: 'S/No',
                        field: 'index',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'Name',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'Date',
                        field: 'date',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'Reg Number',
                        field: 'regno',
                        sort: 'asc',
                        width: 200
                      }
                    ],
                    rows: attendance_objs 
                }
            if (data.rows.length == 0) {
                 
            }

		if (attendances) {
            return (
            <div>
                                
                <div className="mt-4">
                                
                    <h5 className="border-bottom pb-2 mb-2">Attendees within this week - ({attendances.length})</h5>
                    
                    <MDBDataTable
                      bordered
                      hover
                      data={data}
                    />

                </div>                        
                      
            </div>
            )
        } else {
            return(
              <Loader 
                 type="Puff"
                 color="#00BFFF"
                 height="100"   
                 width="100"
              />   
             )
        }
        
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
            // console.log(props)
            
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