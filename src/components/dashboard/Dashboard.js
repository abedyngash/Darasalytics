import React, {Component} from 'react';
import AttendanceList from '../attendance/AttendanceList';
import LecturersList from '../attendance/LecturersList';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component {
    render(){
        // console.log(this.props)
        const { lecs, auth, lecteachs } = this.props;
        if(!auth.uid) return <Redirect to='/login' />
        return (
           
            <div className="row">
                
                <div className="col-md-8">
                    <AttendanceList lecteachs={lecteachs}/>
                </div>
                <div className="col-md-4">
                    <LecturersList lecs={lecs}/>
                </div>
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
        lecs: state.firestore.ordered.Lecturers,
        lecteachs: units,
        auth: state.firebase.auth,
        // courses : courses
    }
}

const current_year =new Date().getFullYear().toString()
// console.log(current_year)

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection : 'Lecturers',          
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