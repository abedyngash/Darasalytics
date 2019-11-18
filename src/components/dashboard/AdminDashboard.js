import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminDashboard extends Component {
  render() {
    const { profile, lecs } = this.props;
    console.log(lecs);
    return (
      <div className="container content-section align-self-center">
        <h2>
          Welcome Admin: {profile.firstName} {profile.lastName}
        </h2>

        <div className="content-section">
          <Link
            to={{
              pathname: "/add_lec"
            }}
          >
            <span className="btn btn-outline-primary m-2"> Add Lecturer</span>
          </Link>

          <Link
            to={{
              pathname: "/add_student"
            }}
          >
            <span className="btn btn-outline-primary m-2"> Add Student</span>
          </Link>

          <Link
            to={{
              pathname: "/add_unit",
              state: {
                lecs: lecs
              }
            }}
          >
            <span className="btn btn-outline-primary m-2"> Add Unit</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
