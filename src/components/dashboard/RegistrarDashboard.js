import React from 'react';
import {Line} from 'react-chartjs-2';
import {Link } from 'react-router-dom';

import SplineChart from '../charts/SplineChart';
 

class RegistrarDashboard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
	   const {lecs, courses, course_length, students, auth} = this.props;
    
      return (
          <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Overview</li>
              </ol>

              <div className="row">
                <div className="col-xl-4 col-sm-6 h-50">
                  <div className="card text-white bg-primary o-hidden">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fas fa-sm fa-user"></i>
                      </div>
                      <div className="mr-5">{lecs && lecs.length} Lecturers</div>
                    </div>
                    <div className="card-footer text-white clearfix small z-1">
                      <Link to={{
                        pathname: '/lecs',
                        state: {
                          lecs : lecs,
                          auth : auth
                        }
                      }}><span className="text-white"> View Details</span></Link>
                    </div>
                    
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 h-50">
                  <div className="card text-white bg-warning o-hidden">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fas fa-sm fa-list"></i>
                      </div>
                      <div className="mr-5">{course_length} Courses</div>
                    </div>
                    <div className="card-footer text-white clearfix small z-1">
                      <Link to={{
                        pathname: '/courses',
                        state: {
                          courses : courses,
                          auth : auth
                        }
                      }}><span className="text-white"> View Details</span></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 h-50">
                  <div className="card text-white bg-success o-hidden">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fas fa-sm fa-graduation-cap"></i>
                      </div>
                      <div className="mr-5">{students && students.length} Students</div>
                    </div>
                    <div className="card-footer text-white clearfix small z-1">
                      <Link to={{
                        pathname: '/students',
                        state: {
                          students : students,
                          auth : auth
                        }
                      }}><span className="text-white"> View Details</span></Link>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <i className="fas fa-chart-area"></i>
                  General Class Attendance</div>
                <div className="card-body">
                  <SplineChart />
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>

          </div>
      );
    }
}

export default RegistrarDashboard;

