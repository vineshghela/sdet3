

// let num1 = prompt("First number please")
// let num2 = prompt("Second number please")

// let func = letsAdd(num1,num2)
 
// function letsAdd(a,b){
//     let inta = parseInt(a);
//     let intb = parseInt(b);
//     return inta+intb;
// }

// console.log(func)


function test (a,b){
    return a+b;
}
debugger

let myString = `the sum of 10+12 is ${test(10,12)}`

console.log(myString)


// function expressions


// hi()
// function hi(){
//     alert("hello")
// }

// welcome()
// let welcome = function(){
//     alert("good bye")
// }


// console.log(hi());

// arrowFunctions

// hello =(name) =>{
//     return "Hey "+name
// }

// console.log(hello("james"))


// greeting =() => "hellooooooo world!"
greeting =(name,age, gender ) => "hellooooooo" + name + "i am" + age+ "and i am a:" +gender

console.log(greeting("james",16,"male"));


// functions - global scope 

// arrow functions and function expressions has a local scope 

function submit() {
    let x = "foo";
    if (x == "foo") {
      let y = "boo";
    }
    console.log(x); // 'foo'
    console.log(y); // 'Reference error'
  }
  submit();









