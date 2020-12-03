console.log("hello")

// let name = prompt("What is your name?");
// setName(name)

function setName(input){
  //we create a new element
  let newName = document.createElement("h1")
  // newName.href =input
  // we set the text we want
  newName.innerText =input;
  //We say where we want to place it
  let nameDiv= document.querySelector("div#name");
  // we link where we want with the element we want to add
  nameDiv.appendChild(newName);
}

// e.g. 1
function displayDate() {
    document.querySelector("p#timeElement").innerHTML= Date();
  }

//   e.g 2
document.querySelector("p.myPara").innerHTML = "Does this make sense?"

//   e.g 3
function newElement(){
let para = document.createElement("div"); // Create a <p> element
para.innerText = "This is new and im using boostrap ";
para.className = "alert alert-success";
let myDiv = document.querySelector("div#watchThis");
myDiv.appendChild(para);
}

function boostrap(){
document.head.innerHTML= `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">`;
}

//   e.g 4
function newElementBoot(){
let para = document.createElement("div"); // Create a <p> element
para.className = "alert alert-danger col-md-8";
para.innerText = "This is new and im using boostrap ";
let myDiv = document.querySelector("div#watchThis");
myDiv.appendChild(para);
}


//   e.g 5
function changePara(){
document.querySelector("#p2").style.color = "blue";
document.querySelector("#p2").style.fontFamily = "Arial";
document.querySelector("#p2").style.fontSize = "72pt";
}

//   e.g 6
function changeBackground(){
  document.querySelector("some").style.color ="red"
}
//   e.g 7

function changeText(id) {
  id.innerHTML = "Ooops through a function!";
}
function mouseOver(id){
  id.innerHTML="STOP TOUCHING ME"
}


//   e.g 8 - close developer tools to make it work
document.querySelector("h1#mouseOver").addEventListener("mouseover", mouseOver);
document.querySelector("h1#mouseOver").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.querySelector("h1#mouseOver").style.color = "red";
}

function mouseOut() {
  document.querySelector("h1#mouseOver").style.color = "black";
}



function myFunction() {
  let txt;
  let r = confirm("ARE YOU REALLY GOING TO THIS TO ME?");
  if (r == true) {
    areYouSure()
  } else {
    alert("You my best friend")
  }
}

function areYouSure(){
  let txt;
  let r = confirm("I THOUGHT WE WERE FRIEND PLEASE RE THINK THIS");
  if (r == true) {
    elementBeGone()
  } else {
    alert("i knew you were joking ");
  }
}

function elementBeGone(){
  document.querySelector("h1#hereIGo").style.display ="none"
}

//visability : none  - hide the element but keeps the space
// display:none  removes the element




//this works for a post methods
// document
//   .querySelector("form.empForm")
//   .addEventListener("submit", function (stop) {
//     stop.preventDefault();
//     let x = document.querySelector("form.empForm").elements;
//     let employeeID = x["empId"].value;
//     let employeeName = x["empName"].value;
//     let employeeAddress = x["empAddress"].value;
//     let password = x["test"].value

//     console.log("EmpID: ", employeeID);
//     console.log("EmpName: ", employeeName);
//     console.log("EmpAddress: ", employeeAddress);
//     console.log("password: ", password);
    
//   });


  // what about for a  get method?