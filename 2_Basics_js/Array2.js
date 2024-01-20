const Arr1 = [1,2,3,4,5]
const Arr2 = [3,5,1,7,8]

//Arr1.push(Arr2)

// console.log(Arr2);
// console.log(Arr1[3][1]);

// const Arr3 = Arrr1.concat(dc_heros)
// console.log(Arr3);

const all_Arr = [...Arr1, ...Arr2]

// console.log(all_Arr);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Devraj"))
console.log(Array.from("Devraj"))
console.log(Array.from({name: "Dev"})) // important for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));