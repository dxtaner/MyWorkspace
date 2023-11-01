// storage.js

// Bu işlev, tarayıcı yerel depolama kullanarak film verilerini kaydeder
function addFilmToStorage(film) {
  let films = getFilmsFromStorage();

  films.push(film);

  localStorage.setItem("films", JSON.stringify(films));
}

// Bu işlev, yerel depolamadan tüm filmleri alır
function getFilmsFromStorage() {
  let films;

  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }

  return films;
}

// Bu işlev, belirli bir filmi yerel depolamadan siler
function deleteFilmFromStorage(title) {
  let films = getFilmsFromStorage();

  films.forEach((film, index) => {
    if (film.title === title) {
      films.splice(index, 1);
    }
  });

  // Filmi sildikten sonra, güncellenmiş diziyi depolamalıyız
  localStorage.setItem("films", JSON.stringify(films));
}

// Tüm filmleri temizlemek için yerel depolamadaki veriyi siler
function clearAllFilmsFromStorage() {
  localStorage.removeItem("films");
}
