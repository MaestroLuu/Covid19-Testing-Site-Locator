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
        art1.attr("src", data.response.docs[0].web_url);
        art1.addClass("w3-bar-item w3-button w3-xxlarge");
        // making headline text <h2> to append
        var art1Headline = $("<h2>");
        art1.text(data.response.docs[0].headline.main);
        art1.append(art1Headline);
        // making <p> to append to the headline for snippet text
        var art1Snippet = $("<p>");
        art1Snippet.text(data.response.docs[0].snippet);
        art1Snippet.addClass("w3-large");
        art1Headline.append(art1Snippet);  
        // making <p> to append to the snippet for the lead paragraph text
        var art1Paragraph = $("<p>")
        art1Paragraph.text(data.response.docs[0].lead_paragraph);
        art1Paragraph.addClass("w3-small");
        art1Snippet.append(art1Paragraph);
        $(".newsbox").append(art1);

        var art2 = $("<a>");
        art2.attr("src", data.response.docs[1].web_url);
        art2.addClass("w3-bar-item w3-button w3-xxlarge");

        var art2Headline = $("<h2>");
        art2.text(data.response.docs[1].headline.main);
        art2.append(art2Headline);

        var art2Snippet = $("<p>");
        art2Snippet.text(data.response.docs[1].snippet);
        art2Snippet.addClass("w3-large");
        art2Headline.append(art2Snippet); 
        
        var art2Paragraph= $("<p>");
        art2Paragraph.text(data.response.docs[1].lead_paragraph);
        art2Paragraph.addClass("w3-small");
        art2Snippet.append(art2Paragraph);
        $(".newsbox").append(art2);

        var art3 = $("<a>");
        art3.attr("src", data.response.docs[2].web_url);
        art3.addClass("w3-bar-item w3-button w3-xxlarge");

        var art3Headline = $("<h2>");
        art3.text(data.response.docs[2].headline.main);
        art3.append(art3Headline);

        var art3Snippet = $("<p>");
        art3Snippet.text(data.response.docs[2].snippet);
        art3Snippet.addClass("w3-large");
        art3Headline.append(art3Snippet); 
        
        var art3Paragraph = $("<p>");
        art3Paragraph.text(data.response.docs[2].lead_paragraph);
        art3Paragraph.addClass("w3-small");
        art3Snippet.append(art3Paragraph);
        $(".newsbox").append(art3);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Error');
  });