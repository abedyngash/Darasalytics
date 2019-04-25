import React, { Component } from 'react'
import mainLogo from '../../launcher.png'
import { createLecturer } from "../../store/actions/attendanceActions";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class CreateLec extends Component {
    state = {
       email : '',
       full_name : ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        
        this.props.createLecturer(this.state)
        e.target.email.value = "";
        e.target.full_name.value = "";

        
    }
  render() {
    const {auth, lec_message} = this.props;
    if(!auth.uid) return <Redirect to='/login' />
    return (
      <div className="container content-section">
        <form onSubmit={this.handleSubmit}>
        {lec_message ? <div className="alert alert-success">{lec_message}<button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div> : null }
        <div className="text-center">
            <img className="pt-3 account-img" src={mainLogo}/>
        </div>
        <fieldset className="form-group">
				<legend className="border-bottom mb-4 pt-3 text-center"> Add a new lecturer below</legend>

            <div className='from-group'>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" id="email" onChange={this.handleChange} className="form-control"/>
            </div>
            <div className='from-group'>
                <label htmlFor="full_name">
                   Full Name
                </label>
                <input type="text" id="full_name" onChange={this.handleChange} className="form-control"/>
            </div>
            </fieldset>
            <div>
                <button className="btn btn-block btn-outline-info" type="submit">Create</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    lec_message: state.attendance.lec_message,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createLecturer: (lecturer) => dispatch(createLecturer(lecturer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLec);
