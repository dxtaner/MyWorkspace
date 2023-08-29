const fs = require("fs");
const { performance } = require("perf_hooks");

function createPromiseFunction(timeout, status) {
  return function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (status === "Resolve") resolve();
        else reject();
      }, timeout);
    });
  };
}

class AsyncTaskQueue {
  constructor(concurrency) {
    this.concurrencyLimit = concurrency;
    this.runningTasks = 0;
    this.taskQueue = [];
    this.completedTasks = {
      resolved: 0,
      rejected: 0,
    };
    this.completeCallback = null;
  }

  addTask(task) {
    const startTask = async () => {
      this.runningTasks++;
      try {
        await task();
        this.completedTasks.resolved++;
      } catch (error) {
        this.completedTasks.rejected++;
      }
      this.runningTasks--;

      if (
        this.completeCallback &&
        this.runningTasks === 0 &&
        this.taskQueue.length === 0
      ) {
        this.completeCallback(
          this.completedTasks.resolved,
          this.completedTasks.rejected
        );
      }

      if (this.taskQueue.length > 0) {
        this.taskQueue.shift()();
      }
    };

    if (this.runningTasks < this.concurrencyLimit) {
      startTask();
    } else {
      this.taskQueue.push(startTask);
    }
  }

  onComplete(callback) {
    this.completeCallback = callback;

    if (this.runningTasks === 0 && this.taskQueue.length === 0) {
      this.completeCallback(
        this.completedTasks.resolved,
        this.completedTasks.rejected
      );
    }
  }
}

let start = 0;
const error = 10;
let startTime = [];

function main() {
  const inputString = `5
    150 Resolve
    200 Reject
    80 Resolve
    120 Reject
    250 Resolve
    3`;

  const inputLines = inputString.split("\n");
  let currentLine = 0;

  function readLine() {
    return inputLines[currentLine++];
  }

  const tasksCount = parseInt(readLine().trim(), 10);
  let tasks = [];

  for (let i = 0; i < tasksCount; i++) {
    const tasksItem = readLine().replace(/\s+$/g, "").split(" ");
    tasks.push(createPromiseFunction(parseInt(tasksItem[0]), tasksItem[1]));
  }

  const concurrencyLimit = parseInt(readLine().trim(), 10);
  let queue = new AsyncTaskQueue(concurrencyLimit);

  start = performance.now();

  for (let i = 0; i < tasksCount; i++) {
    queue.addTask(tasks[i]);
  }

  const callbackFunction = (resolved, rejected) => {
    console.log("Resolved Tasks - " + resolved);
    console.log("Rejected Tasks - " + rejected);
    for (let i = 0; i < tasksCount; i++) {
      let approxStartTime = Math.round(startTime[i] / 50) * 50;
      if (Math.abs(approxStartTime - startTime[i]) > error) {
        console.log("AsyncTaskQueue doesn't work as expected.");
      }
      console.log("Task " + (i + 1) + " - " + approxStartTime);
    }
  };

  queue.onComplete(callbackFunction);
}

main();
