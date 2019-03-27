$(document).ready(function() {
  $("#userSignout").on("click", function() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        localStorage.setItem("LoginUID", "");
        window.location = "./index.html";
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});
