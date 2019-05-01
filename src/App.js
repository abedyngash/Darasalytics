import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import AttendanceDetail from './components/attendance/AttendanceDetail';
import SignIn from './components/auth/SignIn';
import SignUpLec from './components/auth/SignUpLec';
import SignUpSuperUser from './components/auth/SignUpSuperUser';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <div className="container-fluid">
            <Switch>
              
              <Route exact path='/' component={Dashboard} />
             
              <Route path='/class/:id' component={AttendanceDetail} />
              
              <Route path='/login' component={SignIn}/>
              
              <Route path='/add_lec' component={SignUpLec}/>

              <Route path='/add_superuser' component={SignUpSuperUser}/>
              
            </Switch>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
