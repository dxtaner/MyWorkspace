// project.js

function loadFilms() {
  const films = getFilmsFromStorage();

  films.forEach(function (film) {
    addFilmToUI(film);
  });
}

// Film eklemek için kullanılan formun gönderilmesini işler
document.getElementById("film-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const director = document.getElementById("director").value;
  const url = document.getElementById("url").value;

  if (title === "" || director === "" || url === "") {
    alert("Lütfen tüm alanları doldurun.");
  } else {
    // Önce mevcut filmleri al
    const films = getFilmsFromStorage();

    // Aynı isimde bir film mevcut mu kontrol et
    if (isFilmTitleUnique(films, title)) {
      const newFilm = {
        title: title,
        director: director,
        url: url,
      };

      addFilmToUI(newFilm);
      addFilmToStorage(newFilm);

      document.getElementById("title").value = "";
      document.getElementById("director").value = "";
      document.getElementById("url").value = "";
    } else {
      alert("Bu isimde bir film zaten mevcut.");
    }
  }
});

// Film ismi benzersiz mi kontrol eden işlev
function isFilmTitleUnique(films, title) {
  return films.every((film) => film.title !== title);
}

// Film silme işlemini UI'den ve yerel depodan gerçekleştiren işlev
document.getElementById("films").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-film")) {
    const filmTitle =
      e.target.parentElement.parentElement.children[1].textContent;
    deleteFilmFromUI(e.target.parentElement.parentElement);
    deleteFilmFromStorage(filmTitle);
  }
});

// Tüm filmleri temizlemek için kullanılan işlev
document.getElementById("clear-films").addEventListener("click", function () {
  if (confirm("Tüm filmleri temizlemek istediğinize emin misiniz?")) {
    clearAllFilmsFromUI();
    clearAllFilmsFromStorage();
  }
});

// Sayfa yüklendiğinde veya yenilendiğinde filmleri yükle
document.addEventListener("DOMContentLoaded", function () {
  loadFilms();
});
