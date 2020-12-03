let myArr = Array("fanta","coke","pepsi","sprite","water");
console.log(typeof(myArr));
console.log(myArr);

console.log();
console.log(myArr.length); //number of elements in the array
console.log(myArr.sort());
console.log(myArr.reverse());
console.log(myArr.push("Tango"));
console.log(myArr);
console.log(myArr.pop());
console.log(myArr);
console.log(myArr.unshift("juice"));
console.log(myArr);
console.log(myArr.shift());
console.log(myArr.shift());
console.log(myArr.shift());
console.log(myArr.shift());
console.log(myArr);
console.log();

let myShortArray =[1,2,3,4,5,66,7,8,9]

console.log(myShortArray[0]);

// for(let x = 0;x<myShortArray.length;x++){
//     console.log(myShortArray[x]);
// }

for(val of myShortArray){
    console.log(val);
}
for(val in myShortArray){
    console.log(val);
}

// object - everything in js is a object


// let todo = new Object();
// todo["userId"]=1
// todo["id"]=1
// todo["title"]="sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// todo["body"]="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

// console.log(todo);
// console.log(todo.title);
// console.log(todo.body);


// let vinsCar = new Object();
// vinsCar["Make"] = "Audi";
// vinsCar["Model"] = "S5";
// vinsCar["Reg"] = "W8M8"

// vinsCar.noOfDoors =2;

// console.log(vinsCar);

// let QAcar ={"make":"Honda","model":"accord","reg":"Some plate"};
// console.log(QAcar)

// // console.log(vinsCar);

let carPark =
{mycarpark:[
    {id:"1",day:"Wednesday"},
    {Make:"merc",Model:"a45", Reg:"1234"},
    
]
};

console.log(carPark.mycarpark[0]);
console.log(carPark.mycarpark[1]);
console.log(carPark.mycarpark[2]);


for(let i =0;i<carPark.mycarpark.length;i++){
//    alert(carPark.mycarpark[i]);
   
}


//     let abc ={
//         "make":"Honda",
//         "model":"accord",
//         "reg":"Some",
//         "more":{
//             "doors":true,
//             noOfDoors:2
//         }
//     }


// console.log(abc.make);
// console.log(abc.more.noOfDoors);



// for(let i =0; i<carPark.length;i++){ // get each different object
//     console.log("next"+carPark[i]);
//     for(let a in carPark[i]){ // goes inside of each object and prints the values 
//         console.log(`${carPark[i][a]}`)
//     }
// }

// console.log("1"+carPark[0].make)
// console.log("2"+carPark[0].model)
// console.log("3"+carPark[0].reg)
// // console.log(carPark[1])
// // console.log(carPark[2])


let myJSONObject = {
    "searchResults": [
        {
            "productName": "Aniseed Syrup",
            "unitPrice": 10
        },
        {
            "productName": "Alice Mutton",
            "unitPrice": 39
        }
    ]
};

//The parse method takes a string and parses it into JavaScript objects
let obj = JSON.parse('{"name":"Adrian"}');
console.log(obj.name); //returns Adrian
console.log(obj); //returns Adrian
//The stringify method takes JavaScript objects and returns a string
let str = JSON.stringify({ name: "John" });
console.log(str)



//Animal 

// let speed = 3300;
// let noOflegs =4;
// let fly =true

// let myAnimal ={
//     speed,
//     noOflegs,
//     fly,
//     Run(){
//         this.speed = this.noOflegs*speed
//     },
//     fly(){console.log("I can fly")}

// }
// console.log(myAnimal.speed);
// console.log(myAnimal.Run());// correct
// console.log(myAnimal.speed);
// myAnimal.fly();


// let darthVader = {
//     allegiance: "Empire",
//     weapon: "lightsaber",
//     sith: true
//     };


//     console.log(darthVader);


