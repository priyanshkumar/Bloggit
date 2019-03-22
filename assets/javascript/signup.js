$(document).ready(function() {
  $("#create-user").on("click", function() {
    var email = $("#email")
      .val()
      .trim();

    var password = $("#password")
      .val()
      .trim();

    var userName = $("#username")
      .val()
      .trim();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        firebase
          .database()
          .ref("users/" + user.uid)
          .set({
            email: user.email,
            uid: user.uid,
            userName: userName
          });
        sessionStorage.setItem("userName", userName);
      }
    });
  });
});
