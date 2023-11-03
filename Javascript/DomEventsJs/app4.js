// Input Alanındaki Değişikliği Yansıtmak
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
  header.textContent = e.target.value;
}

// Keypress Olayı
document.addEventListener("keypress", runKeypress);

function runKeypress(e) {
  console.log("Tuş Kodu (which): " + e.which);
  console.log("Tuş: " + e.key);
}

// Keydown Olayı
document.addEventListener("keydown", runKeydown);

function runKeydown(e) {
  console.log("Tuş Kodu (which): " + e.which);
  console.log("Tuş: " + e.key);
}

// Keyup Olayı
document.addEventListener("keyup", runKeyup);

function runKeyup(e) {
  console.log("Tuş Kodu (which): " + e.which);
  console.log("Tuş: " + e.key);
}
