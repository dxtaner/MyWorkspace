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

function AsyncTaskQueue(concurrency) {
  this.concurrencyLimit = concurrency;
  this.runningTasks = 0;
  this.taskQueue = [];
  this.completedTasks = {
    resolved: 0,
    rejected: 0,
  };
  this.completeCallback = null;
}

AsyncTaskQueue.prototype.addTask = function (task) {
  const self = this;
  const startTask = async function () {
    self.runningTasks++;
    try {
      await task();
      self.completedTasks.resolved++;
    } catch (error) {
      self.completedTasks.rejected++;
    }
    self.runningTasks--;

    if (
      self.completeCallback &&
      self.runningTasks === 0 &&
      self.taskQueue.length === 0
    ) {
      self.completeCallback(
        self.completedTasks.resolved,
        self.completedTasks.rejected
      );
    }

    if (self.taskQueue.length > 0) {
      self.taskQueue.shift()();
    }
  };

  if (this.runningTasks < this.concurrencyLimit) {
    startTask();
  } else {
    this.taskQueue.push(startTask);
  }
};

AsyncTaskQueue.prototype.onComplete = function (callback) {
  this.completeCallback = callback;

  if (this.runningTasks === 0 && this.taskQueue.length === 0) {
    this.completeCallback(
      this.completedTasks.resolved,
      this.completedTasks.rejected
    );
  }
};

let start = 0;
const error = 10;
let startTime = [];

function main() {
  const tasksCount = 3;
  const tasksInput = [
    [100, "Resolve"],
    [100, "Reject"],
    [50, "Resolve"],
  ];
  const concurrencyLimit = 4;

  let tasks = [];

  for (let i = 0; i < tasksCount; i++) {
    tasks.push(createPromiseFunction(tasksInput[i][0], tasksInput[i][1]));
  }

  let queue = new AsyncTaskQueue(concurrencyLimit);

  start = performance.now();

  for (let i = 0; i < tasksCount; i++) {
    queue.addTask(tasks[i]);
  }

  const callbackFunction = function (resolved, rejected) {
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
