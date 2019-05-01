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
      <div className="container content-section">
        <form onSubmit={this.handleSubmit}>
        
          {authError ? <div className="alert alert-danger">{authError}<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button></div> : null }
        
        <div className="text-center">
            <img className="pt-3 account-img" src={mainLogo}/>
        </div>
        <fieldset className="form-group">
				<legend className="border-bottom mb-4 pt-3 text-center"> Add New User</legend>
            <div className='form-group'>
                <label htmlFor="firstName">
                    First Name
                </label>
                <input type="text" id="firstName" onChange={this.handleChange} className="form-control"/>
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">
                    Last Name
                </label>
                <input type="text" id="lastName" onChange={this.handleChange} className="form-control"/>
            </div>
            <div className='form-group'>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" id="email" onChange={this.handleChange} className="form-control"/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" id="password" onChange={this.handleChange} className="form-control"/>
            </div>
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
            </fieldset>
            <div>
                <button id="signin" className="btn btn-block btn-outline-info" type="submit">Sign Up Lecturer</button>
            </div>
        </form>
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
