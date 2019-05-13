import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';
import AttendanceDetail from './components/attendance/AttendanceDetail';
import RegistrarLecAttendance from './components/attendance/RegistrarLecAttendance';
import LecturersList from './components/attendance/LecturersList';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import StudentsList from './components/attendance/StudentsList';
import CoursesList from './components/attendance/CoursesList';

import WeeklyAttendance from './components/durations/Weekly';
import MonthlyAttendance from './components/durations/Monthly';

import SplineChart from './components/charts/SplineChart';
import Profile from './components/user/Profile';

// import TestTable from './components/attendance/TestTable';

class App extends Component {
    
  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <div class="row" id="body-row">
              <Sidebar/>
                <div class="col py-3">
            <Switch>
              <Route exact path='/' component={Dashboard} />
             
              <Route exact path='/class/:id' component={AttendanceDetail} />

              <Route exact path='/class/:id/weekly/' component={WeeklyAttendance} />
              
              <Route exact path='/class/:id/monthly/' component={MonthlyAttendance} />
              
              <Route path='/login' component={SignIn}/>

              <Route path='/profile' component={Profile}/>              

              <Route path='/charts' component={SplineChart}/>
              
              <Route path='/add_user' component={SignUp}/>

              <Route exact path='/lecs' component={LecturersList}/>

              <Route exact path='/lecs/:id' component={RegistrarLecAttendance}/>

              <Route path='/students' component={StudentsList}/>

              <Route path='/courses' component={CoursesList}/>
            </Switch>
            </div>
          </div>  
          

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
