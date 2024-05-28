const marvel_heroes = ["thor", "ironman", "superman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])
// all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

// const all_newheroes = [...marvel_heroes,...dc_heroes]
// console.log(all_newheroes)
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9], 10, [2, 3, 5]];
// If we are having multiple arrays in an array then we use flat method of array to make all the array in an single array
const real_another_array = another_array.flat(Infinity);
// flat method basically Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);



// to get the extracted data in an array we use this method 
console.log(Array.isArray("shivam"))
// console.log(Array.from({name:"shivam"}))
let score1 = 100
let score2 = 200
let score3 = 300
