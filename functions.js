
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

function sum(num1, num2){
  return num1 + num2
}
console.log(sum(2, 3))

//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

function greaterThanFive(number) {
  if(number > 5) {
    return true
  } else {
    return false
  }
}
let numberCheck = greaterThanFive(7)
console.log(numberCheck)

// const greaterThanFive = function (number) {
//   if(number > 5){
//     return true
//   } 
//   return false
// }
// console.log(greaterThanFive(23))


//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

function findZWords(word) {
  if(word.startsWith(`z`) === true) {
    console.log(`The name begins with Z`)
  } else {
    console.log(`The name does not begin with Z`)
  }
}
findZWords(`zathura`)

//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

function iLove(name, love){
  return `${name} loves ${love}`
}

console.log(iLove(`Joseph`, `music`))

// ADDED IN REVIEW
// const iLove = (name, love) => {
//   return `${name} loves ${love}`
// }
// console.log(iLove(`Joseph`, `music`))