import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import AttendanceDetail from './components/attendance/AttendanceDetail';
import SignIn from './components/auth/SignIn';
import SignUpLec from './components/auth/SignUpLec';

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
              
              <Route path='/create_lec' component={SignUpLec}/>
              
            </Switch>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
