import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import AttendanceDetail from './components/attendance/AttendanceDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


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
              
              <Route path='/add_user' component={SignUp}/>

              
            </Switch>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
