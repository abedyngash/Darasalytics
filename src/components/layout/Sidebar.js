import React , {Component} from 'react';
import mainLogo from '../../launcher.png'

class Sidebar extends Component {
	render () {
		return (
			<div id="sidebar-container" class="sidebar-expanded d-none d-md-block col-2">
	        
	        <ul class="list-group sticky-top sticky-offset">
	            
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
	                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
	                    <span class="menu-collapsed">Charts</span>
	                </a>
	                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
	                    <span class="menu-collapsed">Reports</span>
	                </a>
	                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
	                    <span class="menu-collapsed">Tables</span>
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
	                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
	                    <span class="menu-collapsed">Settings</span>
	                </a>
	                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
	                    <span class="menu-collapsed">Password</span>
	                </a>
	            </div>
	            <a href="#" class="bg-dark list-group-item list-group-item-action">
	                <div class="d-flex w-100 justify-content-start align-items-center">
	                    <span class="fa fa-tasks fa-fw mr-3"></span>
	                    <span class="menu-collapsed">Tasks</span>
	                </div>
	            </a>
	            
	            <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
	                <small>OPTIONS</small>
	            </li>
	            
	            <a href="#" class="bg-dark list-group-item list-group-item-action">
	                <div class="d-flex w-100 justify-content-start align-items-center">
	                    <span class="fa fa-calendar fa-fw mr-3"></span>
	                    <span class="menu-collapsed">Calendar</span>
	                </div>
	            </a>
	            <a href="#" class="bg-dark list-group-item list-group-item-action">
	                <div class="d-flex w-100 justify-content-start align-items-center">
	                    <span class="fa fa-envelope-o fa-fw mr-3"></span>
	                    <span class="menu-collapsed">Messages <span class="badge badge-pill badge-primary ml-2">5</span></span>
	                </div>
	            </a>
	            
	            <li class="list-group-item sidebar-separator menu-collapsed"></li>
	            
	            <a href="#" class="bg-dark list-group-item list-group-item-action">
	                <div class="d-flex w-100 justify-content-start align-items-center">
	                    <span class="fa fa-question fa-fw mr-3"></span>
	                    <span class="menu-collapsed">Help</span>
	                </div>
	            </a>
	            <a href="#" data-toggle="sidebar-colapse" class="bg-dark list-group-item list-group-item-action d-flex align-items-center">
	                <div class="d-flex w-100 justify-content-start align-items-center">
	                    <span id="collapse-icon" class="fa fa-2x mr-3"></span>
	                    <span id="collapse-text" class="menu-collapsed">Collapse</span>
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

export default Sidebar;