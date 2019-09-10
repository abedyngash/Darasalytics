import React from "react";
import { MDBDataTable } from "mdbreact";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

class WeeksInMonth extends React.Component {
  render() {
    // const {attendances_monthly} = this.props;
    const attendances_monthly = [
      {
        studname: "Abedy Nganga",
        date: new Date().getTime(),
        regno: "C025-01-1157/2016"
      },
      {
        studname: "Tabitha Wangari",
        date: new Date().getTime(),
        regno: "C025-01-1158/2016"
      },
      {
        studname: "Timothy Mbiga",
        date: new Date().getTime(),
        regno: "C025-01-1156/2016"
      }
    ];
    console.log(attendances_monthly);

    const attendance_objs = attendances_monthly.map((elem, index) => ({
      index: index + 1,
      name: elem.studname,
      date: moment(elem.date).calendar(),
      regno: elem.regno
    }));
    const data = {
      columns: [
        {
          label: "S/No",
          field: "index",
          sort: "asc",
          width: 100
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150
        },
        {
          label: "Date",
          field: "date",
          sort: "asc",
          width: 270
        },
        {
          label: "Reg Number",
          field: "regno",
          sort: "asc",
          width: 200
        }
      ],
      rows: attendance_objs
    };
    return (
      <div>
        <div className="normal-content-section mb-4 pb-4 border-bottom">
          <MDBDataTable bordered hover data={data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)

  const dbReceived = state.firestore && state.firestore.data.StudentScanClass;

  const attendances_monthly = dbReceived
    ? state.firestore.ordered.StudentScanClass
    : [];

  return {
    attendances_monthly: attendances_monthly
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    const { period, unitcode, courses, index_of_tab } = props;
    // console.log(props)

    return [
      {
        collection: "StudentScanClass",
        where: [
          ["unitcode", "==", unitcode],
          ["course", "==", courses[index_of_tab].course],
          ["date", ">", period.from],
          ["date", "<", period.to],
          ["yearofstudy", "==", courses[index_of_tab].yearofstudy.toString()]
        ]
      }
    ];
  })
)(WeeksInMonth);
// <WeeksInMonth
// period={period}
// unitcode={unitcode}
// courses={courses}
// index_of_tab={index_of_tab}
// />
