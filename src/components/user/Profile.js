import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const Profile = (props) => {
    const {auth} = props;
    if (!auth.uid) { return(<Redirect to="/login" />)}
	const {user} = props.location.state;

    return (
        <div className="container card-content-section">
            
        	<div class="card">
                <div class="card-header">Your Profile</div>
                <div class="card-body">
                    <div className="mb-5 d-flex justify-content-center">
                        <div className="avatar-circle-profile align-self-center">
                          <span className="initials-profile">{user.initials}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="firstName">
                                First Name
                            </label>
                            <p className="form-control">{user.firstName}</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="lastName">
                                Last Name
                            </label>
                            <p className="form-control">{user.lastName}</p>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="">
                              <label>
                                Email
                            </label>
                            <p className="form-control">{user.email}</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label>
                               Role
                            </label>
                            <p className="form-control">{user.role}</p>
                            </div>
                          </div>
                        </div>
                    </div>                  
                </div>   
            </div>
        </div>
	);
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps) (Profile);
