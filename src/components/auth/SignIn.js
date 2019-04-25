import React, { Component } from 'react'
import mainLogo from '../../launcher.png'
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    state = {
       email : '',
       password : ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
  render() {
    const {authError, auth} = this.props;
    if(auth.uid) return <Redirect to='/' />
    return (
      <div className="container content-section">
        <form onSubmit={this.handleSubmit}>
        
          {authError ? <div className="alert alert-danger">{authError}</div> : null }
        
        <div className="text-center">
            <img className="pt-3 account-img" src={mainLogo}/>
        </div>
        <fieldset className="form-group">
				<legend className="border-bottom mb-4 pt-3 text-center"> Login Below</legend>

            <div className='from-group'>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" id="email" onChange={this.handleChange} className="form-control"/>
            </div>
            <div className='from-group'>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" id="password" onChange={this.handleChange} className="form-control"/>
            </div>
            </fieldset>
            <div>
                <button className="btn btn-block btn-outline-info" type="submit">Login</button>
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
