// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Devraj",
    "full name": "Devraj Choudhary",
    [mySym]: "mykey1",
    age: 20,
    location: "Saharanpur",
    email: "Dev@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Dev45@google.com"
// Object.freeze(JsUser)
JsUser.email = "Dev@Google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());