var apiUrlLocation = "https://covid-19-testing.github.io/locations/california/complete.json";
// var sanDiego = (data[2].physical_address[0].city);
// console.log(sanDiego);
// var sacramento1 = (data[0].physical_address[0].city);
// console.log(sacramento1);
// var sacramento2 = (data[10].physical_address[0].city);
// console.log(sacramento2);
// var sanFrancisco1 = (data[1].physical_address[0].city);
// console.log(sanFrancisco1);
// var sanFrancisco2 = (data[20].physical_address[0].city);
// console.log(sanFrancisco2);
// var sanFrancisco3 = (data[38].physical_address[0].city);
// console.log(sanFrancisco3);
// var sanJose = (data[21].physical_address[0].city);
// console.log(sanJose);

// var sanDiego = (data[2].physical_address[0].address_1);
// console.log(sanDiego);
// var sacramento1 = (data[0].physical_address[0].address_1);
// console.log(sacramento1);
// var sacramento2 = (data[10].physical_address[0].address_1);
// console.log(sacramento2);
// var sanFrancisco1 = (data[1].physical_address[0].address_1);
// console.log(sanFrancisco1);
// var sanFrancisco2 = (data[20].physical_address[0].address_1);
// console.log(sanFrancisco2);
// var sanFrancisco3 = (data[38].physical_address[0].address_1);
// console.log(sanFrancisco3);
// var sanJose = (data[21].physical_address[0].address_1);
// console.log(sanJose);

// var sanDiego = (data[2].physical_address[0].postal_code);
// console.log(sanDiego);
// var sacramento1 = (data[0].physical_address[0].postal_code);
// console.log(sacramento1);
// var sacramento2 = (data[10].physical_address[0].postal_code);
// console.log(sacramento2);
// var sanFrancisco1 = (data[1].physical_address[0].postal_code);
// console.log(sanFrancisco1);
// var sanFrancisco2 = (data[20].physical_address[0].postal_code);
// console.log(sanFrancisco2);
// var sanFrancisco3 = (data[38].physical_address[0].postal_code);
// console.log(sanFrancisco3);
// var sanJose = (data[21].physical_address[0].postal_code);
// console.log(sanJose);

// array[2] san diego
// array[0,10] sacramento
//array[1,20,38] san rancisco
//array[21] san jose
fetch(apiUrlLocation)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {

        for(i=0; i < data.length; i++){
          //console.log(data[i]);
          console.log(data[i].physical_address[0]);    
        }
        var sanDiego = (data[2].physical_address[0].postal_code);
console.log(sanDiego);
var sacramento1 = (data[0].physical_address[0].postal_code);
console.log(sacramento1);
var sacramento2 = (data[10].physical_address[0].postal_code);
console.log(sacramento2);
var sanFrancisco1 = (data[1].physical_address[0].postal_code);
console.log(sanFrancisco1);
var sanFrancisco2 = (data[20].physical_address[0].postal_code);
console.log(sanFrancisco2);
var sanFrancisco3 = (data[38].physical_address[0].postal_code);
console.log(sanFrancisco3);
var sanJose = (data[21].physical_address[0].postal_code);
console.log(sanJose);
        
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Error');
  });


// var sanDiego = (data[2].physical_address[0].postal_code);
// console.log(sanDiego);
// var sacramento1 = (data[0].physical_address[0].postal_code);
// console.log(sacramento1);
// var sacramento2 = (data[10].physical_address[0].postal_code);
// console.log(sacramento2);
// var sanFrancisco1 = (data[1].physical_address[0].postal_code);
// console.log(sanFrancisco1);
// var sanFrancisco2 = (data[20].physical_address[0].postal_code);
// console.log(sanFrancisco2);
// var sanFrancisco3 = (data[38].physical_address[0].postal_code);
// console.log(sanFrancisco3);
// var sanJose = (data[21].physical_address[0].postal_code);
// console.log(sanJose);