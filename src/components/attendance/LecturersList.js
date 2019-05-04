import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';

const LecturersList = (props) => {
    const {auth} = props;
    if(!auth.uid) return <Redirect to='/login' />
    const { lecs} = props.location.state
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
                // console.log(lec)
                return(
                <div class="col-md-4">
                    <Link to={{
                        pathname: '/lecs/' + lec.id,
                        state: {
                          lec_id : lec.id,
                          firstName : lec.firstName,
                          lastName : lec.lastName
                        }
                      }}>                
                    <div key={lec.id} className='card lec-cards'>
                        <div className='card-header'>
                            <p>{lec.firstName} {lec.lastName}</p>
                            <small className="text-muted">{lec.email}</small>
                        </div>
                    </div>
                    </Link>
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


export default connect(mapStateToProps) (LecturersList);