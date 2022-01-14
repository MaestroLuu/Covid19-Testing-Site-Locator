var apiUrlLocation = "https://covid-19-testing.github.io/locations/california/complete.json";
var dataSet = [];

var priorQuery = localStorage.getItem("pastSearch");
$("#testing-sites").val(priorQuery);
console.log(priorQuery);

$("select").on('change', function () {
  if (dataSet.length <= 0) {
    return;
  }

  var query = (this.value);
  localStorage.setItem("pastSearch", query);

  for (i = 0; i < dataSet.length; i++) {
    if (query === dataSet[i].physical_address[0].city) {
      var facilityName = dataSet[i].name;
      if (facilityName === dataSet[i++].name) {
        var test = facilityName.slice(0);
      }

      var siteEl = $("<a>");
      siteEl.addClass("w3-bar-item w3-button testing-sites");
      siteEl.text(facilityName);
      $("#results-container").append(siteEl);

      // function for when facility name is clicked
      $("#results-container").on("click", function(event) {
        for (i = 0; i < dataSet.length; i++) {
          if (event.target.matches(".testing-sites")) {
            var btnText = event.target.textContent;
            if (btnText === dataSet[i].name) {
              var physicalAddress = dataSet[i].physical_address[0]
              $("#site-name").text(facilityName);
              $("#address").text(physicalAddress.address_1 + " " + physicalAddress.city + " " 
              + physicalAddress.state_province + " " + physicalAddress.postal_code);
            }
          }
        }
      });
    }
  };
});


fetch(apiUrlLocation)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        dataSet = data;
        // When user changes the city in the dropdown
        // a new list of facilities corresponding to the city
        // appends to the container below    
      });
    }
  });