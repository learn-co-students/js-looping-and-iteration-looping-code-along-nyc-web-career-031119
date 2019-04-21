// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i}.`);
  }
  return names;
}

function tailsNeverFails() {
  let streak = 0;

  while (Math.random() >= 0.5) {
    streak++;
  }

  console.log(`You got ${streak} tails in a row!`);

}
