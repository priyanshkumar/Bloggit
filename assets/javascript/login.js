$(document).ready(function() {
  $("#login-user").on("click", function() {
    var email = $("#email")
      .val()
      .trim();

    var password = $("#password")
      .val()
      .trim();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(res) {
        console.log("Login");
        var userId = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref("/users/" + userId)
          .once("value")
          .then(function(snapshot) {
            var userName = snapshot.val().userName || "Anonymous";
            sessionStorage.setItem("userName", userName);
            console.log(sessionStorage.getItem("userName"));
            // window.location = "./redirect.html";
            // ...
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  });
});
