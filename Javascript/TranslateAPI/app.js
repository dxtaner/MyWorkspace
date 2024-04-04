// app.js

import { translateText } from "./translate.js";
import UI from "./ui.js";

const ui = new UI();

document.addEventListener("DOMContentLoaded", eventListeners);

function eventListeners() {
  const translateForm = document.getElementById("translate-form");
  translateForm.addEventListener("submit", translateWord);
}

function translateWord(e) {
  e.preventDefault();

  const text = document.getElementById("word").value;
  const targetLanguage = document.getElementById("language").value;
  // Seçilen dilin textContent değerini almak için
  const selectedLanguageOption = document.getElementById("language");
  const selectedLanguageText =
    selectedLanguageOption.options[selectedLanguageOption.selectedIndex]
      .textContent;

  translateText(text, targetLanguage)
    .then((translation) => {
      ui.displayTranslate(translation);
      ui.changeUI(selectedLanguageText);
    })
    .catch((error) => {
      console.error(error);
    });
}
