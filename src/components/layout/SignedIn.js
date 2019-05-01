import React from "react";
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
import { NavDropdown } from 'react-bootstrap';

const SignedIn = (props) => {
    return (
        <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/add_user">Add New User</NavLink>
            <NavLink className="nav-item nav-link" to="">Graphical Analysis</NavLink>
            <NavLink className="nav-item nav-link inset text-center" to="">{props.profile.initials}</NavLink>
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