import React from 'react';
import { Link } from 'react-router-dom';
import AttendanceSummary from './AttendanceSummary';

import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';

const RegistrarLecAttendance = (props) => {
    const { lecteachs, auth, profile} = props;
    const { firstName, lastName }  = props.location.state

    if (!auth.uid) {return(<Redirect to="/login" />)}

    return (
        <div className="container-fluid content-section">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/lecs">Lecturers</a>
                </li>
                <li className="breadcrumb-item active">{firstName} {lastName}</li>
            </ol>
        
        <h2>Classes for Lecturer : {firstName} {lastName} this semester</h2>
        
        {lecteachs && lecteachs.length == 0 ?  
                <div className='card'>                    
                    <div className='card-header'>
                    
                    <h5>No classes this Semester</h5>
                    
                    </div>
                </div> 
            : lecteachs.map(lecteach => {
                const custom_id = lecteach.id;
                return(
                    <Link to={{
                        pathname: '/class/' + lecteach.id,
                        state: {
                          
                          single_class: lecteach,
                        
                        }
                      }}>     
                        <AttendanceSummary lecteach={lecteach} key={lecteach.id}/> 
                    </Link>
                )
            })}
        </div>
    );
}

const current_year =new Date().getFullYear().toString()


const mapStateToProps = (state) => {
    // console.log(state);
    const dbReceived = state.firestore && state.firestore.ordered && state.firestore.ordered.LecTeachTime;
    const units = dbReceived ? state.firestore.ordered.LecTeachTime : [];
    // console.log(units)
    // const courses = units[0];
    return {
       
        lecteachs: units,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        
    }
}


export default compose(
    connect(mapStateToProps),
    
    firestoreConnect( props =>

        {

            const { lec_id }  = props.location.state
            // console.log(lec_id)
           
            return [
                {    
                    collection : 'LecTeachTime',
                    where: [
                        ['lecid', '==', lec_id ? lec_id : null],
                        ['studyyear', '==', current_year]
                    ],
                    
                }  
                ]          
        }
    )
   
) (RegistrarLecAttendance);