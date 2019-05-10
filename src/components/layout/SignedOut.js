import React from "react";
import {NavLink} from 'react-router-dom';

const SignedOut = () => {
    return (
        <ul class="navbar-nav mr-auto">
            <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
        </ul>
    )
}

export default SignedOut;