// alert("hello")


function drawEl(){
let para = document.createElement("div"); // Create a <p> element
para.innerText = "This is new and im using boostrap ";
para.className = "alert alert-success";
let myDiv = document.querySelector("div#watchThis");
myDiv.appendChild(para);
}



// drawEl()
// drawEl()
// drawEl()
// // alert("still going")
// drawEl()

// let x = prompt("Give me a value between 1-100");

// getOneRec(x)

// the url we want
function getData(){
fetch('http://jsonplaceholder.typicode.com/posts/')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
          createPara(data);

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
function createPara(data){
    for (let i =0; i<data.length;i++) {
    let para = document.createElement("P"); // Create a <p> element
    para.className ="alert alert-danger";
    para.innerText = `
    ${(document.querySelector("#resp").innerHTML = data[i].id)}
    ${(document.querySelector("#resp").innerHTML = data[i].title)}
    ${(document.querySelector("#resp").innerHTML = data[i].body)}
    ${(document.querySelector("#resp").innerHTML = data[i].userId)}`
  let myDiv = document.getElementById("myDiv");
    myDiv.appendChild(para);
    }
}



// function getData(){
// fetch('http://jsonplaceholder.typicode.com/posts/')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//         // for(let a of data){
//         //     console.log(a)
//         //     for (let b in a){
//         //         console.log("b", a[b])
//         //     }
            
//         // }
//         let table = document.querySelector("#tbl");
//         let data2 = Object.keys(data[0]);

//         createTableHead(table,data2)
//         createTableBody(table,data)

//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });
// }

// function createTableHead(table,data){
//     let tableHead = table.createTHead();
//     let row = tableHead.insertRow();
//     for(let val of data){
//         let th = document.createElement("th");
//         let text = document.createTextNode(val);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// }

// function createTableBody (table,data){
//     for(let record of data){
//         let row = table.insertRow();
//         for(let prop in record){
//             let cell = row.insertCell();
//             let text = document.createTextNode(record[prop])
//             cell.appendChild(text);
//         }
//     }
// }


let bar = "Vinesh"





// document
//   .querySelector("form.empForm")
//   .addEventListener("submit", function (stop) {
//     stop.preventDefault();
//     let x = document.querySelector("form.empForm").elements;
//     let noteId = x["noteId"].value;
//     let noteTitle = x["noteTitle"].value;
//     let noteBody = x["noteBody"].value;
//     console.log("noteId: ", noteId);
//     console.log("noteTitle: ", noteTitle);
//     console.log("noteTitle: ", noteBody);

//     postData(noteTitle,noteBody)
//   });

// //   let data ={
// //     "title":noteTitle,
// //     "body":noteBody
// // }

// function postData( title,body){
// fetch('http://jsonplaceholder.typicode.com/posts', {
//     method: 'post', //post, put,delete
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     },
//     body:{
//         "title":title,
//         "body": body
//     }
//   })
//   .then(function (data) {
//     console.log('Request succeeded with JSON response', data);


//   })
//   .catch(function (error) {
//     console.log('Request failed', error);
//   })

// }