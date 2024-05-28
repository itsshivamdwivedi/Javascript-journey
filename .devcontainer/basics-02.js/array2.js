const marvel_heroes = [ "thor", "ironman", "superman"]
const dc_heroes = ["superman", "flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])
// all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

const all_newheroes = [...marvel_heroes,...dc_heroes]
console.log(all_newheroes)
