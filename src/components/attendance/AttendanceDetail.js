import React from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';

import { Redirect, Link } from 'react-router-dom';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ;

class AttendanceDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index_of_tab: 0 //initial state
        }

      }

    handleSelect(key, props) {
		this.setState({index_of_tab: parseInt(key)})
		
    }

    render(){
        this.handleSelect = this.handleSelect.bind(this);
        
                
        const {single_class, courses, auth} = this.props;
        if(!auth.uid) return <Redirect to='/login' />
        
        if(single_class) {
            return(
            <div className='container content-section'>
            
                <div key={single_class.id} className="card">
                    <div className="card-header">
                        <h4>Unit Name: {single_class.unitname} <span class="float-right">Unit Code: {single_class.unitcode}</span></h4>
                        <div className="border-top mt-3 pt-3">
                            { courses.map(course => 
                            
                            <div>
                                <h6><strong>Course:</strong> {course.course}</h6>
                                <p><strong>Year of Study:</strong> {course.yearofstudy}</p>
                                <hr/>
                            </div>
                            
                            )}
                            {courses.length > 1 ? <div className="float-center"><small className="text-muted">(Common Unit)</small></div>: ''} 
                        </div>
                    </div>
                </div>
                <h2 className='mb-5'>View the Attendances Below</h2>
                
                <div className="row">
                    <div className="col-md-4">
                        <Link
                            to = {{
                                pathname: '/class/' + single_class.lecteachtimeid + '/weekly',
                                state: {
                                  courses: courses,
                                  unitcode: single_class.unitcode,
                                  unitname: single_class.unitname,
                                }
                            }}
                        >
                        
                           <div class="card">
                               <div class="card-header">
                                   Weekly Attendances
                               </div>
                           </div>
                        </Link> 
                    </div>
                    <div className="col-md-4">
                        <Link
                            to = {{
                                pathname: '/class/' + single_class.lecteachtimeid + '/monthly',
                                state: {
                                  courses: courses,
                                  unitcode: single_class.unitcode,
                                  unitname: single_class.unitname,
                                }
                            }}
                        >
                           <div class="card">
                               <div class="card-header">
                                   Mothly Attendances
                               </div>
                           </div> 
                       </Link>
                    </div>
                    <div className="col-md-4">
                       <div class="card">
                           <div class="card-header">
                               Semester Wise Attendances
                           </div>
                       </div> 
                    </div>
                </div>
            </div>
            )
        } else {

        return (
            <div className='container content-section'>
            Loading Unit details... 
            </div>
        );
        
        }
        
    }

}

// const my_date = new Date();
// const timestamp = my_date.getTime();
// console.log(timestamp)


const mapStateToProps = (state, ownProps) => {
   
    
    const id = ownProps.match.params.id;
    // console.log(id)
    
    const db_received = state.firestore.data.LecTeachTime;
    // console.log(db_received ? db_received : {})
    const units = db_received ? db_received : {};
    // console.log(units)
    const single_class = units ? units[id] : null ;
    
    // console.log(single_class)
    const courses =db_received ? single_class['courses'] || {} : {};
    // console.log(courses)
   
    const dbReceived = state.firestore && state.firestore.data.StudentScanClass;
    // console.log(dbReceived)
    const attendances = dbReceived ? state.firestore.ordered.StudentScanClass : [];
    return {
        single_class: single_class,
        courses: courses,
        auth: state.firebase.auth
        
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect( [
        { collection : 'LecTeachTime' }
    ]),
    
) (AttendanceDetail);