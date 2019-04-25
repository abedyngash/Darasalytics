const initState = {
    
}

const attendanceReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_LECTURER':
            console.log('created lecturer', action.lecturer);

            return {
                ...state,
                lec_message: 'Lecturer added Successfully'
            };
        case 'CREATE_LECTURER_ERROR':
            console.log('create lecturer error', action.err);
            return {
                ...state,
                lec_message: 'Error adding lecturer'
            };
        default:
            return state;
    }
    
}

export default attendanceReducer;