// Code your solutions in this file
function printBadges(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
};

function tailsNeverFails() {
  let count = 0;
  function flip() {
    return Math.random() >= 0.5;
  };
  while (flip()) {
    console.log("tails");
    ++count;
  };
  return `You got ${count} tails in a row!`;
};
