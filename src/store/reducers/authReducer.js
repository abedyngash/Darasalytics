const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
        console.log('login error');
            return {
                ...state, 
                authError: action.err.message.toString()
            };
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state;
        case 'SIGNUP_LEC_SUCCESS':
            console.log('lec signup success')
            return{
                ...state,
                authError: null
            };
        case 'SIGNUP_LEC_ERROR':
        console.log('lec signup error');
            return {
                ...state, 
                authError: action.err.message.toString()
            };
        default:
            return state;
    }
    
}

export default authReducer;