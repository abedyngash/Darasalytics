import React from 'react';

const LecturersList = (props) => {
    const { lecs } = props.location.state
        return (
        <div className="container-fluid content-section">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Lecturers</li>
              </ol>
            <h2>Lecturers</h2>
            <div className="content-section row">
            
            {lecs && lecs.map(lec => {
                return(
                <div class="col-md-4">                  
                    <div key={lec.id} className='card lec-cards'>
                        <div className='card-header'>
                            <p>{lec.firstName} {lec.lastName}</p>
                            <small className="text-muted">{lec.email}</small>
                        </div>
                    </div>
                </div>
                )
            })}
            
            </div>
        </div>
    )
    
}

export default LecturersList;