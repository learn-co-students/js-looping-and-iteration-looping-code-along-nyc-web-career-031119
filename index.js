
function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
  console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
}
return arr;
}

function tailsNeverFails() {
  let streak = 0;

  while (Math.random() >= 0.5) {
    streak++;
  }

  console.log(`You got ${streak} tails in a row!`);

}
