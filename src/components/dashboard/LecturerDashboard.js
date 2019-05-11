import React from 'react';
import AttendanceList from '../attendance/AttendanceList';
import LecturersList from '../attendance/LecturersList';


const LecDashboard = (props) => {
	const {profile} = props;

    return (
    	<div className="">
                
            <div className="container content-section align-self-center">
                <AttendanceList />
            </div>
            
		</div>
	);
}

export default LecDashboard;
