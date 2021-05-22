const interface = require("./interface");

module.exports = (pairs, times) => {
  let cache = new Map();
  console.log("Start");
  for (let i = 0; i < times; i++) {
    let t = getRandomInt(pairs.length - 1);
    cache.set(pairs[t], interface(pairs[t]));
  }
  return cache;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
