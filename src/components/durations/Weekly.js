import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';
import AttendanceDuration from './AttendanceDurationWeekly';


class WeeklyAttendance extends React.Component {
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
		const {attendances} = this.props; // received from mapStateToProps
    const {courses, unitcode, unitname} = this.props.location.state
    
		return (
			<div className="container content-section">
          <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              
              
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
                

                {/*<MDBDataTable
                  striped
                  bordered
                  hover
                  data={data}
                />*/}
            </div>
			)
	}
}


export default WeeklyAttendance;