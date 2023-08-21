"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getObjectValue' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY obj
 *  2. STRING_ARRAY path
 */

function getObjectValue(obj, path) {
  const propi = path.split(".");
  let value = obj;
  for (const prop of propi) {
    if (value && typeof value === "object" && prop in value) {
      value = value[prop];
    } else {
      return undefined;
    }
  }
  return value;
}
function get_result(obj, path) {
  let str = "";
  for (let i = 0; i < obj.length; i++) {
    str = str.concat(obj[i]);
  }
  let obj_ = JSON.parse(str);
  let result = [];
  for (let i = 0; i < path.length; i++) {
    let res = getObjectValue(obj_, path[i]);
    if (res !== undefined) {
      result.push(res);
    } else {
      result.push("undefined");
    }
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const objCount = parseInt(readLine().trim(), 10);

  let obj = [];

  for (let i = 0; i < objCount; i++) {
    const objItem = readLine();
    obj.push(objItem);
  }

  const pathCount = parseInt(readLine().trim(), 10);

  let path = [];

  for (let i = 0; i < pathCount; i++) {
    const pathItem = readLine();
    path.push(pathItem);
  }

  const result = get_result(obj, path);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
