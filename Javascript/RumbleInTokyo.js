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
 * Complete the 'getMinimumBlows' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY height as parameter.
 */

function getMinimumBlows(height) {
  let minBlows = 0;
  for (let i = 0; i < height.length - 1; i++) {
    if (height[i] > height[i + 1]) {
      minBlows++;
    }
  }
  return minBlows;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const heightCount = parseInt(readLine().trim(), 10);

  let height = [];

  for (let i = 0; i < heightCount; i++) {
    const heightItem = parseInt(readLine().trim(), 10);
    height.push(heightItem);
  }

  const result = getMinimumBlows(height);

  ws.write(result + "\n");

  ws.end();
}

function getMinimumBlows(height) {
  const n = height.length;

  let left = 0;
  let right = n - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let blows = 0;

  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      }
      right--;
    }

    if (leftMax && rightMax) {
      blows++;
      leftMax = 0;
      rightMax = 0;
    }
  }

  return blows;
}

// Örnek girdi
const height = [1, 2, 3, 4, 8, 7, 6, 5];
console.log(getMinimumBlows(height)); // Output: 3

// Diğer örnek girdi
const height2 = [1, 2, 1, 2, 10, 9];
console.log(getMinimumBlows(height2)); // Output: 2
