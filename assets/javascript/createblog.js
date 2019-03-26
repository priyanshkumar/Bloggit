//console.log(date);

//on document ready
$(document).ready(function() {
  var database = firebase.database();

  // variable declaration
  var blogTitle = "";
  var blogMessage = "";
  var bloggerName = "";
  var date = moment().format("MMM-DD-YYYY");
  console.log(date);

  $("#createblogsubmit").on("click", function(e) {
    e.preventDefault();
    getInformation();
    writetoDB();
  }); //-----------------createblog submit button close
  //------------------document ready close

  function getInformation() {
    blogTitle = $("#blogtitle")
      .val()
      .trim();
    blogMessage = $("#blogmessage")
      .val()
      .trim();
    bloggerName = $("#bloggername")
      .val()
      .trim();
    console.log(blogTitle, blogMessage, bloggerName);
  }

  function writetoDB() {
    var date = moment().format("YYYY/MM/DD");
    var data = database.ref("/blogs").push({
      //date: date
    });
    var id = data.key;
    database.ref("/blogs/" + id).set({
      blogtitle: blogTitle,
      blogmessage: blogMessage,
      bloggername: bloggerName,
      date: date,
      id: id
    });
    reset();
    window.location = "./bloglist.html";
  }

  function reset() {
    $("#blogtitle").val("");
    $("#blogmessage").val("");
    $("#bloggername").val("");
  }
});
