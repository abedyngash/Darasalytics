import React from 'react';
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import mainLogo from '../../launcher.png'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth)
    const links = auth.uid ? <SignedIn profile={profile}/> : <SignedOut />

    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand mr-4" to="/">
                    <img src={mainLogo} className="navbar-img" />
                    &nbsp;
                    DarasaLytics
                </NavLink>
                <div class="container">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    
                    {links}
                </div>
                </div>
            </nav> 
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar);