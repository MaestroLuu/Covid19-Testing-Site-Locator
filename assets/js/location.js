var apiUrlLocation = "https://covid-19-testing.github.io/locations/california/complete.json";

// array[2] san diego
// array[0,10] sacramento
//array[1,20,38] san rancisco
//array[21] san jose
fetch(apiUrlLocation)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {

        for (i = 0; i < data.length; i++) {
          console.log(data[i]);
          //console.log(data[i].physical_address[0]);
        }

        //san diego variables
        var sanDiegoCity = (data[2].physical_address[0].city);
        var sanDiegoName = (data[2].name);
        var sanDiegoAddress = (data[2].physical_address[0].address_1);
        var sanDiegoPostal = (data[2].physical_address[0].postal_code);
        var sanDiegoNumber = (data[2].phones[0].number);
        console.log(data);
        console.log((data[2].alternate_name[0]));

        //san diego appending elements
        var addSanDiegoCity = $("<p>");
        addSanDiegoCity.text(sanDiegoCity);
        $("#contact-info").append(addSanDiegoCity);
        var addSanDiegoName = $("<p>");
        addSanDiegoName.text(sanDiegoName);
        $("#contact-info").append(addSanDiegoName);
        var addSanDiegoAddress = $("<p>");
        addSanDiegoAddress.text("Address: " + sanDiegoAddress);
        $("#contact-info").append(addSanDiegoAddress);
        var addSanDiegoPostal = $("<p>");
        addSanDiegoPostal.text("Postal: " + sanDiegoPostal);
        $("#contact-info").append(addSanDiegoPostal);
        var addSanDiegoNumber = $("<p>");
        addSanDiegoNumber.text("Number: " + sanDiegoNumber);
        $("#contact-info").append(addSanDiegoNumber);

        //sacramento1 variables
        var sacramentoCity1 = (data[0].physical_address[0].city);
        var sacramentoName1 = (data[0].name);
        var sacramentoAddress1 = (data[0].physical_address[0].city);
        var sacramentoPostal1 = (data[0].physical_address[0].postal_code);
        var sacramentoNumber1 = (data[0].phones[0].number);
        //sacramento2 variables
        var sacramentoCity2 = (data[10].physical_address[0].city);
        var sacramentoName2 = (data[10].name);
        var sacramentoAddress2 = (data[10].physical_address[0].address_1);
        var sacramentoPostal2 = (data[10].physical_address[0].postal_code);
        var sacramentoNumber2 = (data[10].phones[0].number);

        //sacramento1 appending elements
        var addSacramentoCity1 = $("<p>");
        addSacramentoCity1.text(sacramentoCity1);
        $("#contact-info").append(addSacramentoCity1);
        var addSacramentoName1 = $("<p>");
        addSacramentoName1.text(sacramentoName1);
        $("#contact-info").append(addSacramentoName1);
        var addSacramentoAddress1 = $("<p>");
        addSacramentoAddress1.text("Address: " + sacramentoAddress1);
        $("#contact-info").append(addSacramentoAddress1);
        var addSacramentoPostal1 = $("<p>");
        addSacramentoPostal1.text("Postal: " + sacramentoPostal1);
        $("#contact-info").append(addSacramentoPostal1);
        var addSacramentoNumber1 = $("<p>");
        addSacramentoNumber1.text("Number: " + sacramentoNumber1);
        $("#contact-info").append(addSacramentoNumber1);
        //sacramento2 appending elements
        var addSacramentoCity2 = $("<p>");
        addSacramentoCity2.text(sacramentoCity2);
        $("#contact-info").append(addSacramentoCity2);
        var addSacramentoName2 = $("<p>");
        addSacramentoName2.text(sacramentoName2);
        $("#contact-info").append(addSacramentoName2);
        var addSacramentoAddress2 = $("<p>");
        addSacramentoAddress2.text("Address: " + sacramentoAddress2);
        $("#contact-info").append(addSacramentoAddress2);
        var addSacramentoPostal2 = $("<p>");
        addSacramentoPostal2.text("Postal: " + sacramentoPostal2);
        $("#contact-info").append(addSacramentoPostal2);
        var addSacramentoNumber2 = $("<p>");
        addSacramentoNumber2.text("Number: " + sacramentoNumber2);
        $("#contact-info").append(addSacramentoNumber2);

        //sanfrancisco1 variables
        var sanFranciscoCity1 = (data[1].physical_address[0].city);
        var sanFranciscoName1 = (data[1].name);
        var sanFranciscoAddress1 = (data[1].physical_address[0].address_1);
        var sanFranciscoPostal1 = (data[1].physical_address[0].postal_code);
        var sanFranciscoNumber1 = (data[1].phones[0].number);
        //sanfrancisco2 variables
        var sanFranciscoCity2 = (data[20].physical_address[0].city);
        var sanFranciscoName2 = (data[20].name);
        var sanFranciscoAddress2 = (data[20].physical_address[0].address_1);
        var sanFranciscoPostal2 = (data[20].physical_address[0].postal_code);
        var sanFranciscoNumber2 = (data[20].phones[0].number);
        //sanfrancisco3 variables
        var sanFranciscoCity3 = (data[38].physical_address[0].city);
        var sanFranciscoName3 = (data[38].name);
        var sanFranciscoAddress3 = (data[38].physical_address[0].address_1);
        var sanFranciscoPostal3 = (data[38].physical_address[0].postal_code);
        var sanFranciscoNumber3 = (data[38].phones[0].number);

        //sanfrancisco1 appending elements
        var addSanFranciscoCity1 = $("<p>");
        addSanFranciscoCity1.text(sanFranciscoCity1);
        $("#contact-info").append(addSanFranciscoCity1);
        var addSanFranciscoName1 = $("<p>");
        addSanFranciscoName1.text(sanFranciscoName1);
        $("#contact-info").append(addSanFranciscoName1);
        var addSanFranciscoNumber1 = $("<p>");
        addSanFranciscoNumber1.text("Number: " + sanFranciscoNumber1);
        $("#contact-info").append(addSanFranciscoNumber1);
        var addSanFranciscoAddress1 = $("<p>");
        addSanFranciscoAddress1.text("Address: " + sanFranciscoAddress1);
        $("#contact-info").append(addSanFranciscoAddress1);
        var addSanFranciscoPostal1 = $("<p>");
        addSanFranciscoPostal1.text("Postal: " + sanFranciscoPostal1);
        $("#contact-info").append(addSanFranciscoPostal1);
        var addSanFranciscoNumber1 = $("<p>");
        addSanFranciscoNumber1.text("Number: " + sanFranciscoNumber1);
        $("#contact-info").append(addSanFranciscoNumber1);
        //sanfrancisco2 appending elements
        var addSanFranciscoCity2 = $("<p>");
        addSanFranciscoCity2.text(sanFranciscoCity2);
        $("#contact-info").append(addSanFranciscoCity2);
        var addSanFranciscoName2 = $("<p>");
        addSanFranciscoName2.text(sanFranciscoName2);
        $("#contact-info").append(addSanFranciscoName2);
        var addSanFranciscoAddress2 = $("<p>");
        addSanFranciscoAddress2.text("Address: " + sanFranciscoAddress2);
        $("#contact-info").append(addSanFranciscoAddress2);
        var addSanFranciscoPostal2 = $("<p>");
        addSanFranciscoPostal2.text("Postal: " + sanFranciscoPostal2);
        $("#contact-info").append(addSanFranciscoPostal2);
        var addSanFranciscoNumber2 = $("<p>");
        addSanFranciscoNumber2.text("Number: " + sanFranciscoNumber2);
        $("#contact-info").append(addSanFranciscoNumber2);
        //sanfrancisco3 appending elements
        var addSanFranciscoCity3 = $("<p>");
        addSanFranciscoCity3.text(sanFranciscoCity3);
        $("#contact-info").append(addSanFranciscoCity3);
        var addSanFranciscoName3 = $("<p>");
        addSanFranciscoName3.text(sanFranciscoName3);
        $("#contact-info").append(addSanFranciscoName3);
        var addSanFranciscoAddress3 = $("<p>");
        addSanFranciscoAddress3.text("Address: " + sanFranciscoAddress3);
        $("#contact-info").append(addSanFranciscoAddress3);
        var addSanFranciscoPostal3 = $("<p>");
        addSanFranciscoPostal3.text("Postal: " + sanFranciscoPostal3);
        $("#contact-info").append(addSanFranciscoPostal3);
        var addSanFranciscoNumber3 = $("<p>");
        addSanFranciscoNumber3.text("Number: " + sanFranciscoNumber3);
        $("#contact-info").append(addSanFranciscoNumber3);

        //sanjose variables
        var sanJoseCity = (data[21].physical_address[0].city);
        var sanJoseName = (data[21].name);
        var sanJoseAddress = (data[21].physical_address[0].address_1);
        var sanJosePostal = (data[21].physical_address[0].postal_code);
        var sanJoseNumber = (data[21].phones[0].number);

        //sanjose appending elements
        var addSanJoseCity = $("<p>");
        addSanJoseCity.text(sanJoseCity);
        $("#contact-info").append(addSanJoseCity);
        var addSanJoseName = $("<p>");
        addSanJoseName.text(sanJoseName);
        $("#contact-info").append(addSanJoseName);
        var addSanJoseAddress = $("<p>");
        addSanJoseAddress.text("Address: " + sanJoseAddress);
        $("#contact-info").append(addSanJoseAddress);
        var addSanJosePostal = $("<p>");
        addSanJosePostal.text("Postal: " + sanJosePostal);
        $("#contact-info").append(addSanJosePostal);
        var addSanJoseNumber = $("<p>");
        addSanJoseNumber.text("Number: " + sanJoseNumber);
        $("#contact-info").append(addSanJoseNumber);

      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Error');
  });