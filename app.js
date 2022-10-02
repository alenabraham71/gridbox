const prompt = require("prompt-sync")();
let namer = prompt("Welcome to JoggerMan App. Please enter your name ");

console.log("");
console.log(`Good day ${namer}, Good to have you back!`);
console.log("");

while (true) {
  let goal = parseInt(prompt(`Please enter your set goal `));

  let entry = prompt(
    "Please press Y to continue or R to reset your Goal. Otherwise press Q to quit "
  ).toUpperCase();

  if (isNaN(goal)) {
    console.log("Please enter a number");
  } else if (entry === "Q") {
    console.log(`It saddens my heart to see you go ${namer}`);
    break;
  } else if (entry === "R") {
    console.log(`Wanna reset your goal.... let's do this!`);
    continue;
  } else if (entry === "Y") {
    while (true) {
      console.log("");
      console.log(`Your set jogging goal is ${goal}mins!`);
      let start = parseInt(prompt(`How long would you like to jog? `));

      if (goal <= 0) {
        console.log("You have achieved your goal");
        break;
      } else if (start >= goal) {
        console.log(`Your start is impossible`);
        continue;
      }

      goal = goal - start;
      console.log(
        `Awesome ninja..... You have ${goal}mins left. Let's do this`
      );
    }
  }
  break;
}
