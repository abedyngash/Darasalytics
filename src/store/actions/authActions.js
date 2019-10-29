// import * as admin from 'firebase-admin';

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS"
        });
      });
  };
};

export const signUpLec = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        switch (newUser.role) {
          case "lecturer":
            return firestore
              .collection("Staff")
              .doc(resp.user.uid)
              .set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                role: newUser.role,
                initials: newUser.firstName[0] + newUser.lastName[0]
              })
              .then(() => {
                // console.log(firestore.collection("Staff").doc(resp.user.uid));
                return firestore
                  .collection("LecUser")
                  .doc(resp.user.uid)
                  .set({
                    currentacademicyear: null,
                    currentsemester: null,
                    currentyear: null,
                    department: null,
                    devicetoken: null,
                    firstname: newUser.firstName,
                    lastname: newUser.lastName,
                    school: null,
                    uid: resp.user.uid
                    // role: newUser.role,
                    // initials: newUser.firstName[0] + newUser.lastName[0]
                  });
              });
          case "registrar":
            break;

          default:
            break;
        }
      })
      .then(() => {
        dispatch({ type: "SIGNUP_LEC_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_LEC_ERROR", err });
      });
  };
};
