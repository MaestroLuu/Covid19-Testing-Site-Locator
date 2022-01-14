var apiUrlLocation = "https://covid-19-testing.github.io/locations/california/complete.json";

fetch(apiUrlLocation)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        for (i = 0; i < data.length; i++) {
          // console.log(data[2]);
          $(document).ready(function () {
            $("select").on('change', function () {
              var query = (this.value);
              if (query === data[i].physical_address[0].city) {
                // write code here for when new values are changed in the dropdown list
                var facilityName = data[i].name;
                if (facilityName === data[i++].name) {
                  var test = facilityName.slice(0);
                }
                var siteEl = $("<a>");
                siteEl.addClass("w3-bar-item w3-button");
                siteEl.text(facilityName);
                $("#results-container").append(siteEl);
                
                

              }
            });
          });
        }
      });
    }
  });