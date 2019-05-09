import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';
import AttendanceDuration from './AttendanceDurationMonthly';


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
        const {attendances} = this.props; // received from mapStateToProps
        const {courses, unitcode, unitname} = this.props.location.state
        console.log(this.props.location.state)

        console.log(attendances)

        return (
            <div className="container content-section">
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

const mapStateToProps = (state) => {
    console.log(state)
    const dbReceived = state.firestore && state.firestore.data.StudentScanClass;
    
    const attendances = dbReceived ? state.firestore.ordered.StudentScanClass : [];
    
    return {
       
        attendances: attendances,
       
        
    }
}

export default MonthlyAttendance;