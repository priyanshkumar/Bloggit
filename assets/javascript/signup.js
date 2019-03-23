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
      .then(function() {
        var user = firebase.auth().currentUser;
        if (user != null) {
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
      })
      .then(function() {
        firebase
          .database()
          .ref("users/")
          .on("value", function() {
            window.location = "./indexafterlogin.html";
          });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  });
});
