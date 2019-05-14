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

     const options = {
        theme: "light2",
        animationEnabled: true,
        // title:{
        //  text: "Weeks"
        // },
        axisX: {
          
          title: "Weeks",
        },
        axisY: {
          title: "Number of classes",
          includeZero: false
        },
        toolTip: {
          shared: true
        },
        data: [{
          type: "splineArea",
          name: "Classes Attended",
          showInLegend: true,
          dataPoints: [
            { y: 10, label: "Week 1" },
            { y: 12, label: "Week 2" },
            { y: 14, label: "Week 3" },
            { y: 12, label: "Week 4" },
            { y: 15, label: "Week 5" },
            { y: 20, label: "Week 6" },
            { y: 18, label: "Week 7" },
            { y: 14, label: "Week 8" },
            { y: 16, label: "Week 9" },
            { y: 12, label: "Week 10" },
            { y: 8, label: "Week 11" },
            { y: 6, label: "Week 12" }
          ]
        },
        {
          type: "splineArea",
          name: "Classes Missed",
          showInLegend: true,
          dataPoints: [
            { y: 20, label: "Week 1" },
            { y: 18, label: "Week 2" },
            { y: 16, label: "Week 3" },
            { y: 18, label: "Week 4" },
            { y: 15, label: "Week 5" },
            { y: 10, label: "Week 6" },
            { y: 12, label: "Week 7" },
            { y: 16, label: "Week 8" },
            { y: 14, label: "Week 9" },
            { y: 18, label: "Week 10" },
            { y: 22, label: "Week 11" },
            { y: 24, label: "Week 12" }
          ]
        }]
    }
    
    const options_2 = {
            animationEnabled: true,
            // heading: "Monthly Attendance",
            axisX: {
              
              title: "Weeks",
            },
            axisY: {
              title: "Number of Attendees",
              includeZero: false
            },
            toolTip: {
              shared: true
            },
            data: [{
              type: "spline",
              name: "Students Attended",
              showInLegend: true,
              dataPoints: [
                { y: 10, label: "Week 1" },
                { y: 12, label: "Week 2" },
                { y: 14, label: "Week 3" },
                { y: 12, label: "Week 4" },
                
              ]
            },
            {
              type: "spline",
              name: "Students Missed Class",
              showInLegend: true,
              dataPoints: [
                { y: 20, label: "Week 1" },
                { y: 18, label: "Week 2" },
                { y: 16, label: "Week 3" },
                { y: 18, label: "Week 4" },
                
              ]
            }]
        }
    
      return (
          <div className="content-section container-fluid">
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
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fas fa-chart-area"></i>
                    General Class Attendance This Semester</div>
                  <div className="card-body">
                    <SplineChart options={options}/>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fas fa-chart-area"></i>
                    General Class Attendance This Month</div>
                  <div className="card-body">
                    <SplineChart options={options_2}/>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
              </div>
            </div>
          </div>
      );
    }
}

export default RegistrarDashboard;

