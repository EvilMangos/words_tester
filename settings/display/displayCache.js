module.exports = (cache) => {
  console.log("Results\n");
  cache.forEach((value, key) => {
    console.log(`${value}\t${key[0]} - ${key[1]}`);
  });
};
