    // //we create a new promise
    // let newProm = new Promise((res,rej)=>{
    //     let a = 1+1;
    //     if (a==2){
    //         //we say what happens in the success outcome
    //         res("Success");
    //     }else{
    //         //we say what happens in the reject outcome
    //         rej("oh nooo");
    //     }
    // })



    // //we then pass the value from resolve or reject and we set it to message.
    // //.then() is executed if Fulfilled/successful.
    // newProm.then((message)=>{
    //     console.log(`This is in the then block and the status is: ${message}`);
    //     //.catch() is executed if rejected/failed.
    // }).catch((message)=>{
    //     console.log(`This is in the catch block and the status is: ${message}`);
    // //.then can be chained and will execute regardless of the outcome.
    // }).then(()=>{
    //     console.log("I will take place regardless of what happened before.");
    // })


    // function abc(name,age) {
    //     //Creates an alert(pop-up box) which says hello and appends the value of name.
    //     let newAge = parseInt(age)
    //     alert('Hello ' + name+"You are "+ newAge);
    //   }
      
    //   function processUserInput(bundleOfSticks) {
    //   //A simple user input box appears on the browser that take a value and assigns it to name
    //     var name = prompt('Please enter your name.');
    //     var age = prompt('Please enter your age.');
    //     // we then pass the `name` variable to the callback function which will be passed to greeting.
    //     bundleOfSticks(name,age);
    //     console.log("here i am ")
    //   }
    //   //Call the function `processUserInput( )` and in the brackets we pass the function `greeting`.
    //   processUserInput(abc);


    //   console.log("apples");

//cookies

// // key = value
// document.cookie = "userName = Donald tramp;expires=Thu, 18 Dec 2021 12:00:00 UTC";


// let myCookie = document.cookie
// console.log(myCookie);

// function a(){
//     return a+100;
// }

// (a) => {
//     return a+100;
// }

// (a) => a+100;

// a => a+100;


let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));


let classRoomAverage = average(grades);
let boysAverage = average(getBoys(grades));
let girlsAverage = average(getGirls(grades));
console.log(boysAverage);