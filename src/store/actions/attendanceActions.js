export const createLecturer = lecturer => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    var config = {
      apiKey: "AIzaSyATsOBvPIaOwQUfV6WDy4yzm2dRUm-kXdE",
      authDomain: "showcase-3debf.firebaseapp.com",
      databaseURL: "https://showcase-3debf.firebaseio.com",
      projectId: "showcase-3debf",
      storageBucket: "showcase-3debf.appspot.com",
      messagingSenderId: "3641612382"
    };

    const secondaryApp = firebase.initializeApp(config, "Secondary");

    secondaryApp
      .auth()
      .createUserWithEmailAndPassword(lecturer.email, lecturer.email)
      .then(resp => {
        firestore
          .collection("LecUser")
          .add({
            ...lecturer
            // uid: resp.uid
          })
          .then(secondaryApp.auth().signOut());
      })
      .then(() => {
        dispatch({ type: "CREATE_LECTURER", lecturer });
      })
      .catch(err => {
        dispatch({ type: "CREATE_LECTURER_ERROR", err });
      });
  };
};

export const createStudent = student => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    var config = {
      apiKey: "AIzaSyATsOBvPIaOwQUfV6WDy4yzm2dRUm-kXdE",
      authDomain: "showcase-3debf.firebaseapp.com",
      databaseURL: "https://showcase-3debf.firebaseio.com",
      projectId: "showcase-3debf",
      storageBucket: "showcase-3debf.appspot.com",
      messagingSenderId: "3641612382"
    };

    const secondaryApp = firebase.initializeApp(config, "Secondary");

    secondaryApp
      .auth()
      .createUserWithEmailAndPassword(student.email, student.email)
      .then(resp => {
        firestore
          .collection("StudentDetails")
          .add({
            ...student
            // studentid: resp.uid
          })
          .then(secondaryApp.auth().signOut());
      })
      .then(() => {
        dispatch({ type: "CREATE_STUDENT", student });
      })
      .catch(err => {
        dispatch({ type: "CREATE_STUDENT_ERROR", err });
      });
  };
};

export const createUnit = unit => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    // const doc_id = firestore.collection("LecTeach").doc.id;
    firestore
      .collection("LecTeach")
      // .doc(doc_id)
      .add({
        lecteachid: "doc_id",
        lecid: "doc_id",
        unitcode: unit.unitcode,
        unitname: unit.unitname,
        semester: unit.semester,
        studyyear: unit.studyyear,
        school: unit.school,
        department: unit.department,
        academicyear: unit.academicyear
      })
      .then(() => {
        firestore
          .collection("LecTeachTime")
          // .doc(doc_id)
          .add({
            lecid: "doc_id",
            lecteachid: "doc_id",
            lecteachtimeid: "doc_id",
            unitcode: unit.unitcode,
            unitname: unit.unitname,
            semester: unit.semester,
            studyyear: unit.studyyear,
            school: unit.school,
            department: unit.department,
            academicyear: unit.academicyear,
            day: unit.day,
            time: unit.time,
            venue: unit.venue
          });
      })
      .then(() => {
        dispatch({ type: "CREATE_UNIT", unit });
      })
      .catch(err => {
        dispatch({ type: "CREATE_UNIT_ERROR", err });
      });
  };
};
