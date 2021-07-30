
//////////////////PROBLEM 1////////////////////
/*
  Create an object called 'me' that has the following keys: 
    firstName, state, age, and greeter. 
  The value of the firstName key should be your name as a string. 
  The value of the property state should be your current state or providence of
  residence as a string. 
  The value of age should be your age as a number. 
  
  Last, greeter should be a method that returns the string 
  'Hello! My name is NAMEVALUE and I live in STATEVALUE' 
  with the corresponding values.
  For example: 'Hello! My name is Rubber Duck and I live in Utah"
*/

class Me {
  constructor(firstName, state, age) {
    this.firstName = firstName;
    this.state = state;
    this.age = age;
  }
  greeter() {
    console.log(`Hello! My name is`, this.firstName, `and I live in`, this.state)
  }
}

let clint = new Me(`Clint`, `Utah`, 35)
console.log(clint)

// let me = {
//   firstName: `Clint`,
//   state: `Utah`,
//   age: 35,
//   // greeter: function() {
//   //   return `Hello! My name is ${this.firstName} and I live in ${this.state}`
//   // }
//   greeter() {
//     console.log(`Hello! My name is ${this.firstName} and I live in ${this.state}`)
//   }
// }

// console.log(me)

//////////////////ADDED IN REVIEW///////////////////////
const me = {
  firstName: `Clint`,
  state: `Utah`,
  age: 35,
  greeter: function() {
    return `Hello! my name is ${this.firstName} and I live in ${this.state}`
  }
}
console.log(me.greeter())


//////////////////PROBLEM 2////////////////////
/*
  Write a function called carFactory that takes in three parameters: a make, model, and year.  
  When the function is invoked:
    - a string will be sent in for make
    - a string will be sent in for model
    - a number will be sent in for year
  Inside the function, create an object from those parameters.
  Next, write an if statement that will check if the year sent in is greater than 2018.
    - if the year is greater than 2018, add a key to the object called isNew and set it to true
    - else, add a key to the object called isNew and set it to false
      - hint: you can use dot notation or bracket notation
  Last, the function should return the object
  For example,
    carFactory('toyota', 'camry', 2020)
  should return an object that looks like this:
  {
    make: 'toyota', 
    model: 'camry',
    year: 2020,
    isNew: true
  }
*/

class carFactory {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
  
}

let newCar = new carFactory(`Nissan`, `Altima`, 2005)
console.log(newCar)


//////////////////ADDED IN REVIEW///////////////////////

const carFactory = (make, model,year) => {
  let car = {
    make,
    model,
    year
  }

  if(car.year > 2018) {
    car.isNew = true
  } else {
    car.isNew = false
  }

  return car
}

console.log(carFactory(`Toyota`, `Camry`, 2020))