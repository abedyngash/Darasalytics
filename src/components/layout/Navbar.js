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

            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

                <NavLink className="navbar-brand mr-4" to="">
                    <img src={mainLogo} className="navbar-img" />
                    &nbsp;
                    DarasaLytics
                </NavLink>

                <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                  <i class="fas fa-bars"></i>
                </button>
                
                
                
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-primary" type="button">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>

                {links}
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