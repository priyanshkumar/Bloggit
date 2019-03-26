$(document).ready(function() {
  var searchTerm;
  var retrieve;

  $("#searchApi").on("click", function(e) {
    e.preventDefault();
    var queryUrl =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm +
      "&api-key=ACd4bRkDMq5GIjGoCxZpHjihygGZYp2g";
    searchTerm = $("#searchTerm").val();
    retrieve = parseInt($("#recordstoRetrieve").val());
    console.log(retrieve);
    console.log(typeof retrieve);

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response.response.docs);
      // console.log(response.response.docs[0].headline.main);
      // console.log(response.response.docs[0].byline.original);
      // console.log(response.response.docs[0].snippet);
      // console.log(response.response.docs[0].web_url);
    });
  });
});
