import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const CoursesList = (props) => {
    const {auth} = props;
    
    if(!auth.uid) return <Redirect to='/login' />
    const { courses } = props.location.state;
    const dkut_courses = courses && courses[0]
    console.log((dkut_courses))
    return (
        <div className="container-fluid content-section">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Courses</li>
              </ol>
            <h2>Courses</h2>
            <div className="content-section row">
            
           {(() => {
                const arr = []
                for (let value of Object.values(dkut_courses)) {
                  // console.log(value);
                  arr.push(value);
                }
                arr.pop()
                
                return (
                    <div class="row">
                      {arr.map(item => (
                        <div class="col-md-4">                  
                            <div key={item} className='card lec-cards'>
                                <div className='card-header'>
                                    <p>{item}</p>
                                    
                                </div>
                            </div>
                        </div>
                      ))}
                    </div>
                  );

            })()}


            
            </div>
        </div>
    )
    
}


const mapStateToProps = (state, ownProps) => {
   
    return {
       
        auth: state.firebase.auth
        
    }
}

export default connect(mapStateToProps) (CoursesList);