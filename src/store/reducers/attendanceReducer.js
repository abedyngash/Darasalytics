const initState = {};

const attendanceReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_LECTURER":
      console.log("created lecturer", action.lecturer);

      return {
        ...state,
        lec_message: "Lecturer added Successfully"
      };
    case "CREATE_LECTURER_ERROR":
      console.log("create lecturer error", action.err);
      return {
        ...state,
        lec_message: "Error adding lecturer"
      };
    case "CREATE_STUDENT":
      console.log("created student", action.student);

      return {
        ...state,
        student_message: "Student added Successfully"
      };
    case "CREATE_STUDENT_ERROR":
      console.log("create student error", action.err);
      return {
        ...state,
        student_message: "Error adding student"
      };
    case "CREATE_UNIT":
      console.log("created unit", action.unit);

      return {
        ...state,
        unit_message: "Unit added Successfully"
      };
    case "CREATE_UNIT_ERROR":
      console.log("create unit error", action.err);
      return {
        ...state,
        unit_message: "Error adding unit"
      };
    default:
      return state;
  }
};

export default attendanceReducer;
