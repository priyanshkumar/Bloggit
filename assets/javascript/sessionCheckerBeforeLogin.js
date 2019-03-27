$(document).ready(function() {
  // console.log(localStorage.getItem("LoginUID"));

  if (localStorage.getItem("LoginUID")) {
    window.location = "./indexafterlogin.html";
  }
});
