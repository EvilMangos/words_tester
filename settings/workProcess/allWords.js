const interface = require("./interface");

module.exports = (pairs) => {
  let cache = new Map();
  let size = pairs.length;
  console.log("Start");
  for (let i = 0; i < size; i++) {
    let t = getRandomInt(pairs.length - 1);
    cache.set(pairs[t], interface(pairs[t]));
    pairs.splice(t, 1);
  }
  return cache;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
