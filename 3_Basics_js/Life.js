function chai(){
    console.log("Hello My name is Choudhary");
}
chai();

(function One(name){ //named IIFE
    console.log(`Hello I am ${name}`);
})('Dev');

(()=>{
    //unnamed IIFE
    console.log("Hello my name is Arrow Function::");
})()