import React , {Component} from 'react';
import mainLogo from '../../launcher.png';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
	render () {
		const {auth, profile} = this.props;


		return (
			<div id="sidebar-container" class="sidebar-expanded d-none d-md-block col-2">
	        
	        <ul class="list-group sticky-top sticky-offset">
	        {(() => {
	        	if (auth.uid) {
	        		return (
	        			<div>
			            <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
			                <small>MAIN MENU</small>
			            </li>
			            
			            <a href="#submenu1" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
			                <div class="d-flex w-100 justify-content-start align-items-center">
			                    <span class="fa fa-dashboard fa-fw mr-3"></span>
			                    <span class="menu-collapsed">Dashboard</span>
			                    <span class="submenu-icon ml-auto"></span>
			                </div>
			            </a>
			            
			            <div id="submenu1" class="collapse sidebar-submenu">
			            	<a href="/" class="list-group-item list-group-item-action bg-dark text-white">
			                    <span class="menu-collapsed">Home</span>
			                </a>
			                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
			                    <span class="menu-collapsed">Graphical Analysis</span>
			                </a>			           			                
			            </div>
			            <a href="#submenu2" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
			                <div class="d-flex w-100 justify-content-start align-items-center">
			                    <span class="fa fa-user fa-fw mr-3"></span>
			                    <span class="menu-collapsed">Profile</span>
			                    <span class="submenu-icon ml-auto"></span>
			                </div>
			            </a>
			           
			            <div id="submenu2" class="collapse sidebar-submenu">
			                <NavLink to={{
			                        pathname: '/profile',
			                        state: {
			                          user : profile
			                        }
			                      }}
			                class="list-group-item list-group-item-action bg-dark text-white"
			                	>
			                    <span class="menu-collapsed">Edit Profile</span>
			                </NavLink>
			                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
			                    <span class="menu-collapsed">Change Password</span>
			                </a>
			            </div>		            
		            </div>
	        			)
	        		
	        	}
	        })()}

	        	<li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
	                <small>OPTIONS</small>
	            </li>   
	            
	            <a href="" class="bg-dark list-group-item list-group-item-action">
	                <div class="d-flex w-100 justify-content-start align-items-center">
	                    <span class="fa fa-calendar fa-fw mr-3"></span>
	                    <span class="menu-collapsed">Calendar</span>
	                </div>
	            </a>
	            
	            
	            <li class="list-group-item sidebar-separator menu-collapsed"></li>
	            
	            <a href="#" class="bg-dark list-group-item list-group-item-action">
	                <div class="d-flex w-100 justify-content-start align-items-center">
	                    <span class="fa fa-question fa-fw mr-3"></span>
	                    <span class="menu-collapsed">Docs</span>
	                </div>
	            </a>
	            
	            <li class="list-group-item logo-separator d-flex justify-content-center">
	                <img className="pt-3 account-img" src={mainLogo}  className="navbar-img"/>
	            </li>
	        </ul>
	        
	    </div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps) (Sidebar);