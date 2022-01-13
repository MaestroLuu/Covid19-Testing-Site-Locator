// var apiUrlNews = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-cases&api-key=vULfp6mXKDYYuz3IoryCuILRxwbMZh4O";

// fetch(apiUrlNews)
//   .then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         console.log(data);
//         console.log(data.response.docs[0].headline.main);
        
//         for(i=0; i < data.length; i++){
//           console.log(data.response.docs[i].headline.main);

//         }
//         // console.log(data);
//         // console.log(data);
//         // console.log(data);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   })
//   .catch(function (error) {
//     alert('Error');
//   });
