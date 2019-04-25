export const createLecturer = (lecturer) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('Lecturers').add({
            ...lecturer
        }).then(
            () => {
                dispatch({type: 'CREATE_LECTURER', lecturer});
            }
        ).catch(
            (err) => {
                dispatch({type: 'CREATE_LECTURER_ERROR', err});
            }
        )
        
    }
};

