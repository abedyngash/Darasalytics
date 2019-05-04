import React from 'react';
import { Link } from 'react-router-dom';
import AttendanceSummary from './AttendanceSummary';

import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

const AttendanceList = (props) => {
    const { lecteachs, auth, profile} = props;
    return (
        <div className="content-section">
        
        <h2>Your classes this semester</h2>
        
        {lecteachs && lecteachs.map(lecteach => {
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

            

            // const { lec_id }  = props.location.state
           
            
            const isLec = props.profile.role

            console.log(isLec)

            const is_lec = true;

            if (!isLec == 'lecturer') {
                is_lec = !is_lec
            }



           
            return [
                {    
                    collection : 'LecTeachTime',
                    where: [
                        ['lecid', '==', is_lec ? props.auth.uid : null],
                        ['studyyear', '==', current_year]
                    ],
                    
                }  
                ]          
        }
    )
   
) (AttendanceList);

            