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
    // Yapıcı metod, AsyncTaskQueue sınıfının bir örneğini başlatırken kullanılır.
    // Eş zamanlı görev işlem limitini belirlemek için 'concurrency' parametresini alır.
    this.concurrencyLimit = concurrency;

    // Çalışan görev sayısını izlemek için 'runningTasks' değişkenini başlatır.
    this.runningTasks = 0;

    // Görevlerin beklediği kuyruğu temsil eden 'taskQueue' dizisini başlatır.
    this.taskQueue = [];

    // Çözülen ve reddedilen görevlerin sayısını takip eden bir nesne olan 'completedTasks' nesnesini başlatır.
    this.completedTasks = {
      resolved: 0,
      rejected: 0,
    };

    // Tüm görevler tamamlandığında çağrılacak geri çağırma fonksiyonunu saklayan 'completeCallback' değişkenini başlatır.
    this.completeCallback = null;
  }

  addTask(task) {
    const startTask = async () => {
      this.runningTasks++;
      try {
        await task(); // Görevi bekleyerek (asenkron olarak) çalıştır
        this.completedTasks.resolved++; // Görev çözüldüğünde çözülen görev sayısını artır
      } catch (error) {
        this.completedTasks.rejected++; // Görev reddedildiğinde reddedilen görev sayısını artır
      }
      this.runningTasks--;

      // Eğer tamamlanma geri çağırması tanımlanmışsa ve hiçbir görev çalışmıyorsa ve görev kuyruğu boşsa
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

      // Eğer kuyrukta bekleyen görevler varsa, sıradaki görevi hemen çalıştır
      if (this.taskQueue.length > 0) {
        this.taskQueue.shift()();
      }
    };

    if (this.runningTasks < this.concurrencyLimit) {
      // Eğer eş zamanlı olarak çalışan görev sayısı sınıra ulaşmamışsa
      // Yeni bir görevi hemen başlat
      startTask();
    } else {
      // Eş zamanlı görev sınırına ulaşılmışsa
      // Görevi kuyruğa ekle, ileride çalıştırılmak üzere beklet
      this.taskQueue.push(startTask);
    }
  }

  onComplete(callback) {
    this.completeCallback = callback;

    // Eğer hiçbir görev çalışmıyorsa ve görev kuyruğu boşsa
    if (this.runningTasks === 0 && this.taskQueue.length === 0) {
      // Tamamlanma geri çağırmasını çağır ve çözülen ve reddedilen görev sayılarını argüman olarak gönder
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
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

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

// Read input and execute main function
const inputString = `3
100 Resolve
100 Reject
50 Resolve
4`;
const inputLines = inputString.split("\n");
let currentLine = 0;

function readLine() {
  return inputLines[currentLine++];
}

main();

// Genel olarak, bu kod parçası, asenkron görevleri işleme, işlenmiş görev sayılarını ve
// sonuçlarını takip etme ve görevlerin planlandığı zamanlara ilişkin doğrulamalar yapma amaçlarına hizmet eder.
// Bu tür yapılar genellikle çoklu görevlerin paralel olarak işlenmesi gereken senaryolarda kullanılır.
