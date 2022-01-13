//Reveal data from apiUrlTS
// pull timeseries array - 7days
// look into chartJS and use features to create graph from data
// append graph into html once complete

var apiUrlCovidActNow = "https://api.covidactnow.org/v2/state/CA.json?apiKey=e8eb26806f83418eade3b431bfc5fc2c";

var apiUrlTS = "https://api.covidactnow.org/v2/state/CA.timeseries.json?apiKey=e8eb26806f83418eade3b431bfc5fc2c"

fetch(apiUrlTS)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        //showed the # of cases
        // console.log(data.actuals.cases);
        // //shows # of deaths
        // console.log(data.actuals.deaths);
        // console.log(data.actuals.newCases);
        // console.log(data.actuals.newDeaths);
        // // console.log(data);

        // var D = data.actuals;
        // var cases = D.cases;
        // var newCases = D.newCases;
        // var deaths = D.newDeaths;

        // var casesEL = $("<h2>");
        // casesEL.text("Cases: ");
        // $("#contact-info").append(casesEL);

      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Error');
  });



  
