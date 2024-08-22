//an array is an object that stores multiple values on a single variable

//An Array is a object that stores multiple values on a single variable.

//  let arrayNames = ["maathematics", "Physics", "physics", "computer"];
//  document.write (arrayNames[1]);

// let femaleNames = []
// //this is another way of declaing an array
// femaleNames[0] = ["sarah"]
// femaleNames[1] = ["Favour"]
// femaleNames[2] = ["Blessing"]
// femaleNames[3] = ["Adaeze"]

// document.write (femaleNames[2])

//Object Arrays
//encapsulation
// Aggregation
// Inheritance
// Polymorphism
//To declare an object array

// let person = new Array();

// person.name = "Confidence";
// person.age ="23";

// document.write(person.name, person.age);

// Number

// let num1 = 8.3;
// let num2 = Math.round (num1);
// document.write(num2);

// let value = Math.floor(Math.random()* 80); //this will print out random numbers within the range of 80 while removing the decimals

// document.write(value);

//Destructuring Arrays 

// let animalNames = [" goat", " rat", " dog", " chicken"];
// let [animal1, animal2, animal3, animal4] =animalNames;

// document.write(animal2, animal1,  animal4,  animal3);

// let carNames =[" lexus", " Mercedes", " Toyota", " Ford"];
// let [car1, ...remainingCars] = carNames;

// document.write(car1, ...remainingCars);

//Objects

//let person = new Object();
// person.name = "Bola";
// person.age = 29;
 
// document.write(person.age);

// // another way to declare object arrays
// let person = {
//     name: "Bola",
//     age: 29,
//     state:  "Imo state",
//     grade: 40, 
// }
//  document.write(person.state);

//Destructuring of an object

// let car = {
//     id: 5000,
//     style: "convertible",
// }
// document.write(car.id);

// let {id,style} = car;
//  console.log(id,style);

 //Second Example

//  let car = { 
//     id: 5000,
//     style: "convertible",
//  };

//  let id, style;
//  ({id, style} = car);

//  document.write(id, style);


// for (let i=0; i<5; i++){
//     if (i===3)
//     break; //continue will  allow the loop to run until 4 but will eliminnate 3 while break will discontinue the loop from 3
// console.log(i);
// }

// let message = 'outside';
// if ( 5 === 5){
//     let message = 'Equal';
//     console.log(message);
// }

// console.log(message);

//IIFE - Immediately Invoked Function Expression

//  let app = (function() {
//     let carId = 123;
//     console.log('in-function');
//     return{};
// })();
// console.log(app);
                        
// //toUpperCase
// let country = "nigeria";

// console.log(country.toUpperCase());


// //Arrow Functions

// let getId = (prefix, suffix) =>{
//    return prefix + 123 + suffix;
// }

// console.log('ID:', '!!');

// //Default Parameter

// let trackcar = function (carId, city = 'NY') {
//    console.log('Tracking', carId, 'in', city);

// };
// console.log(trackcar(123));

// console.log(trackcar(123, 'chicago'));


