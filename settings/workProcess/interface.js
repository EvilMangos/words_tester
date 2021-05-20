const prompt = require("prompt-sync")();

module.exports = (pair) => {
  let answer = prompt(`${pair[0]} - `);
  console.log(
    checkEqual(pair[1], answer)
      ? "Right\n"
      : `Wrong (${pair[0]} = ${pair[1]})\n`
  );
  return checkEqual(pair[1], answer);
};

function checkEqual(rightAnswer, answer) {
  if (!answer) return false;
  else if (answer == "program.exit") {
    process.exit(0);
  } else if (rightAnswer == answer) return true;
  else if (rightAnswer.split(", ").length > 1) {
    let res = false;
    rightAnswer.split(", ").forEach((elem) => {
      if (rightAnswer == elem) res = true;
    });
    return res;
  } else return false;
}
