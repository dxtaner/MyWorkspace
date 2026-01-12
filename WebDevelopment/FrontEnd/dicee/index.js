var button = document.querySelector(".btn");
var diceSound = new Audio("sounds/dice-roll.mp3");

button.addEventListener("click", rollDice);

function rollDice() {
  // 🎞 Animasyon ekle
  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");

  img1.classList.add("shake");
  img2.classList.add("shake");

  // 🔊 Ses efekti
  diceSound.currentTime = 0;
  diceSound.play();

  setTimeout(function () {
    // Player 1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

    // Player 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Kazanan
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }

    // Animasyonu kaldır (tekrar çalışabilmesi için)
    img1.classList.remove("shake");
    img2.classList.remove("shake");
  }, 500);
}
