import React, { Component } from "react";
import mainLogo from "../../launcher.png";
import { createUnit } from "../../store/actions/attendanceActions";
import { connect } from "react-redux";

class CreateUnit extends Component {
  state = {
    lecid: "",
    unitcode: "",
    unitname: "",
    semester: "",
    studyyear: "",
    school: "",
    department: "",
    academicyear: "",
    day: "",
    time: null,
    venue: "",
    course: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state)

    this.props.createUnit(this.state);
    e.target.unitcode.value = "";
    e.target.unitname.value = "";
    e.target.semester.value = "";
    e.target.studyyear.value = "";
    e.target.school.value = "";
    e.target.department.value = "";
    e.target.academicyear.value = "";
    e.target.day.value = "";
    e.target.time.value = "";
    e.target.venue.value = "";
    e.target.course.value = "";
  };
  render() {
    const { auth, unit_message } = this.props;
    return (
      <div className="container content-section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Add Unit</li>
        </ol>

        <div className="card card-register mx-auto mt-5">
          <div className="card-header">Add New Unit</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {unit_message ? (
                <div className="alert alert-success">
                  {unit_message}
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              ) : null}

              <div className="text-center">
                <img className="pt-3 account-img" src={mainLogo} />
              </div>

              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-4">
                    <div className="">
                      <label htmlFor="school">School</label>
                      <input
                        type="text"
                        id="school"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <label htmlFor="department">Department</label>
                      <input
                        type="text"
                        id="department"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <label htmlFor="course">Course</label>
                      <input
                        type="text"
                        id="course"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="">
                      <label htmlFor="unitcode">Unit Code</label>
                      <input
                        type="text"
                        id="unitcode"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <label htmlFor="unitnane">Unit Name</label>
                      <input
                        type="text"
                        id="unitname"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-4">
                    <div className="">
                      <label htmlFor="academicyear">Academic Year</label>
                      <input
                        type="text"
                        id="academicyear"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <label htmlFor="studyyear">Year of Study</label>
                      <input
                        type="text"
                        id="studyyear"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <label htmlFor="semester">Semester</label>
                      <input
                        type="text"
                        id="semester"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-4">
                    <div className="">
                      <label htmlFor="day">Day</label>
                      <input
                        type="text"
                        id="day"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <label htmlFor="time">Time</label>
                      <input
                        type="date"
                        id="time"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <label htmlFor="venue">Venue</label>
                      <input
                        type="text"
                        id="venue"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-block btn-outline-info"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    unit_message: state.attendance.unit_message
    // auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUnit: unit => dispatch(createUnit(unit))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUnit);
