import React from "react";
import {NavLink} from 'react-router-dom';

const SignedOut = () => {
    return (
        <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
        </div>
    )
}

export default SignedOut;