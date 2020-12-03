// const myArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];


// console.log(myArray);

// const [x,,,,,,y,,z,...rest] = myArray;

// console.log(x);//1
// console.log(y);//3
// console.log(z);//5
// console.log(rest);//6,7,8,9......

// let car ={
//     "make":"Bmw",
//     "model":"M5",
//     "reg":"W8M8",
//     "engine":4.5,
//     "bhp":550,
//     "noDoors":5
// }
// let {make,model,reg, color="Blue",...rest} = car;


// console.log(`my car brand is ${make} the model is ${model} the reg is ${reg} and the color is ${color}`)

// let rgb = [,10,5];

// let [red=255, green, blue = 255] = rgb;
// console.log(`R: ${red}, G: ${green}, B: ${blue}`)
// console.log("R: "+red+", G: "+green+", B: "+ blue)



// let red = 100;
// let green = 200;
// let blue = 50;
// const rgb = [200, 255, 100];

// [a,b,c] = rgb;
// console.log(`R: ${a}, G: ${b}, B: ${c}`);
// //output: R: 200, G: 255, B: 50


// // object
// const student = {
//     name:"john doe",
//     age:16,
//     marks:{
//         maths:75,
//         english:40,
//         science: 60,
//         car:{
//             make:"Bmw",
//             model:"M5",
//         }
//     }
// };

// console.log(student.marks.english)
// //destructuring
// let {name,age, marks:{maths,english,science, IT=100, car:{make,model}}} = student
// console.log(`my name is ${name} and my marks are the following for maths, english and science ${maths},${english},${science} oh and in IT i got ${IT}`);
// console.log(make , model)

// let user = {
//     name1: "John",
//     years: 30
//     };
    
//     let {name1, years: age1, isAdmin = false} = user;
    
//     alert( name1 ); // John
//     alert( age1 ); // 30
//     alert( isAdmin ); // false

let power = 200;
n = 0;
let myCar = {
    power,
    "prop_": ++n
};
let myCar2 = {
    power,
    "prop_": ++n
};
let myCar3 = {
    power,
    "prop_": ++n
};

console.log(myCar.prop_);

console.log(myCar2.prop_);

