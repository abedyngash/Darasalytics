import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';

import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';

import SplineChart from '../charts/SplineChart';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);



class AttendanceDuration extends React.Component {
  options = {
            animationEnabled: true,
            title:{
             text: "Weekly Attendance"
            },
            axisX: {
              
              title: "Weeks",
            },
            axisY: {
              title: "Number of Attendees",
              includeZero: false
            },
            toolTip: {
              shared: true
            },
            data: [{
              type: "spline",
              name: "Students Attended",
              showInLegend: true,
              dataPoints: [
                { y: 10, label: "Week 1" },
                { y: 12, label: "Week 2" },
                { y: 14, label: "Week 3" },
                { y: 12, label: "Week 4" },
                
              ]
            },
            {
              type: "spline",
              name: "Students Missed Class",
              showInLegend: true,
              dataPoints: [
                { y: 20, label: "Week 1" },
                { y: 18, label: "Week 2" },
                { y: 16, label: "Week 3" },
                { y: 18, label: "Week 4" },
                
              ]
            }]
        }

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
            

		return (
			<div>
                                
                <div className="mt-4">
                <h5 className="border-bottom pb-2 mb-2">Attendees within this Month - ({attendances.length})</h5>
              
                </div>

                {(() => {
                  const year = moment().format('YYYY');
                  const month = moment().month();// August (0 indexed)
                  const startDate = moment();

                  // console.log("inputDate : ", startDate.format("dddd, MMMM Do YYYY, h:mm:ss a"));

                  // Get the first and last day of the month
                  const firstDay = moment().startOf('month')
                  const endDay = moment().endOf('month')

                  // Create a range for the month we can iterate through
                  const monthRange = moment.range(firstDay, endDay);

                  // Get all the weeks during the current month
                  const weeks = []
                  for (let mday of monthRange.by('days')) {
                    if (weeks.indexOf(mday.week()) === -1) {
                      weeks.push(mday.week());
                    }
                  }

                  // Create a range for each week
                  const calendar = []
                  for (let index = 0; index < weeks.length; index++) {
                    var weeknumber = weeks[index];

                    var firstWeekDay = moment().year(year).month(month).week(weeknumber).day(0);
                    var lastWeekDay = moment().year(year).month(month).week(weeknumber).day(6);
                    if (month == 11 && (weeks.length -1) == index) {
                        firstWeekDay = moment().year(year).month(month).week(weeks[index - 1]).day(0);
                        firstWeekDay.add(7, "day");
                        lastWeekDay = moment().year(year).month(month).week(weeks[index - 1]).day(6);
                        lastWeekDay.add(6, "day");         
                     }
                                   
                     // console.log("First day of week", firstWeekDay, weeknumber);
                     // console.log("Last day of week", lastWeekDay, weeknumber);
                          
                    if (firstWeekDay.isBefore(firstDay)) {
                      firstWeekDay = firstDay;
                    }

                    if (lastWeekDay.isAfter(endDay)) {
                      lastWeekDay = endDay;
                    }

                    const weekRange = moment.range(firstWeekDay, lastWeekDay)
                    calendar.push({week_number: index + 1, from: moment(firstWeekDay).format("dddd MMM Do YYYY"), to: moment(lastWeekDay).format("dddd MMM Do YYYY")})
                    // console.log("<br>week number: " + index + " day: " + firstWeekDay.format("dddd DD-MM-YYYY") + " to " + lastWeekDay.format("dddd DD-MM-YYYY"))

                  }
                  
                    // console.log(calendar)
                    return (
                      <div className="content-section">
                        {calendar.map((period, index) => {
                           return (
                               <React.Fragment>
                                  <h5 className="border-bottom mt-4 mb-4 pb-4"> Week {period.week_number}: Starting From: {period.from} To: {period.to}</h5>
                                  <div className="mb-4 pb-4 border-bottom">
                                  <MDBDataTable
                                    bordered
                                    hover
                                    data={data}
                                  />
                                  </div>
                               </React.Fragment>     
                            )                                    
                        })}
                      </div>
                    )
                    
                                
                })()}

                <div className="card mb-3">
                    <div className="card-header">
                      <i className="fas fa-chart-area"></i>
                      General Class Attendance Within This Month</div>
                    <div className="card-body">
                      <SplineChart options={this.options} />
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
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
            // console.log(props)
            
                return [
                    {    
                        collection : 'StudentScanClass',
                        where: [
                            ['unitcode', '==', unitcode],
                            ['course', '==', courses[index_of_tab].course],
                            ["date", ">=", begin_date_weekly],
                            ["date", "<=", end_date_weekly],
                            ['yearofstudy', '==', courses[index_of_tab].yearofstudy.toString()],
                        ],
                        
                    }  
                ]     
                 
        }
    )
    
) (AttendanceDuration);
