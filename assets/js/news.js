 var apiUrlNews = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-cases&api-key=vULfp6mXKDYYuz3IoryCuILRxwbMZh4O";

 fetch(apiUrlNews)
   .then(function (response) {
     if (response.ok) {
       response.json().then(function (data) {
         for(i=2; i < data.length; i++){
          //  console.log(data.response.docs[i].headline.main);
        }
        // making article hrefs
        var art1 = $("<a>");
        art1.attr("href", data.response.docs[0].web_url);
        art1.addClass("w3-bar-item w3-button w3-large w3-hover-text-blue");
        // making headline text <h2> to append
        var art1Headline = $("<h3>");
        art1Headline.text(data.response.docs[0].headline.main);
        art1.append(art1Headline);
        // making <p> to append to the headline for snippet text
        var art1Snippet = $("<p>");
        art1Snippet.text(data.response.docs[0].snippet);
        art1Snippet.addClass("w3-small");
        art1Headline.append(art1Snippet);  
        $(".newsbox").append(art1);

        var art2 = $("<a>");
        art2.attr("href", data.response.docs[1].web_url);
        art2.addClass("w3-bar-item w3-button w3-large w3-hover-text-blue");

        var art2Headline = $("<h3>");
        art2Headline.text(data.response.docs[1].headline.main);
        art2.append(art2Headline);

        var art2Snippet = $("<p>");
        art2Snippet.text(data.response.docs[1].snippet);
        art2Snippet.addClass("w3-small");
        art2Headline.append(art2Snippet); 
        $(".newsbox").append(art2);

        var art3 = $("<a>");
        art3.attr("href", data.response.docs[2].web_url);
        art3.addClass("w3-bar-item w3-button w3-large w3-hover-text-blue");

        var art3Headline = $("<h3>");
        art3Headline.text(data.response.docs[2].headline.main);
        art3.append(art3Headline);

        var art3Snippet = $("<p>");
        art3Snippet.text(data.response.docs[2].snippet);
        art3Snippet.addClass("w3-small");
        art3Headline.append(art3Snippet); 
        $(".newsbox").append(art3);
      });
    } else {
      alert('Cannot connect to NYTimes' + response.statusText);
    }
  })
