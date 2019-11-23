#!/usr/bin/env node
"use strict";

const fs = require("fs");

let rawdata = fs.readFileSync("./package.json");
let pkg = JSON.parse(rawdata);
console.log("**Dependencies**");
let str = "yarn add";
for (let key of Object.keys(pkg.dependencies)) {
  str += " " + key;
}
console.log(str);

str = "yarn add --dev";
console.log("**Dev Dependencies**");
for (let key of Object.keys(pkg.devDependencies)) {
  str += " " + key;
}
console.log(str);
