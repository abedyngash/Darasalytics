import React from 'react';

const LecturersList = ({lecs}) => {
    return (
        <div className="content-section">
            <h2>Lecturers</h2>
            {lecs && lecs.map(lec => {
                // console.log(lec.id)
                return(
                    <div key={lec.id} className='card'>
                        <div className='card-header'>
                            <p>{lec.full_name}</p>
                            <small className="text-muted">{lec.email}</small>
                        </div>
                    </div>
                )
            })}
            
            
        </div>
    );
}

export default LecturersList;