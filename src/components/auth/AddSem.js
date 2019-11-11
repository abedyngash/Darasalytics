import React, { Component } from "react";
import mainLogo from "../../launcher.png";
import { connect } from "react-redux";
import { AddSem } from "../../store/actions/semActions";

class SemDetails extends Component {
  state = {
    currentacademicyear: "",
    currentsemester: "",
    currentyear: "",
    department: "",
    school: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.AddSem(this.state, this.props.auth);
  };
  render() {
    const { authError, auth } = this.props;
    // if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <div className="card card-register mx-auto mt-5">
          <div className="card-header">Add Semester Details</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {authError ? (
                <div className="alert alert-danger">
                  {authError}
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
              <div class="form-group">
                <div class="">
                  <label htmlFor="currentacademicyear">Academic Year</label>
                  <input
                    type="text"
                    id="currentacademicyear"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="">
                  <label htmlFor="currentyear">Year</label>
                  <input
                    type="text"
                    id="currentyear"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="">
                  <label htmlFor="currentsemester">Semester</label>
                  <input
                    type="text"
                    id="currentsemester"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <button
                className="btn btn-outline-primary btn-block"
                type="submit"
              >
                Submit Details
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddSem: (lec, auth) => dispatch(AddSem(lec, auth))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SemDetails);
