// class food{
//     constructor(name,price,bool){
//         this._name = name;
//         this._price = price;
//         this._bool = bool;
//     }

//     icing(){
//         if(this._bool ){
//             console.log("this cake has icing");
//         }else{
//             console.log("this cake does not have icing");
//         }
//     }
// }

// class dessert extends food{
//     constructor(name,price,bool, ishot,sweet){
//         super(name,price,bool);
//         this._ishot = ishot;
//         this._sweet = sweet

//     }
//     checkIfDessert(){
//         if(this._sweet){
//             console.log(`my ${this._name} is £ ${this._price} it does not have ${this._bool} it is ${this._sweet}`)
//         }
//     }

// }

// let pizza = new food("pizza", 1, false);

// let cake = new food("coconut cake", 2, true);

// cake.icing();
// pizza.icing();


// let cheeseCake = new dessert("Raspberry Cheese Cake",2,false,false,true)

// cheeseCake.checkIfDessert();


class Pet {
    constructor(name) {
      this._name = name;
      this._eaten = false;
    }
    hungry() {
     // 
      if (!this._eaten) {
        console.log(`${this._name} is hungry`);
      } else {
        console.log(`${this._name} has eaten!`);
      }
    }
    eating() {
      console.log(`${this._name} is eating!`);
      this._eaten = true;
    }
  
    speak() {
      console.log(`${this._name} says hello`);
    }
  }
  
  let pup = new Pet("Pup-eroni");
  pup.hungry(); // Pup-eroni is hungry
  pup.eating(); // Pup-eroni is eating
  pup.speak(); // Pup-eroni says hello
  pup.hungry(); // Pup-eroni has eaten!