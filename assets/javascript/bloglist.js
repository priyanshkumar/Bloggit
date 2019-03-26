$(document).ready(function() {
  database = firebase.database();
  var i = 1;
  database.ref("/blogs").on("child_added", function(snapshot) {
    var sv = snapshot.val();
    var blogTitle = sv.blogtitle;
    var blogMessage = sv.blogmessage;
    var bloggerName = sv.bloggername;
    var blogDate = sv.date;
    var id = sv.id;
    //console.log(blogTitle, blogMessage, bloggerName);

    //adding a class for each section of the blog
    var bloglistDiv = $("<div>");
    bloglistDiv.addClass("p-4 savedblogsclass" + i);

    //adding a class for title, blogger name, date and show/hide button
    var bloglistsubDiv = $("<div>");
    bloglistsubDiv.addClass("bloglistsubDiv");

    var publishedDetails = $("<div>");
    publishedDetails.addClass("d-flex justify-content-center");

    var button = $("<div>");
    button.addClass("d-flex justify-content-center");

    var blogtitleDiv = $("<div>");
    blogtitleDiv.css("font-size", "1.4rem");
    blogtitleDiv.append("<strong>" + blogTitle + "</strong>");

    var bloggernameDiv = $("<div>");
    bloggernameDiv.addClass("mr-2");
    bloggernameDiv.append("<em>" + bloggerName + "</em>");

    var blogdateDiv = $("<div>");
    blogdateDiv.append("<em>" + blogDate + "</em>");

    var showhidebtn = $("<button>");

    showhidebtn.addClass("showhidebtn btn btn-primary mr-2");
    showhidebtn.attr("uid", id);
    showhidebtn.text("Show More");

    var editbtn = $("<button>");

    editbtn.addClass("editbtn btn btn-success");
    editbtn.attr("eid", id);
    editbtn.text("Edit");

    //seperate div for the blog message to aviod flexbox alignment
    publishedDetails.append(bloggernameDiv, blogdateDiv);

    button.append(showhidebtn, editbtn);
    bloglistsubDiv
      .append(blogtitleDiv)
      .append(publishedDetails)
      .append(button);
    bloglistDiv.append(bloglistsubDiv);

    $("#savedblogs").append(bloglistDiv);

    $();
    i++;
    if (i > 2) {
      i = 1;
    }
  }); //-----------------firebase ref end

  $(document).on("click", ".showhidebtn", function() {
    var uid = $(this).attr("uid");
    firebase
      .database()
      .ref("/blogs/" + uid)
      .on("value", function(res) {
        var output = res.val();
        sessionStorage.setItem("title", output.blogtitle);
        sessionStorage.setItem("content", output.blogmessage);
        sessionStorage.setItem("name", output.bloggername);
        sessionStorage.setItem("date", output.date);
      });

    window.location = "./displayBlog.html";
  });

  $(document).on("click", ".editbtn", function() {
    var eid = $(this).attr("eid");

    firebase
      .database()
      .ref("/blogs/" + eid)
      .on("value", function(res) {
        var output = res.val();

        sessionStorage.setItem("editTitle", output.blogtitle);
        sessionStorage.setItem("editMessage", output.blogmessage);
        sessionStorage.setItem("editName", output.bloggername);
        sessionStorage.setItem("editDate", output.date);
        sessionStorage.setItem("eid", eid);

        window.location = "./create.html";
      });
  });
}); //------------------------document ready end
