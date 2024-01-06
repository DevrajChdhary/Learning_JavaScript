//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.56

const isLoggedIn = true;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345654357n



// Reference (Non primitive)

// 1.Array
// 2.Objects
// 3.Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Dev",
    age: 21,
}

const myFunction = function(){
    console.log("Hello Dev");
}
console.log(typeof anotherId);
