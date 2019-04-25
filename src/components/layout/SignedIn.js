import React from "react";
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedIn = (props) => {
    return (
        <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/create_lec">Add Lecturer</NavLink>
            <NavLink className="nav-item nav-link" to="">Graphical Analysis</NavLink>
            <a onClick={props.signOut} href="" className="nav-item nav-link">Logout</a>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps) (SignedIn);