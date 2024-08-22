// THE ELIGIBILITY CALCULATOR

let yourName = prompt("What is your name?");
let theirName = prompt("What is the name of your partner?");

let eligibilityScore = Math.floor(Math.random() * 100);

//alert("The eligibility of " + yourName + " and " + theirName + " getting married = " + eligibilityScore + "%");

if(eligibilityScore <= 30){
    alert("The eligibility of " + yourName + " and " + theirName + " getting married = " + eligibilityScore + "%  - Please dont waste your time in this relationship!");
}

else if(eligibilityScore > 30 && eligibilityScore <= 50){
    alert("The eligibility of " + yourName + " and " + theirName + " getting married = " + eligibilityScore + "% - You should work on your relationship!");

}

else if(eligibilityScore > 50 && eligibilityScore <= 70){
    alert("The eligibility of " + yourName + " and " + theirName + " getting married = " + eligibilityScore + "% - You can get married! ");
}

else if(eligibilityScore > 70 && eligibilityScore <= 80){
    alert("The eligibility of " + yourName + " and " + theirName + " getting married = " + eligibilityScore + "% - Wow!I is a perfect match for marriage!");
}

else if(eligibilityScore > 80 && eligibilityScore <= 99){
    alert("The eligibility of " + yourName + " and " + theirName + " getting married = " + eligibilityScore + "% - Definitely a match made in heaven!");
}

// function whosBuying(names) {
//     let numberOfPersons = names.length;
//     let selectedPerson = Math.floor(Math.random() * numberOfPersons);

//     let randomPersons = names [selectedPerson];
//     return randomPersons + " will buy miss Confidence lunch today!!!";
// }

// let totalNames = [" Blessed", " Pamela", " Lucky", " Frank", " Lucas", " ThankGod", " Daniel"]
// document.write(whosBuying(totalNames));


