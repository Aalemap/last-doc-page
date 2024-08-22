//equality operators

let a = 67
let b = 67

if(a === b){
    console.log("Same values");
}

else{
    console.log("Different values");
}

//unary operators
let year = "1967"
console.log(++year);

// working with all th operators
// Question
//example

let age = 15;
if (age >= 18 ) {
    console.log("You are an adult.")
}
else if (age >= 13) {
    console.log ("You are a teenager");
}
else{
    console.log("You are a child");
}

//write a progamme to find the maximum of three numbers
let num1 = 40, num2 = 80, num3 = 20;

if (num1 > num2 && num2 > num3) {
    console.log("number 1 is the highest value");
}

else if(num2 > num3 && num2 > num1) {
    console.log("number 2 is the highest number");
}

else if( num3 > num1 && num3 > num2) {
    console.log("number 3 is the highest number");
}

else{
    console.log("All the numbers are equal");
}

// write a programme to find the following scores in a tertiary education
// if a student got between 75-100 print out >> FIRST CLASS
// if a student got between 65-74 print out >> SECOND CLASS UPPER
// if a student got between 50-64 print out >> SECOND CLASS LOWER
// if a student got between 41-49 print out >> THIRD CLASS
// if a student got between 30-40 print out >> PASS
// ELSE FAIL

//solution



let scores = 20;

if (scores >= 75 && scores >= 100) {
    console.log("FIRST CLASS UPPER");
}

else if (scores >= 65 && scores <= 74) {
    console.log("SECOND CLASS UPPER");
}

else if ( scores >= 50 && scores <= 64) {
    console.log("SECOND CLASS LOWER");
}

else if (scores >= 41 && scores <= 49) {
    console.log("THIRD CLASS");
}

else if (scores >= 30 && scores <= 40){
    console.log("PASS");
}

else {
    console.log("FAIL... carryover the course");
}


