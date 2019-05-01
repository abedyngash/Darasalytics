import React, {Component} from 'react';

import LecturersList from '../attendance/LecturersList';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import RegistrarDashboard from './RegistrarDashboard';
import LecDashboard from './LecturerDashboard';

class Dashboard extends Component {

    render(){
        const { lecs, auth, lecteachs, profile } = this.props;
        
        if(!auth.uid) return <Redirect to='/login' />
        return (
           <div id="content-wrapper">

            {(() => {
                switch (profile.role) {
                  case "registrar":  
                    return (
                            <RegistrarDashboard lecs={lecs}/>
                        );
                  case "lecturer": 
                    return (
                            <LecDashboard lecteachs={lecteachs} />
                        );
                  case "dean":  
                    return "#0000FF";
                  default:      
                    return (
                        <div className="container">
                            <div className="card">
                                <div className="card-header">Please Wait for a moment</div>
                                <div className="card-body">
                                    Loading Dashboard ...
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
    console.log(state);
    const dbReceived = state.firestore && state.firestore.ordered && state.firestore.ordered.LecTeachTime;
    const units = dbReceived ? state.firestore.ordered.LecTeachTime : [];
    // console.log(units)
    // const courses = units[0];
    return {
        lecs: state.firestore.ordered.Staff,
        lecteachs: units,
        auth: state.firebase.auth,
        profile: state.firebase.profile
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
    ])
   
)(Dashboard);