const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Invalid Credentials"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    case "SIGNUP_LEC_SUCCESS":
      console.log("lec signup success");
      return {
        ...state,
        authError: null
      };

    case "SIGNUP_LEC_ERROR":
      console.log("lec signup error");
      return {
        ...state,
        authError: action.err.message.toString()
      };
    case "SEMESTER_DETAILS_SUCCESS":
      console.log("semester details set successfully");
      return {
        ...state,
        authError: null
      };
    case "SEMESTER_DETAILS_ERROR":
      console.log("semester details error");
      return {
        ...state,
        authError: action.err.message.toString()
      };
    default:
      return state;
  }
};

export default authReducer;
