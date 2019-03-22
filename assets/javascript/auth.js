// Initialize Firebase for authentic
$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyDDpFOGNWohUenu3oOH__sN-7H93zqLQGg",
    authDomain: "bloggitauth.firebaseapp.com",
    databaseURL: "https://bloggitauth.firebaseio.com",
    projectId: "bloggitauth",
    storageBucket: "bloggitauth.appspot.com",
    messagingSenderId: "529153480849"
  };
  firebase.initializeApp(config);
});
