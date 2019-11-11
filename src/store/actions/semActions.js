import React, { Component } from "react";

export const AddSem = (lec, auth) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("LecUser")
      .doc(auth.uid)
      .update({
        currentacademicyear: lec.currentacademicyear,
        currentsemester: lec.currentsemester,
        currentyear: lec.currentyear,
        department: lec.department,
        // devicetoken: null,
        school: lec.school
        // uid: resp.user.uid
      })
      .then(() => {
        dispatch({ type: "SEMESTER_DETAILS_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SEMESTER_DETAILS_ERROR", err });
      });
  };
};
