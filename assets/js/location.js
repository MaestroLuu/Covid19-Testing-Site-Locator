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
