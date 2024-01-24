// function Myname(){
//     console.log("Devraj Choudhary");
// }

// Myname();

function AddNum(number1 , number2){
    return number1+number2;
}
let a=AddNum(6.77,8.99);
console.log(a);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
const user1=loginUserMessage("Devraj");
console.log(user);
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Devraj Choudhary",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const MyArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(MyArray));
console.log(returnSecondValue([200, 400, 500, 1000]));