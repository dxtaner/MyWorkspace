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
 * Complete the class 'EventEmitter' below.
 *
 * The class EventEmitter should have following methods:
 *  1. on(eventName, callback)
 *  2. emit(eventName, data)
 *  3. off(eventName, callback)
 *  4. once(eventName, callback)
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    (this.events[eventName] || (this.events[eventName] = [])).push(callback);
  }

  emit(eventName, data) {
    this.events[eventName]?.forEach((callback) => callback(data));
  }

  off(eventName, callback) {
    this.events[eventName] = this.events[eventName]?.filter(
      (cback) => cback !== callback
    );
  }

  once(eventName, callback) {
    const onceCallback = (data) => {
      this.off(eventName, onceCallback);
      callback(data);
    };
    this.on(eventName, onceCallback);
  }
}

function adder(obj) {
  obj.data += obj.add;
}

function substractor(obj) {
  obj.data -= obj.add;
}

function clean(queries) {
  for (let i = 0; i < queries.length; i++) {
    queries[i][0] = parseInt(queries[i][0]);
    switch (queries[i][0]) {
      case 4:
        queries[i][1] = parseInt(queries[i][1]);
        break;
      case 0:
      case 2:
      case 3:
        queries[i][2] = parseInt(queries[i][2]);
      default:
        queries[i][1] = String(queries[i][1]);
    }
  }
  return queries;
}

function get_result(queries) {
  let result = [];
  let obj = {
    data: 0,
    add: 0,
  };
  queries = clean(queries);

  let ee = new EventEmitter();

  for (let i = 0; i < queries.length; i++) {
    switch (queries[i][0]) {
      case 0:
        if (queries[i][2] === 0) {
          ee.on(queries[i][1], adder);
        } else {
          ee.on(queries[i][1], substractor);
        }
        break;
      case 1:
        ee.emit(queries[i][1], obj);
        result.push(obj.data);
        break;
      case 2:
        if (queries[i][2] === 0) {
          ee.off(queries[i][1], adder);
        } else {
          ee.off(queries[i][1], substractor);
        }
        break;
      case 3:
        if (queries[i][2] === 0) {
          ee.once(queries[i][1], adder);
        } else {
          ee.once(queries[i][1], substractor);
        }
        break;
      case 4:
        obj.add = queries[i][1];
    }
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const eventsCount = parseInt(readLine().trim(), 10);

  let queries = [];

  for (let i = 0; i < eventsCount; i++) {
    const query = readLine().replace(/\s+$/g, "").split(" ");
    queries.push(query);
  }

  const result = get_result(queries);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
