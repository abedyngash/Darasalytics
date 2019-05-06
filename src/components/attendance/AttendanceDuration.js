import React from 'react';
import { Tabs, Tab, Nav, Col, Row } from 'react-bootstrap';
import moment from 'moment';

class AttendanceDuration extends React.Component {
	render () {

		const {index, attendances} = this.props;

		return (
			<div>
                <h5 className="border-bottom pb-2 mb-2">Attendees within the last week - ({attendances.length})</h5>
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                              <tr>
                                <th>S/No</th>
                                <th>Name of Student</th>
                                <th>Date Attended</th>
                                <th>Reg Number</th>
                              </tr>
                            </thead>
                {attendances.length == 0 ? 
                            
                            <tbody>
                                <tr>
                                    <td colspan='4' className="text-center">No data available</td>
                                </tr>
                            </tbody>
                    :
                    attendances.map((attendance, index) => {
                         return(
                            
                                    <tbody>
                                        <td>{index + 1}</td>
                                        <td>{ attendance.studname}</td>
                                        <td>{moment(attendance.date.toDate()).calendar()}</td>
                                        <td>{attendance.regno}</td>
                                    </tbody>
                               
                            
                            );
                      })
                }
                        </table>
                    </div>
            </div>
			)
	}
}

export default AttendanceDuration;