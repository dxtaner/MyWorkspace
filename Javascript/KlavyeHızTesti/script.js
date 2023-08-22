const words = [
  "Kevin",
  "Durant'ın",
  "tecrübelerinden",
  "yola",
  "çıkan",
  "Swagger,",
  "genç",
  "basketbolcuların",
  "NBA'e",
  "giden",
  "yolda;",
  "saha",
  "içinde",
  "ve",
  "dışında",
  "yaşadıklarını,",
  "önlerine",
  "çıkan",
  "engelleri,",
  "genç",
  "oyuncuların",
  "iç",
  "dünyalarını,",
  "ailelerini",
  "ve",
  "koçlarını",
  "hikayenin",
  "merkezine",
  "koyuyor.",
  "Dizi,",
  "29",
  "Ekim'de",
  "Apple",
  "TV+'ta",
  "yayınlanmaya",
  "başlayacak.",
  "Kevin",
  "Durant'ın",
  "tecrübelerinden",
  "yola",
  "çıkan",
  "Swagger,",
  "genç",
  "basketbolcuların",
  "NBA'e",
  "giden",
  "yolda;",
  "saha",
  "içinde",
  "ve",
  "dışında",
  "yaşadıklarını,",
  "önlerine",
  "çıkan",
  "engelleri,",
  "genç",
  "oyuncuların",
  "iç",
  "dünyalarını,",
  "ailelerini",
  "ve",
  "koçlarını",
  "hikayenin",
  "merkezine",
  "koyuyor.",
  "Dizi,",
  "tutkularının",
  "ve",
  "hayallerinin",
  "peşinden",
  "koşan",
  "gençlerin",
  "giriştikleri",
  "hayat",
  "mücadelesini",
  "anlatırken",
  "Amerika'da",
  "büyümenin",
  "neye",
  "benzediğini",
  "gözler",
  "önüne",
  "seriyor.",
  "Reggie",
  "Rock",
  "Bythewood,",
];

let currentIndex = 0;
let startTime;

const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const resultElement = document.getElementById("result");

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

function startGame() {
  currentIndex = 0;
  startButton.style.display = "none";
  restartButton.style.display = "none";
  resultElement.style.display = "none";
  showNextWord();
}

function restartGame() {
  currentIndex = 0; // currentIndex değerini sıfırla
  resultElement.style.display = "none";
  showNextWord();
}

function showNextWord() {
  if (currentIndex < words.length) {
    wordElement.textContent = words[currentIndex];
    inputElement.value = "";
    inputElement.disabled = false;
    inputElement.focus();
    startTime = new Date();
    setTimeout(finishWord, 10000); // 10 seconds timeout
  } else {
    finishGame();
  }
}

inputElement.addEventListener("input", function () {
  if (inputElement.value === words[currentIndex]) {
    wordElement.classList.remove("incorrect");
    wordElement.classList.add("correct");
    currentIndex++;
    showNextWord();
  } else {
    wordElement.classList.remove("correct");
    wordElement.classList.add("incorrect");
  }
});

function finishGame() {
  inputElement.disabled = true;
  const endTime = new Date();
  const elapsedTime = (endTime - startTime) / 1000; // in seconds
  const wpm = Math.floor(words.length / (elapsedTime / 60));
  resultElement.textContent = `Your speed: ${wpm} WPM`;
  resultElement.style.display = "block";
  restartButton.style.display = "block";
}

// Initial setup
wordElement.textContent = "Press Start";
inputElement.disabled = true;
