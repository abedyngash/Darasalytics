import React from "react";
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
import { NavDropdown } from 'react-bootstrap';

const SignedIn = (props) => {
    
    return (
       
          <ul class="navbar-nav mr-auto">
              <span class="navbar-text">
                Logged in as :
              </span>
              
              <li class="nav-item dropdown">
                <a class="" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                <div class="avatar-circle ml-3">
                  <span class="initials">{props.profile.initials}</span>
                </div>

                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <span class="navbar-text">
                <i class="ml-1 fa fa-caret-down"></i>
              </span>

              
              <li class="nav-item dropdown d-sm-block d-md-none">
                  <a class="nav-link dropdown-toggle" href="#" id="smallerscreenmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </a>
                  <div class="dropdown-menu" aria-labelledby="smallerscreenmenu">
                      <a class="dropdown-item" href="#">Dashboard</a>
                      <a class="dropdown-item" href="#">Profile</a>
                      <a class="dropdown-item" href="#">Tasks</a>
                      <a class="dropdown-item" href="#">Etc ...</a>
                  </div>
              </li>
            
          </ul>
       
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps) (SignedIn);