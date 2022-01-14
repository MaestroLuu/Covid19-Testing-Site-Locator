var apiUrlLocation = "https://covid-19-testing.github.io/locations/california/complete.json";

fetch(apiUrlLocation)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // When user changes the city in the dropdown
        // a new list of facilities corresponding to the city
        // appends to the container below    
        $("select").on('change', function () {
          var query = (this.value);
          for (i = 0; i < data.length; i++) {
            if (query === data[i].physical_address[0].city) {
              var facilityName = data[i].name;
              if (facilityName === data[i++].name) {
                var test = facilityName.slice(0);
              }

              var siteEl = $("<a>");
              siteEl.addClass("w3-bar-item w3-button testing-site");
              siteEl.text(facilityName);
              $("#results-container").append(siteEl);

              // function for when facility name is clicked
              $("#results-container").on("click", function(event) {
                for (i = 0; i < data.length; i++) {
                  if (event.target.matches(".testing-site")) {
                    var btnText = event.target.textContent;
                    if (btnText === data[i].name) {
                      var physicalAddress = data[i].physical_address[0]
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
      });
    }
  });