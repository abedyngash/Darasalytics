import React from 'react';
import { Link } from 'react-router-dom';
import AttendanceSummary from './AttendanceSummary';

const AttendanceList = ({lecteachs}) => {
    return (
        <div className="content-section">
        <h2>Your classes this semester</h2>
        {lecteachs && lecteachs.map(lecteach => {
                const custom_id = lecteach.id;
                return(
                    <Link to={{
                        pathname: '/class/' + lecteach.id,
                        state: {
                          fromNotifications: true,
                          single_class: lecteach,
                        //   courses: lecteach['courses']
                        }
                      }}>     
                        <AttendanceSummary lecteach={lecteach} key={lecteach.id}/> 
                    </Link>
                )
            })}
        </div>
    );
}


export default AttendanceList;
