// "use strict";
// console.log("hello friends");
// console.error("hello friends");
// console.warn("hello friends");
// console.info("hello friends");

// document.getElementById("sdet").innerHTML =5+6;


// document.write("hey everyone");

// // dont want this
// x= 10; //implicit 
// let y;// no assignment 
// console.log(typeof(y))
// const con =10;

// // con=12;


// let _name = null
// let NAME = "ghela";
// console.log(_name)
// console.log(typeof(_name))
// // console.log(_NAME)
// name =123;
// console.log(typeof(_name))
// name= true;
// console.log(typeof(_name))
// name =[1,2,3]

// //Number - 1234556
// //Boolean - true or false
// //String - "text"
// //Bigint - 23456786543456765434567
// //null - 
// //undefined - 
// //symbol - dont use!

// //Object

// console.log(typeof(_name))

// pie =3.14



// let myCar = "Audi";
// let myModel = "A5";
// console.log("my fav car is "+" "+myCar+" "+"and the model is"+" "+myModel);// why would you?
// console.log("my fav car is "+myCar+" and the model is "+myModel);//2
// console.log(`my fav car is ${myCar} and the model is ${myModel}`);//1
// // loops

// // let/const
// //for
// for(let i =0;i<=10;i++){
//     console.log(`here is my count ${i}`);
//     console.log("here is my number " +i +".")
// }

//while

let bool = true;
let num =0;
while(bool){
    console.log(`Hello ${num}`);
    num++

    if(num>10){
        bool =false;
    }
}
console.log("WE are done")

//do-while

let myNum =0;
let canIdrive =true;

// do{
//     myNum++;
//     console.log(myNum);

//     if(myNum>100){
//         canIdrive=false;
//     }

// }while(canIdrive)



//switch case 
let myday = 5;

switch (myday) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Weekend")
        case 6:
            console.log("Weekend")
        break;

    case 7:
        console.log("dam its sunday :'(");
        break;


    default:
        console.log("not an option -_-");
        break;
}

// ternary if - short hand 

let over18  = true;
//  if(over18){
//      console.log("you can drive");
//  }else{
//      console.log("you cant drive");
//  }
// let <variable name> = <condition>? <if true>: <if false>
 let x = !over18?console.log("you can drive"): console.log("you cant drive");
//  console.log(x);

// = - assignment
// == - checks if two things are the same regardless of its type
// === - check two things are the same and there types are the same

// console.log("1" == 1); //true or false ? t
// console.log(1==1); // true
// console.log(1 ==[1]);// true?

// console.log("1" === 1); //true or false ? t
// console.log(1===1); // true
// console.log(1 ===[1]);// true?

// console.log(1 !=[1]);// false
// console.log(1 !==[1]);// true
// console.log(1 !=2);// true



