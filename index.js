// Code your solutions in this file
// let emp = ["Ada", "Brendan", "Ali"]
// printBadges(["Ada", "Brendan", "Ali"])

function printBadges(emp){
  for (let i = 0; i < emp.length; i++) {
      console.log(`Welcome ${emp[i]}! You are employee #${[i+1]}.`)
    }
    return emp
}

function tailsNeverFails() {
  let counter = 0;
  let flip = Math.random()
  while(flip >= 0.5) {
      counter++;
  }

   return "You got " + counter + " tails in a row!";
}
