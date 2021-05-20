const prompt = require("prompt-sync")({ sigint: true });

module.exports = (size) => {
  let settings = {};

  console.log(`1 - from Ukrainian to English\n2 - from English to Ukrainian`);
  settings.language = prompt("Enter: ");
  if (settings.language != 1 && settings.language != 2) {
    console.log(`Invalid value`);
    process.exit(0);
  }

  console.log(`How many words I have to take?\n(0 - all words, max - ${size})`);
  settings.count = prompt("Enter: ");
  if (
    !Number.isInteger(Number(settings.count)) ||
    settings.count < 0 ||
    settings.count > size
  ) {
    console.log(`Invalid value`);
    process.exit(0);
  }

  console.log(
    `We have to check all the words, or a certain number of words?\n(0 - all words, max - ${size})`
  );
  settings.times = prompt("Enter: ");
  if (
    !Number.isInteger(Number(settings.times)) ||
    settings.times < 0 ||
    settings.times > size
  ) {
    console.log(`Invalid value`);
    process.exit(0);
  }
  return settings;
};
