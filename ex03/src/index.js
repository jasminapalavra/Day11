
var myPetsArray = ["Dog", "Cat"];

myPetsArray.push("Bird", "Fish");


var myNewPets = ["Bird", "Cat", "Fish"];
myNewPets.unshift("Lion");

var firstPet = myNewPets[0];
var lastPet = myNewPets[1];


function myArrayFunction(myPets) {
var myNewPets = [...myPets];

return myNewPets;

}


console.log(myArrayFunction(myNewPets));
module.exports = myArrayFunction;