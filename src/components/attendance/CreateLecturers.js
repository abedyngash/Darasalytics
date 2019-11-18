import React, { Component } from "react";
import mainLogo from "../../launcher.png";
import { createLecturer } from "../../store/actions/attendanceActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateLec extends Component {
  state = {
    email: "",
    firstname: "",
    lastname: "",
    school: "",
    department: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state)

    this.props.createLecturer(this.state);
    e.target.email.value = "";
    e.target.firstname.value = "";
    e.target.lastname.value = "";
    e.target.school.value = "";
    e.target.department.value = "";
  };
  render() {
    const { auth, lec_message } = this.props;
    // if(!auth.uid) return <Redirect to='/login' />
    return (
      <div className="container content-section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Add Lecturer</li>
        </ol>

        <div className="card card-register mx-auto mt-5">
          <div className="card-header">Add New Lecturer</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {lec_message ? (
                <div className="alert alert-success">
                  {lec_message}
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
                  <div className="col-md-6">
                    <div className="">
                      <label htmlFor="firstname">First Name</label>
                      <input
                        type="text"
                        id="firstname"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <label htmlFor="lastname">Last Name</label>
                      <input
                        type="text"
                        id="lastname"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
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
                  <div className="col-md-6">
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
                </div>
              </div>

              <button
                className="btn btn-outline-primary btn-block"
                type="submit"
              >
                Register
              </button>
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
    lec_message: state.attendance.lec_message
    // auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createLecturer: lecturer => dispatch(createLecturer(lecturer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLec);
