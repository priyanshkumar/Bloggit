$(document).ready(function() {
  database = firebase.database();
  var i = 1;
  database.ref("/blogs").on("child_added", function(snapshot) {
    var sv = snapshot.val();
    var blogTitle = sv.blogtitle;
    var blogMessage = sv.blogmessage;
    var bloggerName = sv.bloggername;
    var blogDate = sv.date;
    //console.log(blogTitle, blogMessage, bloggerName);

    //adding a class for each section of the blog
    var bloglistDiv = $("<div>");
    bloglistDiv.addClass("savedblogsclass" + i);
    //adding a class for title, blogger name, date and show/hide button
    var bloglistsubDiv = $("<div>");
    bloglistsubDiv.addClass("bloglistsubDiv");
    var blogtitleDiv = $("<div>");
    blogtitleDiv.append("Title: <strong>" + blogTitle + "</strong>");
    var bloggernameDiv = $("<div>");
    bloggernameDiv.append("by: ", bloggerName);
    var blogdateDiv = $("<div>");
    blogdateDiv.append("Published on: ", blogDate + "     ");
    var showhidebtn = $("<button>");
    showhidebtn.addClass("showhidebtn");
    showhidebtn.text("Show/Hide Blog");
    $(blogtitleDiv).css("margin-right", "30px");
    $(bloggernameDiv).css("margin-right", "30px");
    $(blogdateDiv).css("margin-right", "30px");
    //seperate div for the blog message to aviod flexbox alignment
    var dummyDiv = $("<div>");
    dummyDiv.addClass("dummyDivdisplay");
    var blogmessageDiv = $("<div>");
    blogmessageDiv.append(blogMessage);
    dummyDiv.append(blogmessageDiv);

    bloglistsubDiv
      .append(blogtitleDiv)
      .append(bloggernameDiv)
      .append(blogdateDiv)
      .append(showhidebtn);
    bloglistDiv.append(bloglistsubDiv);
    bloglistDiv.append(dummyDiv);

    $("#savedblogs").append(bloglistDiv);

    $();
    i++;
    if (i > 2) {
      i = 1;
    }
    //$(".dummyDivdisplay").hide();
    $(document).on("click", ".showhidebtn", function() {
      $(".dummyDivdisplay").toggle();
    });
  }); //-----------------firebase ref end
}); //------------------------document ready end
