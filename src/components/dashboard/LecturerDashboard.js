import React from 'react';
import AttendanceList from '../attendance/AttendanceList';

const LecDashboard = (props) => {
	const {lecteachs} = props;
    return (
    	<div className="row">
                
            <div className="col-md-8">
                <AttendanceList lecteachs={lecteachs}/>
            </div>
            
		</div>
	);
}

export default LecDashboard;
