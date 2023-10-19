const langs = ["Python", "C#", "C++", "Ruby"];

function addLang(lang, callback) {
  setTimeout(function () {
    langs.push(lang);
    console.log("Eklendi");
    callback();
  }, 2000);
}

function getAllLangs() {
  setTimeout(function () {
    langs.forEach(function (lang) {
      console.log(lang);
    });
  }, 1000);
}

addLang("Javascript", getAllLangs);
addLang("Java", getAllLangs);
