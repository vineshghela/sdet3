
    document
    .querySelector("form.viewRecord")
    .addEventListener("submit", function (stop) {
      stop.preventDefault();
      let formElements = document.querySelector("form.viewRecord").elements;
      console.log(formElements)
      let postid=formElements["commentPostId"].value;
      let id =formElements["commentId"].value;
      let name=formElements["commentName"].value;
      let email =formElements["commentEmail"].value;
      let body =formElements["commentBody"].value;
  
      let data = {
        "name":"Vinesh",
        "make":name,
        "model":email,
        "doors":body,
        "colour":"Red",
        "garage":{
            "id":2
        }


    }
    console.log("Data to post",data)
    sendData(data)
  
      // postData(noteTitle,noteBody)
    });


function sendData(data){
    fetch("http://localhost:9092/car/create", {
        method: 'post',
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
    }