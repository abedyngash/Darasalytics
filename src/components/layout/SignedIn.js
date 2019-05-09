import React from "react";
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
import { NavDropdown } from 'react-bootstrap';

const SignedIn = (props) => {
    
    return (
        
        <div>   
            <ul className="navbar-nav ml-auto ml-md-0">
              
              <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-envelope fa-fw"></i>
                  
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>

              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle inset" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {props.profile.initials}
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#">Settings</a>
                  <a className="dropdown-item" href="#">Activity Log</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" onClick={props.signOut} href="">Logout</a>
                </div>
              </li>
              
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps) (SignedIn);