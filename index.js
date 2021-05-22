"use strict";

const xlsxFile = require("read-excel-file/node");

const division = require("./settings/divison");
const settings = require("./settings/settings");
const displayCache = require("./settings/display/displayCache");

xlsxFile("./data/Data.xlsx").then((data) => {
  let cache = division(data, settings(data.length - 1));
  displayCache(cache);
});
