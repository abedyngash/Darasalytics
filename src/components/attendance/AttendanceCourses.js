import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';

import moment from 'moment';

import AttendanceDuration from './AttendanceDuration';

// import * as admin from 'firebase-admin';


class AttendCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index_of_pill: 0 //initial state
        }

    }

    handleSelect(key, props) {
        this.setState({index_of_pill: parseInt(key)})
        
    }
    render() {
        this.handleSelect = this.handleSelect.bind(this);
       
    	const {attendances, index_of_tab, single_class} = this.props;


        // console.log(this.state)
        const attendances_objects = ['Weekly Attendance', 'Monthly Attendance', 'Semester Wise']
    	
        return (
            <div>
            <Tab.Container id="left-tabs-example" onSelect={this.handleSelect} defaultActiveKey={0}>
            	<Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column card card-header">
                        {attendances_objects.map((item, index) => {
                            return (
                                    <Nav.Item>
                                        <Nav.Link eventKey={index}>{item}</Nav.Link>
                                    </Nav.Item>
                                )
                        })}
                        
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                    {attendances_objects.map((item, index) => {
                        return(
                            <Tab.Pane eventKey={index}>
                            <AttendanceDuration index_of_tab={index_of_tab} index_of_pill={this.state.index_of_pill} single_class={single_class}/>
                            </Tab.Pane>

                            )
                    })}
                        
                        
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </div>
        );
    }
}




export default AttendCourses;
