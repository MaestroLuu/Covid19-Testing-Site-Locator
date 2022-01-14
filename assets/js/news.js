 var apiUrlNews = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-cases&api-key=vULfp6mXKDYYuz3IoryCuILRxwbMZh4O";

 fetch(apiUrlNews)
   .then(function (response) {
     if (response.ok) {
       response.json().then(function (data) {
         for(i = 0; i < 3; i++){
        var article = $("<a>");
        article.attr("href", data.response.docs[i].web_url);
        article.addClass("w3-bar-item w3-button w3-large w3-hover-text-blue");
        var articleHeadline = $("<h3>");
        articleHeadline.text(data.response.docs[i].headline.main);
        article.append(articleHeadline);
        var articleSnippet = $("<p>");
        articleSnippet.text(data.response.docs[i].snippet);
        articleSnippet.addClass("w3-small");
        articleHeadline.append(articleSnippet);  
        $(".newsbox").append(article);
        }
      });
    } else {
      alert('Cannot connect to NYTimes' + response.statusText);
    }
  })