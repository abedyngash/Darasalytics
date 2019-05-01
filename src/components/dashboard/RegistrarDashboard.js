import React from 'react';

const RegistrarDashboard = (props) => {
	const {lecs} = props;
    return (
        <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Overview</li>
            </ol>

            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fas fa-fw fa-user"></i>
                    </div>
                    <div className="mr-5">{lecs && lecs.length} Lecturer(s)</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fas fa-fw fa-list"></i>
                    </div>
                    <div className="mr-5">Courses</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fas fa-fw fa-shopping-cart"></i>
                    </div>
                    <div className="mr-5">123 New Orders!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fas fa-fw fa-life-ring"></i>
                    </div>
                    <div className="mr-5">13 New Tickets!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header">
                <i className="fas fa-chart-area"></i>
                Area Chart Example</div>
              <div className="card-body">
                <canvas id="myAreaChart" width="100%" height="30"></canvas>
              </div>
              <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>

        </div>
    );
}

export default RegistrarDashboard;

