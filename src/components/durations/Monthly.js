import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';
import AttendanceDuration from './AttendanceDurationMonthly';
import {Redirect, Link} from 'react-router-dom';


class MonthlyAttendance extends React.Component {

    
	constructor(props) {
        super(props);
        this.state = {
            index_of_tab: 0 //initial state
        }

      }

    handleSelect(key, props) {
        this.setState({index_of_tab: parseInt(key)})
        
    }

   
    render () {
         this.handleSelect = this.handleSelect.bind(this);
        const {attendances, auth} = this.props; // received from mapStateToProps
        if (!auth.uid) {return(<Redirect to="/login" />)}
        if (this.props.location.state) {    
            const {courses, unitcode, unitname, lecteachtimeid} = this.props.location.state
            return (
                <div className="container content-section">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to={{pathname: '/class/' + lecteachtimeid}}>{unitname} {unitcode} </Link>
                    </li>
                    <li className="breadcrumb-item active">Monthly</li>
                  </ol>  
                   <Tabs defaultActiveKey={0} className="" onSelect={this.handleSelect} id="uncontrolled-tab-example">
                    
                        { courses.map((course, index) => {

                            return (
                                
                            <Tab eventKey={index} title={course.course  + " year " + course.yearofstudy}>
                            <div className="mt-4">
                                <AttendanceDuration courses={courses} index={index} unitname={unitname} unitcode={unitcode} index_of_tab={this.state.index_of_tab}/>                            
                            </div>
                            </Tab>
                           
                            )
                        })}   
                    </Tabs>
                    
                </div>
                )
        }
        else {
            return (
            <div className="container card-content-section align-self-center">
              <div className="card card-register mx-auto mt-5">
                <div className="card-header">Document Expired</div>
                  <div className="card-body">
                    <h5>Sorry, The Route You're Tring to Access Has Expired</h5>
                    <p>Retrace Back From the <Link to="/">Dashboard</Link></p>                 
                  </div>
              </div>
            </div>
            )
        }
    }
    
}

const mapStateToProps = (state) => {
    
    return {
        auth: state.firebase.auth,         
    }
}

export default connect(mapStateToProps) (MonthlyAttendance);