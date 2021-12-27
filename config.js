const admin = require('firebase-admin');
const credential = require('./ServiceAccountKey.json')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgOYIUBxSWZK130QEJ0eebb8lBIYnB0i8",
  authDomain: "expresswithfirebase-2fdec.firebaseapp.com",
  projectId: "expresswithfirebase-2fdec",
  storageBucket: "expresswithfirebase-2fdec.appspot.com",
  messagingSenderId: "748997912689",
  appId: "1:748997912689:web:4c7e378ed943f4488053d0"
};

// Initialize Firebase
admin.initializeApp({credential: admin.credential.cert(credential)});
const db = admin.firestore();
const Users = db.collection("Users");

module.exports= { Users };