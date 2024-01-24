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
const user=loginUserMessage("Devraj");
console.log(user);