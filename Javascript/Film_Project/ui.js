// ui.js

// Filmi tabloya eklemek için kullanılan işlev
function addFilmToUI(film) {
  const filmList = document.getElementById("films");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" class="btn btn-danger delete-film">Filmi Sil</a></td>
  `;
  filmList.appendChild(row);
}

// Filmi tablodan ve yerel depodan silmek için kullanılan işlev
function deleteFilmFromUI(row) {
  const filmList = document.getElementById("films");
  filmList.removeChild(row);
}

// Tüm filmleri temizlemek için kullanılan işlev
function clearAllFilmsFromUI() {
  const filmList = document.getElementById("films");
  while (filmList.firstChild) {
    filmList.removeChild(filmList.firstChild);
  }
}
