import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';
import AttendanceDetail from './components/attendance/AttendanceDetail';
import RegistrarLecAttendance from './components/attendance/RegistrarLecAttendance';
import LecturersList from './components/attendance/LecturersList';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import StudentsList from './components/attendance/StudentsList';
import CoursesList from './components/attendance/CoursesList';

// import TestTable from './components/attendance/TestTable';

class App extends Component {
    
  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <div id="wrapper">
                <ul className="sidebar navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      <i className="fas fa-fw fa-tachometer-alt"></i>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-fw fa-folder"></i>
                      <span>Pages</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                      <h6 className="dropdown-header">Authentication Screens:</h6>
                      <a className="dropdown-item" href="/add_user">Add User</a>
                      <a className="dropdown-item" href="">Forgot Password</a>
                      <div className="dropdown-divider"></div>
                      <h6 className="dropdown-header">Other Pages:</h6>
                      
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                      <i className="fas fa-fw fa-chart-area"></i>
                      <span>Graphical Analysis</span></a>
                  </li>
                </ul>
            
            <Switch>
              <Route exact path='/' component={Dashboard} />
             
              <Route path='/class/:id' component={AttendanceDetail} />
              
              <Route path='/login' component={SignIn}/>
              
              <Route path='/add_user' component={SignUp}/>

              <Route exact path='/lecs' component={LecturersList}/>

              <Route exact path='/lecs/:id' component={RegistrarLecAttendance}/>

              <Route path='/students' component={StudentsList}/>

              <Route path='/courses' component={CoursesList}/>
            </Switch>
          </div>


          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>  
          
          {/*<Footer/>*/}

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
