// ui.js

class UI {
  constructor() {
    this.translationResult = document.getElementById("outputWord");
    this.outputLanguage = document.getElementById("outputLanguage");

    this.languageList = document.getElementById("language");
    this.outputImage = document.getElementById("outputImage");
  }

  displayTranslate(translation) {
    this.translationResult.textContent = translation;
  }

  changeUI(selectedLanguage) {
    this.outputLanguage.textContent = selectedLanguage;
    this.outputImage.src = `images/${this.languageList.value}.png`;
  }
}

export default UI;
