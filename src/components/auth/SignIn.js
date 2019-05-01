import React, { Component } from 'react'
import mainLogo from '../../launcher.png'
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    state = {
       email : '',
       password : '',
       
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
    const {authError, auth,} = this.props;
    if(auth.uid) return <Redirect to='/' />
    return (
      <div className=" bg-dark container">
      <div className="card card-register mx-auto mt-5">
      <div className="card-header">Login Here</div>
      <div className="card-body">
        <form onSubmit={this.handleSubmit}>
            {authError ? <div className="alert alert-danger">{authError}<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button></div> : null }
            <div className="text-center">
                <img className="pt-3 account-img" src={mainLogo}/>
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
                    
          <button className="btn btn-outline-primary btn-block" type="submit">Login</button>
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
