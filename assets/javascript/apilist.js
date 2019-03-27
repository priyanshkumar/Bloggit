$(document).ready(function() {
  let searchTerm;

  $("#searchApi").on("click", function(e) {
    e.preventDefault();
    searchTerm = $("#searchTerm").val();
    var queryUrl =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm +
      "&api-key=ACd4bRkDMq5GIjGoCxZpHjihygGZYp2g";
    //console.log(searchTerm);
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      // console.log(response.response.docs);
      // console.log(response.response.docs[0].headline.main);
      // console.log(response.response.docs[0].byline.original);
      // console.log(response.response.docs[0].snippet);
      // console.log(response.response.docs[0].web_url);
      // console.log(response.response.docs.length);
      var j = 1;
      $("#displayapi").empty();
      for (i = 0; i < response.response.docs.length; i++) {
        var headline = response.response.docs[i].headline.main;
        var author = response.response.docs[i].byline.original;
        var snippet = response.response.docs[i].snippet;
        var newsAPIurl = response.response.docs[i].web_url;
        //console.log(headline, author, snippet, newsAPIurl);
        var apimainDiv = $("<div>");
        apimainDiv.addClass("savedblogsclass" + j);
        var headlineDiv = $("<div>");
        headlineDiv.text(headline);
        headlineDiv.addClass("apiheadline");
        var authorDiv = $("<div>");
        authorDiv.text(author);
        authorDiv.addClass("apiauthor");
        var snippetDiv = $("<div>");
        snippetDiv.text(snippet);
        var newsAPIurlDiv = $("<div>");
        newsAPIurlDiv.addClass("apiauthor");
        newsAPIurlDiv.append(
          $("<a href = '" + newsAPIurl + "'>" + newsAPIurl + "</a>").attr(
            "target",
            "_blank"
          )
        );
        newsAPIurlDiv.attr("src", newsAPIurl);
        apimainDiv
          .append(headlineDiv)
          .append(authorDiv)
          .append(snippetDiv)
          .append(newsAPIurlDiv);
        $("#displayapi").append(apimainDiv);
        j++;
        if (j > 2) {
          j = 1;
        }
      }
    });
  });
});
