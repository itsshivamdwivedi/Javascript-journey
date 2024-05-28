//  primitive datatypes 
// the primitive datatypes are always call by value 
// 7 categories : String , Number, boolean , Null  , Undefined, Symbol, BIgInt
const score = 100
const ScoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

const id = Symbol('1,2,3')
const anotherid = Symbol('1,2,3')
console.log(id == anotherid)
// Even if there is same content symbol treat each variable value as different

//  Non primitive or Reference datatype 
//  Arrays , Objects , Functions 
// arrays are always written in square brackets in javscript
const heroes = ["x", "y","z","a"]

// Objects are written in curly braces in javascript
// let myObject ={
//  name :"shivam",
//   age :22,
// }
//  This is how function is declared 
const myFunction = function(){
    console.log("hello world")
}
