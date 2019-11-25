import React from "react";
import { Tabs, Tab, Nav, Col, Row } from "react-bootstrap";

import { MDBDataTable } from "mdbreact";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebase from "firebase";
import ReactToPrint from "react-to-print";
import WeeksInMonth from "./WeeksInMonth";

import SplineChart from "../charts/SplineChart";
import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

class AttendanceDuration extends React.Component {
  options = {
    animationEnabled: true,
    heading: "Weekly Attendance",
    axisX: {
      title: "Weeks"
    },
    axisY: {
      title: "Number of Attendees",
      includeZero: false
    },
    toolTip: {
      shared: true
    },
    data: [
      {
        type: "spline",
        name: "Students Attended",
        showInLegend: true,
        dataPoints: [
          { y: 10, label: "Week 1" },
          { y: 12, label: "Week 2" },
          { y: 14, label: "Week 3" },
          { y: 12, label: "Week 4" }
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
          { y: 18, label: "Week 4" }
        ]
      }
    ]
  };

  render() {
    const { unitcode, courses, index_of_tab } = this.props;
    const attendances = [
      {
        studname: "Abedy Nganga",
        date: new Date().getTime(),
        regno: "C025-01-1157/2016"
      },
      {
        studname: "Tabitha Wangari",
        date: new Date().getTime(),
        regno: "C025-01-1158/2016"
      },
      {
        studname: "Timothy Mbiga",
        date: new Date().getTime(),
        regno: "C025-01-1156/2016"
      }
    ];

    return (
      <div>
        <div className="mt-4">
          <h5 className="border-bottom pb-2 mb-2">
            Attendees within this Month {/*  - ({attendances.length}) */}
          </h5>
        </div>

        {(() => {
          const year = moment().format("YYYY");
          const month = moment().month(); // August (0 indexed)
          const startDate = moment();

          // console.log("inputDate : ", startDate.format("dddd, MMMM Do YYYY, h:mm:ss a"));

          // Get the first and last day of the month
          const firstDay = moment().startOf("month");
          const endDay = moment().endOf("month");

          // Create a range for the month we can iterate through
          const monthRange = moment.range(firstDay, endDay);

          // Get all the weeks during the current month
          const weeks = [];
          for (let mday of monthRange.by("days")) {
            if (weeks.indexOf(mday.week()) === -1) {
              weeks.push(mday.week());
            }
          }

          // Create a range for each week
          const calendar = [];
          for (let index = 0; index < weeks.length; index++) {
            var weeknumber = weeks[index];

            var firstWeekDay = moment()
              .year(year)
              .month(month)
              .week(weeknumber)
              .day(0);
            var lastWeekDay = moment()
              .year(year)
              .month(month)
              .week(weeknumber)
              .day(6);
            if (month == 11 && weeks.length - 1 == index) {
              firstWeekDay = moment()
                .year(year)
                .month(month)
                .week(weeks[index - 1])
                .day(0);
              firstWeekDay.add(7, "day");
              lastWeekDay = moment()
                .year(year)
                .month(month)
                .week(weeks[index - 1])
                .day(6);
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

            const weekRange = moment.range(firstWeekDay, lastWeekDay);
            calendar.push({
              week_number: index + 1,
              from: moment(firstWeekDay).format("dddd MMM Do YYYY"),
              to: moment(lastWeekDay).format("dddd MMM Do YYYY")
            });
          }

          return (
            <div className="">
              {calendar.map((period, index) => {
                return (
                  <React.Fragment>
                    <h5 className="border-bottom mb-4 pb-4">
                      {" "}
                      Week {period.week_number}: Starting From: {period.from}{" "}
                      To: {period.to}
                    </h5>
                    <ReactToPrint
                      trigger={() => (
                        <button className="btn btn-danger" href="#">
                          Print this out!
                        </button>
                      )}
                      content={() => this.componentRef}
                    />
                    <WeeksInMonth
                      unitcode={unitcode}
                      courses={courses}
                      index_of_tab={index_of_tab}
                      period={period}
                      ref={el => (this.componentRef = el)}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          );
        })()}

        <div className="card mb-3">
          <div className="card-header">
            <i className="fas fa-chart-area"></i>
            General Class Attendance Within This Month
          </div>
          <div className="card-body">
            <SplineChart options={this.options} />
          </div>
          <div className="card-footer small text-muted">
            Updated yesterday at 11:59 PM
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)

  const dbReceived = state.firestore && state.firestore.data.StudentScanClass;

  const attendances = dbReceived
    ? state.firestore.ordered.StudentScanClass
    : [];

  return {
    attendances: attendances
  };
};

const my_date = new Date();
const timestamp = my_date.getTime();

const begin_date_weekly = firebase.firestore.Timestamp.fromDate(
  new Date(
    1548855907000
    // moment().startOf("week").toDate()
  )
);

const today = firebase.firestore.Timestamp.fromDate(new Date(timestamp));

const end_date_weekly = firebase.firestore.Timestamp.fromDate(
  new Date(
    1552038838000
    // moment().endOf("week").toDate()
  )
);

const begin_date_monthly = firebase.firestore.Timestamp.fromDate(
  new Date(
    // 1548855907000
    moment()
      .startOf("month")
      .toDate()
  )
);

const end_date_monthly = firebase.firestore.Timestamp.fromDate(
  new Date(
    // 1552038838000
    moment()
      .endOf("month")
      .toDate()
  )
);

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    const { unitcode, courses, index_of_tab } = props;
    // console.log(props)

    return [
      {
        collection: "StudentScanClass",
        where: [
          ["unitcode", "==", unitcode],
          ["course", "==", courses[index_of_tab].course],
          ["date", ">", begin_date_monthly],
          ["date", "<", end_date_monthly],
          ["yearofstudy", "==", courses[index_of_tab].yearofstudy.toString()]
        ]
      }
    ];
  })
)(AttendanceDuration);
