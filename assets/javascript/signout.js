$(document).ready(function() {
  $("#user-signout").on("click", function() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        window.location = "./index.html";
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});
