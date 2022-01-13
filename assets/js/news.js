 var apiUrlNews = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-cases&api-key=vULfp6mXKDYYuz3IoryCuILRxwbMZh4O";

 fetch(apiUrlNews)
   .then(function (response) {
     if (response.ok) {
       response.json().then(function (data) {
         console.log(data);
         console.log(data.response.docs[0].headline.main);
        
         for(i=0; i < data.length; i++){
           console.log(data.response.docs[i].headline.main);

        }
        var art1 = $("<a>");
        art1.attr("src", data.response.docs[0].web_url);
        art1.addClass("w3-bar-item w3-button");
        var art1Headline = $("<h2>");
        art1.text(data.response.docs[0].headline.main);
        art1.append(art1Headline);
        var art1Snippet = $("<p>");
        art1Snippet.text = $(data.response.docs[0].snippet);
        art1Headline.append(art1Snippet);  
        $("#mySidebar").append(art1);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Error');
  });