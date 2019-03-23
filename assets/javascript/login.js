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
        var userId = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref("/users/" + userId)
          .once("value")
          .then(function(snapshot) {
            $("#email").val("");
            var userName = snapshot.val().userName || "Anonymous";
            sessionStorage.setItem("userName", userName);
            window.location = "./indexafterlogin.html";
          });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  });
});
