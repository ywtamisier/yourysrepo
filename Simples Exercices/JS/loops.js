// while - while(X<Y){
// do something
// }
//
// Bottles of beer

function beerLyric(numberOfBottles){
    var inicialNumberOfBottles = numberOfBottles;
  while (numberOfBottles > 0) {
    console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer."
    );
    numberOfBottles--
    console.log(
      "Take one down and pass it around, " +
        numberOfBottles +
        " bottles of beer on the wall"
    );
    if(numberOfBottles === 0){
      console.log("No more bottles of beer on the wall, no more bottles of beer.")
      console.log("Go to the store and buy some more, " + inicialNumberOfBottles + " bottles of beer on the wall")
    }
  }}
  

//For loop - when you know the number of times
// Start ; Condition (End) ; Change

