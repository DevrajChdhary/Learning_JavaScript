//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)// error because call before initialization
const addTwo = function(num){
    return num + 2
}