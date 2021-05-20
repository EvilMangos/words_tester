const allWords = require("./workProcess/allWords");
const someWords = require("./workProcess/someWords");

module.exports = (pairs, settings) => {
  if (settings.count != 0) {
    pairs = pairs.splice(settings.count, pairs.length - settings.count);
  }

  if (settings.language == 1) {
    pairs = pairs.map((elem) => {
      return elem.reverse();
    });
  }

  return settings.times == 0
    ? allWords(pairs)
    : someWords(pairs, settings.times);
};
