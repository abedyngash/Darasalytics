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
                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-bell fa-fw"></i>
                  <span className="badge badge-danger">0</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
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
                  <p>{props.profile.initials}</p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#">Settings</a>
                  <a className="dropdown-item" href="#">Activity Log</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" onClick={props.signOut} href="">Logout</a>
                </div>
              </li>
            </ul>

            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div class="modal-body">Are you sure you want to log out?</div>
                    <div class="modal-footer">
                      <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                      <button class="btn btn-danger" type="button" onClick={props.signOut} >Logout</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps) (SignedIn);