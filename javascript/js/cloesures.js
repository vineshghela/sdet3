//  Closures have access to outer function's variables even after the outer function returns

function celebrityName(firstName) {
    let nameIntro = "Celebrity is ";
    // Inner function has access to outer function's variables, including parameters
    function lastName(surname) {
      return `${nameIntro} ${firstName} ${surname}`;
    }
  
    return lastName;
  }
  
  
  let mjName = celebrityName("Michael"); // celebrityName outer function has returned
  
  console.log("1 "+mjName);
  
  // Closure (lastName) is called after outer function has returned
  // Yet, closure still has access to outer function's vars and params
  let mjNameFull = mjName("Jackson");
  
  console.log("2 "+mjNameFull); // Celebrity is Michael Jackson


//   function celebrityID() {
//     let celebrityID = 999;
//     return {
//       getID: function () {
//         return celebrityID;//999
//       },
//       setID: function (newID) {
//         celebrityID = newID;
//       },
//     };
//   }
  
//   let mjID = celebrityID();
//   //celebrityID.getID()
//   let returnedID = mjID.getID();
//   console.log(`The initial value of getID() is ${returnedID}`); // 999
//   mjID.setID(567);
//   returnedID = mjID.getID();
//   console.log(`The value of getID now is ${returnedID}`); // 567

function hello(){
  console.log("hey guys");
}
    function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name);
      hello(); // use variable declared in the parent function
    }
     displayName();
  }
  init();
  