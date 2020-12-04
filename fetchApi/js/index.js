fetch('https://petstore.swagger.io/v2/pet/1')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data) 

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


  fetch('https://petstore.swagger.io/v2/store/inventory')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log("invv",data) 

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
