$(document).ready(function() {
  $(".title").text(sessionStorage.getItem("title"));
  $(".content").text(sessionStorage.getItem("content"));
  $(".publishedby").text("Published By: " + sessionStorage.getItem("name"));
  $(".date").text("Date: " + sessionStorage.getItem("date"));
});
