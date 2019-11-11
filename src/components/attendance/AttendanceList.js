import React from "react";
import { Link } from "react-router-dom";
import AttendanceSummary from "./AttendanceSummary";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const AttendanceList = props => {
  const { lecteachs, sem_details } = props;
  // console.log();
  return (
    <div className="content-section">
      <h2>Your classes this semester</h2>

      {sem_details && sem_details[0] && sem_details[0].school == "" ? (
        <div className="card">
          <div className="card-body">
            <h5> You have not set your semester yet</h5>
            <a className="btn btn-primary" href="/add_sem">
              Add Semester
            </a>
          </div>
        </div>
      ) : lecteachs.length <= 0 ? (
        <div className="card">
          <div className="card-body">
            <h5> You have no Classes</h5>
          </div>
        </div>
      ) : (
        lecteachs &&
        lecteachs.map(lecteach => {
          const custom_id = lecteach.id;
          return (
            <Link
              to={{
                pathname: "/class/" + lecteach.id,
                state: {
                  single_class: lecteach
                }
              }}
            >
              <AttendanceSummary lecteach={lecteach} key={lecteach.id} />
            </Link>
          );
        })
      )}
    </div>
  );
};

const current_year = new Date().getFullYear().toString();

const mapStateToProps = state => {
  console.log();
  const dbReceived =
    state.firestore &&
    state.firestore.ordered &&
    state.firestore.ordered.LecTeachTime;
  const units = dbReceived ? state.firestore.ordered.LecTeachTime : [];
  const sem_details = dbReceived ? state.firestore.ordered.LecUser : [];
  // console.log(units)
  // const courses = units[0];
  return {
    lecteachs: units,
    sem_details: sem_details,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),

  firestoreConnect(props => {
    // const { lec_id }  = props.location.state

    const isLec = props.profile.role;

    // console.log(isLec);

    const is_lec = true;

    if (!isLec == "lecturer") {
      is_lec = !is_lec;
    }

    return [
      {
        collection: "LecTeachTime",
        where: [
          ["lecid", "==", is_lec ? props.auth.uid : null],
          ["studyyear", "==", current_year]
        ]
      },
      {
        collection: "LecUser",
        where: [["uid", "==", is_lec ? props.auth.uid : null]]
      }
    ];
  })
)(AttendanceList);
