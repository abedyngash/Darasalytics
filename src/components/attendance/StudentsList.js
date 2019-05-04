import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const StudentsList = (props) => {
    const {auth} = props;
    if(!auth.uid) return <Redirect to='/login' />
    const { students } = props.location.state;
   
    return (
        <div className="container-fluid content-section">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Students</li>
              </ol>
            <h2>Students</h2>
            <div className="content-section row">
            
            {students && students.map(student => {
                
                return(
                <div class="col-md-3">
                    <div key={student.id} className='card lec-cards'>
                        <div className='card-header'>
                            <p><span><b>Name</b></span> : {student.firstname} {student.lastname}</p>
                            <p><span><b>Reg Number</b></span> : {student.regnumber}</p>
                            <p><span><b>School</b></span> : {student.school}</p>
                            <p><span><b>Department</b></span> : {student.department}</p>
                            
                        </div>
                    </div>
                </div>
                )
            })}
            
            </div>
        </div>
    )
    
}

const mapStateToProps = (state, ownProps) => {
   
    return {
       
        auth: state.firebase.auth
        
    }
}


export default connect(mapStateToProps) (StudentsList);