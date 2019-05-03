import React from 'react';
import {Line} from 'react-chartjs-2';
import {Link } from 'react-router-dom';

class RegistrarDashboard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data : {
          labels : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
          datasets : [
            {
              label: "Classes Attended",
              backgroundColor: "rgba(0, 0, 255, 0.7)",
              data: [1, 3, 4, 6, 8, 9, 10, 11, 12, 13 ,12, 6, 4 ,0]
            },
            {
              label: "Classes Missed",
              backgroundColor: "rgba(255, 0, 0, 0.7)", 
              data: [13, 12, 11, 10, 9, 8, 6, 4, 3, 1, 0, 4, 6, 12]
            },
          ]
        }
      } 
    }

    render() {
	   const {lecs, courses, course_length, students} = this.props;
    
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
                          lecs : lecs
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
                    <a className="card-footer text-white clearfix small z-1" href="#">
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </a>
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
                          students : students
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
                  <div style={{ position: "relative", width:1000, height: 550 }}>
                    <Line 
                      options={{
                        responsive : true,
                      }}
                      data={this.state.data}
                    />
                  </div>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>

          </div>
      );
    }
}

export default RegistrarDashboard;

