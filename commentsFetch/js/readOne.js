
// we set a constant to find the values from the search bar
const params = new URLSearchParams(window.location.search);

for(let param of params ){
    console.log("here i am",param)
    let id = param[1];
    console.log(id);
    getData(id)
}

function getData(id){
    fetch('http://jsonplaceholder.typicode.com/comments/'+id)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          // Examine the text in the response
          response.json().then(function(data) {
             console.log("MY DATA OBJ",data)

             document.querySelector("input#commentPostId").value = data.postId
             document.querySelector("input#commentId").value = data.id
             document.querySelector("input#commentName").value = data.name
             document.querySelector("input#commentEmail").value = data.email
             document.querySelector("textarea#commentBody").value = data.body
    
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    }


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
        "postId":postid,
        "id":id,
        "name":name,
        "email":email,
        "body":body
    }
    console.log("Data to post",data)

    // postData(noteTitle,noteBody)
  });
