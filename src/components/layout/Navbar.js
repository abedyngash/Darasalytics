import React from 'react';
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import mainLogo from '../../launcher.png'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    // console.log(auth)
    const links = auth.uid ? <SignedIn/> : <SignedOut />

    return (
        
            <header className="site-header">
                <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-steel">
                    <div className="container">
                        
                        <NavLink className="navbar-brand mr-4" to="">
                            <img src={mainLogo} className="navbar-img" />
                            &nbsp;
                            DarasaLytics
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggle">

                            <div className="navbar-nav mr-auto">
                                <NavLink className="nav-link nav-item" to="/docs">Docs</NavLink>
                            </div>
                            { links }
                        </div>
                    </div>
                </nav>
            </header>
            
       
    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps) (Navbar);