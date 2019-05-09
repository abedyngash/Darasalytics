import React, {Component} from 'react';


import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import RegistrarDashboard from './RegistrarDashboard';
import LecDashboard from './LecturerDashboard';

class Dashboard extends Component {
    object_size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size - 1;
    };

    render(){
        const { lecs, auth, lecteachs, profile, courses, students } = this.props;
        const course_length = this.object_size(courses && courses[0])
        // console.log(course_length)
        
        if(!auth.uid) return <Redirect to='/login' />
        return (
           <div id="content-wrapper">

            {(() => {
                switch (profile.role) {
                  case "registrar":  
                    return (
                            <RegistrarDashboard 
                                lecs={lecs} 
                                profile={profile}
                                courses={courses}
                                course_length={course_length}
                                students={students}
                                auth={auth}
                                />
                        );
                  case "lecturer": 
                    return (
                            <LecDashboard profile={profile} />
                        );
                  case "dean":  
                    return "#0000FF";
                  default:      
                    return (
                        <div className="container content-section">
                            <div className="card">
                                <div className="card-header">Please Wait for a moment</div>
                                <div className="card-body">
                                    Loading Dashboard ...
                                    <div class="text-center">
                                        
                                        <Loader 
                                             type="Puff"
                                             color="#00BFFF"
                                             height="100"   
                                             width="100"
                                        />   
                                    </div>
                                </div>
                            </div>
                        </div>
                        );
                }
            })()}

                
            </div>
            
        )
    }
    
}

const mapStateToProps = (state) => {
    // console.log(state);
    const dbReceived = state.firestore && state.firestore.ordered && state.firestore.ordered.LecTeachTime;
    const units = dbReceived ? state.firestore.ordered.LecTeachTime : [];
    // console.log(units)
    // const courses = units[0];
    return {
        lecs: state.firestore.ordered.Staff,
        lecteachs: units,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        courses : state.firestore.ordered.DkutCourses,
        students: state.firestore.ordered.StudentDetails
    }
}

const current_year =new Date().getFullYear().toString()
// console.log(current_year)

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection : 'Staff', 
            where: [
                ['role', '==', 'lecturer'],
               
            ],        
        }
    ]),
    firestoreConnect(props => [
        {
            collection : 'LecTeachTime',
            where: [
                ['lecid', '==', props.auth.uid ? props.auth.uid : null],
                ['studyyear', '==', current_year]
            ],
            
        }
    ]),
    firestoreConnect(props => [
        {
            collection : 'DkutCourses',
            doc : 'dkut'
            
            
        }
    ]),
    firestoreConnect(props => [
        {
            collection : 'StudentDetails',
                      
        }
    ])
   
)(Dashboard);