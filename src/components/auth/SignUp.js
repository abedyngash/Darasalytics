import React, { Component } from 'react'
import mainLogo from '../../launcher.png'
import {connect} from 'react-redux';
import {signUpLec} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class SignUp extends Component {
    state = {
       email : '',
       password : '',
       firstName : '',
       lastName : '',
       role : ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {

        e.preventDefault();
        this.props.signUpLec(this.state)
        
    }
  render() {
    const {authError, auth,} = this.props;
    // if(auth.uid) return <Redirect to='/' />
    
    return (
      <div className="container">
      <div className="card card-register mx-auto mt-5">
      <div className="card-header">Register New User</div>
      <div className="card-body">
        <form onSubmit={this.handleSubmit}>
            {authError ? <div className="alert alert-danger">{authError}<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button></div> : null }
            <div className="text-center">
                <img className="pt-3 account-img" src={mainLogo}/>
            </div>

          <div className="form-group">
            <div className="form-row">
              <div className="col-md-6">
                <div className="">
                  <label htmlFor="firstName">
                    First Name
                </label>
                <input type="text" id="firstName" onChange={this.handleChange} className="form-control"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="">
                  <label htmlFor="lastName">
                    Last Name
                </label>
                <input type="text" id="lastName" onChange={this.handleChange} className="form-control"/>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="">
              <label htmlFor="email">
                    Email
                </label>
                <input type="email" id="email" onChange={this.handleChange} className="form-control"/>
            </div>
          </div>
          <div class="form-group">
            <div class="">
              <label htmlFor="password">
                    Password
                </label>
                <input type="password" id="password" onChange={this.handleChange} className="form-control"/>
            </div>
          </div>
          <div class="form-group">
            <div>
                <label htmlFor="role">
                    Role
                </label>
                <select id="role" onChange={this.handleChange} className="form-control">
                    <option value="none">-----</option>
                    <option value="lecturer">Lecturer</option>
                    <option value="dean">School Dean</option>
                    <option value="c.o.d">C.O.D</option>
                    <option value="registrar">Registrar</option>
                </select>
            </div>
          </div>
          
          <button className="btn btn-outline-primary btn-block" type="submit">Register</button>
        </form>
        
      </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpLec : (newUser) => dispatch(signUpLec(newUser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (SignUp);
