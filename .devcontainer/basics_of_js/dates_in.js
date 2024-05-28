//  Dates in javascript

// let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)
//  date is basically an object

let myCreatedDate = new Date(2024,0,12)
// let myCreatedDate = new Date(2024,0,12,2)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())
//  In javascript month starts from zero

let myTimestamp = Date.now()
console.log(myTimestamp)
console.log(myCreatedDate.getTime()) // It prints the value in mili seconds 
console.log(myCreatedDate.getTime()) 

let newDate = new Date()
console.log(newDate.getHours())

