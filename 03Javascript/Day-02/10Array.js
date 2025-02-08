const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// [ 'Thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// Array inside array
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, 13]]];
const usable_another_array = another_array.flat(Infinity);
// console.log(usable_another_array);


const username = "Abhishek";
const isnameArray = Array.isArray(username);
const strToArray = Array.from(username);
// console.log(isnameArray);
// console.log(strToArray);


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));






