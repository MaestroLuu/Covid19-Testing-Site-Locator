// // Marco's Code
var apiUrlNews = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-cases&api-key=vULfp6mXKDYYuz3IoryCuILRxwbMZh4O";

fetch(apiUrlNews)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Error');
  });

var apiUrlLocation = "https://covid-19-testing.github.io/locations/california/complete.json";

fetch(apiUrlLocation)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        for(i=0; i < data.length; i++){
          console.log(data[i].physical_address[0].city);
        }
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Error');
  });



var apiUrlCovidActNow = "https://api.covidactnow.org/v2/state/CA.json?apiKey=e8eb26806f83418eade3b431bfc5fc2c";

fetch(apiUrlCovidActNow)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Error');
  });

// End of Marco's Code
// Gio's Code Stars
var apiUrlCovidActNow = "https://api.covidactnow.org/v2/state/CA.json?apiKey=e8eb26806f83418eade3b431bfc5fc2c";

fetch(apiUrlCovidActNow)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        //showed the # of cases
        console.log(data.actuals.cases);
        //shows # of deaths
        console.log(data.actuals.deaths);
        console.log(data.actuals.newCases);
        console.log(data.actuals.newDeaths);
        // console.log(data);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Error');
  });


































































































// Gio's Code End