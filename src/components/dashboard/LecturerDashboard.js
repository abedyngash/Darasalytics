import React from 'react';
import AttendanceList from '../attendance/AttendanceList';
import LecturersList from '../attendance/LecturersList';
import Profile from '../user/Profile';

const LecDashboard = (props) => {
	const {lecteachs, profile} = props;

    return (
    	<div className="row">
                
            <div className="col-md-8">
                <AttendanceList lecteachs={lecteachs}/>
            </div>
            <div className="col-md-4">
            	<Profile user={profile} />
            </div>
		</div>
	);
}

export default LecDashboard;
