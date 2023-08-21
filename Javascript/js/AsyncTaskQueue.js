"use strict";

const fs = require("fs");
const { performance } = require("perf_hooks");

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
 * Complete the 'AsyncTaskQueue' class below.
 *
 * The function is expected to have following methods:
 * constructor(concurrency)
 * addTask(task)
 * onComplete(callback)
 */

class AsyncTaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.tasks = [];
    this.completedTasks = [];
    this.rejectedTasks = [];
    this.runningTasks = 0;
    this.onCompleteCallback = null;
  }

  addTask(task) {
    this.runningTasks < this.concurrency
      ? this.executeTask(task)
      : this.tasks.push(task);
  }

  executeTask(task) {
    this.runningTasks++;
    task()
      .then((result) => {
        this.completedTasks.push(result);
      })
      .catch((error) => {
        this.rejectedTasks.push(error);
      })
      .finally(() => {
        this.runningTasks--;
        this.executeNextTask();
      });
  }

  executeNextTask() {
    if (this.tasks.length > 0) {
      this.executeTask(this.tasks.shift());
    } else if (this.runningTasks === 0 && this.onCompleteCallback) {
      this.onCompleteCallback(
        this.completedTasks.length,
        this.rejectedTasks.length
      );
    }
  }

  onComplete(callback) {
    this.onCompleteCallback = callback;
  }
}

let start = 0;
const error = 10;
let startTime = [];

function createPromiseFunction(timeout, status) {
  return function () {
    return new Promise(function (resolve, reject) {
      startTime.push(performance.now() - start);
      setTimeout(function () {
        if (status === "Resolve") resolve();
        else reject();
      }, timeout);
    });
  };
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tasksCount = parseInt(readLine().trim(), 10);

  let tasks = [];

  for (let i = 0; i < tasksCount; i++) {
    const tasksItem = readLine().replace(/\s+$/g, "").split(" ");
    tasks.push(createPromiseFunction(tasksItem[0], tasksItem[1]));
  }

  const concurrencyLimit = parseInt(readLine().trim(), 10);

  let queue = new AsyncTaskQueue(concurrencyLimit);

  start = performance.now();

  for (let i = 0; i < tasksCount; i++) {
    queue.addTask(tasks[i]);
  }

  const callbackFunction = (resolved, rejected) => {
    ws.write("Resolved Tasks - " + resolved + "\n");
    ws.write("Rejected Tasks - " + rejected + "\n");
    for (let i = 0; i < tasksCount; i++) {
      let approxStartTime = Math.round(startTime[i] / 50) * 50;
      if (Math.abs(approxStartTime - startTime[i]) > error) {
        ws.write("AsyncTaskQueue doesn't work as expected.\n");
      }
      ws.write("Task " + (i + 1) + " - " + approxStartTime + "\n");
    }
    ws.end();
  };

  queue.onComplete(callbackFunction);
}
