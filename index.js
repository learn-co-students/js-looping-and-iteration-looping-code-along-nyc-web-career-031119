// Code your solutions in this file
function printBadges(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
    }
    return arr;
}

function tailsNeverFails () {
    let count = 0;
    while (Math.random() >= 0.5) {
        count++;
    }

    return `You got ${count} tails in a row!`;
}

// iter    Iterate (for each..in)
// itin    Iterate (for..in)
// itar    Iterate elements of array
// ritar   Iterate elements of array in reverse order
