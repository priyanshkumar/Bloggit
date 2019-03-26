$(document).ready(function() {
  var searchTerm;

  $("#searchApi").on("click", function(e) {
    e.preventDefault();
    searchTerm = $("#searchTerm").val();
    var queryUrl =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm +
      "&api-key=ACd4bRkDMq5GIjGoCxZpHjihygGZYp2g";
    console.log(searchTerm);
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      // console.log(response.response.docs);
      // console.log(response.response.docs[0].headline.main);
      // console.log(response.response.docs[0].byline.original);
      // console.log(response.response.docs[0].snippet);
      // console.log(response.response.docs[0].web_url);

      var headline = response.response.docs[0].headline.main;
      var author = response.response.docs[0].byline.original;
      var snippet = response.response.docs[0].snippet;
      var newsAPIurl = response.response.docs[0].web_url;
      console.log(headline, author, snippet, newsAPIurl);
    });
  });
});
