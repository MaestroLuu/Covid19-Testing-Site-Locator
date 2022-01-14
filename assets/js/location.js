var apiUrlLocation = "https://covid-19-testing.github.io/locations/california/complete.json";
var dataSet = [];
var priorQuery = localStorage.getItem("pastSearch");

$("#testing-sites").val(priorQuery);

function displayData() {
  $("#results-container").empty();
  var query = $("#testing-sites").val();
  if (!query) {
    return;
  }
  localStorage.setItem("pastSearch", query);
  for (i = 0; i < dataSet.length; i++) {
    if (query === dataSet[i].physical_address[0].city) {
      var facilityName = dataSet[i].name;
      if (facilityName === dataSet[i++].name) {
        var test = facilityName.slice(0);
        localStorage.setItem("facility", test);
      }

      var siteEl = $("<a>");
      siteEl.addClass("w3-bar-item w3-button covid-testing-sites");
      siteEl.text(facilityName);
      $("#results-container").append(siteEl);
    }
  }
}

$("select").on('change', function () {
  if (dataSet.length <= 0) {
    return;
  }
  displayData();
});

$("#results-container").on("click", function (event) {
  for (i = 0; i < dataSet.length; i++) {
    if (event.target.matches(".covid-testing-sites")) {
      var btnText = event.target.textContent;
      if (btnText === dataSet[i].name) {
        var physicalAddress = dataSet[i].physical_address[0]
        $("#site-name").text(btnText);
        $("#address").text(physicalAddress.address_1 + " " + physicalAddress.city + " " +
          physicalAddress.state_province + " " + physicalAddress.postal_code);
      }
    }
  }
});

fetch(apiUrlLocation)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        dataSet = data;
        displayData();
      });
    }
  });