// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }
//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data) 

//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });


  // fetch('https://petstore.swagger.io/v2/store/inventory')
  // .then(
  //   function(response) {
  //     if (response.status !== 200) {
  //       console.log('Looks like there was a problem. Status Code: ' +
  //         response.status);
  //       return;
  //     }
  //     // Examine the text in the response
  //     response.json().then(function(data) {
  //       console.log("invv",data) 

  //     });
  //   }
  // )
  // .catch(function(err) {
  //   console.log('Fetch Error :-S', err);
  // });

  data={
    "make":"Honda",
    "model":"accord",
    "doors":5,
    "colour":"yellow"
}

  fetch("http://localhost:9092/car/create", {
    method: 'put',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body:JSON.stringify(data)
  })
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });