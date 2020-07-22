import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABX1kTHUjl7-usfiKM4Rp8YKpk9gsGt-0",
    authDomain: "react-note-management-9c733.firebaseapp.com",
    databaseURL: "https://react-note-management-9c733.firebaseio.com",
    projectId: "react-note-management-9c733",
    storageBucket: "react-note-management-9c733.appspot.com",
    messagingSenderId: "146110528765",
    appId: "1:146110528765:web:e660b02fa212f7b3bb5294",
    measurementId: "G-E1THBX79DV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote');

// var noteData = firebase.database().ref('dataForNote/node 2');
//update data
// noteData.set({
//     id :4,
//     title : "Note 21/07/2020",
//     content : "demo update firebase"
// })


//show data
// data.once('value').then(function(snapshot){
//     console.log(snapshot.val());
// })

