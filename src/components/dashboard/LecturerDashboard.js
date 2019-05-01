import React from 'react';
import AttendanceList from '../attendance/AttendanceList';
import LecturersList from '../attendance/LecturersList';

const LecDashboard = (props) => {
	const {lecteachs, lecs} = props;

    return (
    	<div className="row">
                
            <div className="col-md-8">
                <AttendanceList lecteachs={lecteachs}/>
            </div>
            
		</div>
	);
}

export default LecDashboard;
