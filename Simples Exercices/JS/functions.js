/* Robot to buy milk */

function getMilk(money) {
  let milkCost = 1.5;
  let totalMilkToByu = Math.floor(money / milkCost);
  let change = money % milkCost;
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("Buy Milk");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  console.log(
    "You bough " + totalMilkToByu + " milks and your change is " + change
  );
}
getMilk(15);
