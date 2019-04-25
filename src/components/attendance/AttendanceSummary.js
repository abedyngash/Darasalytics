import React from 'react';
const AttendanceSummary = ({lecteach}) => {
    return (
        <div>
            <h5 className="border-top mt-3 pt-3">Unit Name: {lecteach.unitname}<span className="float-right">Unit Code: {lecteach.unitcode}</span></h5>
            { lecteach.courses.map(course =>
            
                <div className='card'>                    
                    <div className='card-header'>
                    
                    <h5> Class: {course.course}</h5>
                    <h5>Year of Study:  {course.yearofstudy}</h5>
                    </div>
                </div>

            )}    
        </div>
    )
}

export default AttendanceSummary;