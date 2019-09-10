const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.staffLecWriter = functions.firestore
    .document('LecUser/{docId}')
    .onUpdate((change, context) => {
        // Get an object representing the document
        const newValue = change.after.data();

        // ...or the previous value before this update
        const previousValue = change.before.data();

        //If the document does not exist, it will be created. 
        //If the document does exist, its contents will be overwritten 

        const uid = previousValue.uid;
        const firstName = previousValue.firstname;
        const lastName = previousValue.lastname;
        const initials = previousValue.firstname[0] + previousValue.lastname[0];
        const role = 'lecturer';
        console.log(uid);
        // const number = newValue.number;

        var docRef = admin.firestore().doc('Staff/'+uid)

        return docRef.set({
            [newValue.firstName] : firstName,
            [newValue.lastName] : lastName,            
            [newValue.role] : role,
            [newValue.initials] : initials
        }, 
        { merge: true });

});
