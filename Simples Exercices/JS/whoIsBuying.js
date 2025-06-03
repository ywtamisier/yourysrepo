var listOfPeople = ["youry", "alice", "ricardo", "bel"];

function whoIsPaying (person) {
var numberOfPeople = person.length;
var selectedPerson = Math.floor(Math.random() * numberOfPeople);

console.log(person[selectedPerson] + " is going to buy lunch today!")
    
}