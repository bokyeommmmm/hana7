const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });
console.log("\n".repeat(2));

const gener = add();
const { value } = gener.next();
console.log("console.log(); ~ value:", value);

//-----------------------------------------------------------------------------------------------
// rl.question("What do you think of Node.js? ", (answer) => {
// TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.on("close", function () {
//   process.exit();
// });
//-----------------------------------------------------------------------------------------------

rl.on("line", (answer) => {
  //   console.log("line.answer>>", answer);
  if (answer === "bye") rl.close();
  const { value, done } = gener.next(Number(answer)); //answer : string ->숫자로.
  if (done) {
    console.log("total : ", value);
    rl.close();
  } else {
    console.log(value);
  }
}).on("close", () => {
  process.exit();
});

function* add() {
  const a = yield "first number?";
  const b = yield "second number?";
  return a + b;
}
