const firebase = require("firebase");
const firebaseConfig = require("./firebaseConfig");
// Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.firestore();

module.exports = storage;


// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }