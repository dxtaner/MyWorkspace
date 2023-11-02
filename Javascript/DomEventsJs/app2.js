// Event Bubbling

// // "container" sınıfına sahip bir öğe üzerine tıklama olayı dinleyicisi ekleyin
// document.querySelector(".container").addEventListener("click", function () {
//   console.log("Div Container tıklandı");
// });

// // "card row" sınıfına sahip bir öğe üzerine tıklama olayı dinleyicisi ekleyin
// document.querySelector(".card.row").addEventListener("click", function () {
//   console.log("Card Row tıklandı");
// });

// // "card-body" sınıfına sahip ikinci öğe üzerine tıklama olayı dinleyicisi ekleyin
// document
//   .querySelectorAll(".card-body")[1]
//   .addEventListener("click", function () {
//     console.log("Card Body tıklandı");
//   });

// Event Capturing veya Delegation
const cardbody = document.querySelectorAll(".card-body")[1];

// "cardbody" üzerine bir tıklama olay dinleyicisi ekleyin
cardbody.addEventListener("click", run);

// Tıklama olayı işlevi
function run(e) {
  // Eğer tıklanan öğenin sınıfı "fa fa-remove" ise:
  if (e.target.className === "fa fa-remove") {
    console.log("Silme İşlemi");
  }

  // Eğer tıklanan öğenin id'si "filter" ise:
  if (e.target.id === "filter") {
    console.log("Filtreleme İşlemi");
  }

  // Eğer tıklanan öğenin id'si "clear-todos" ise:
  if (e.target.id === "clear-todos") {
    console.log("Tüm taskları silme işlemi");
  }

  // Tıklanan öğenin kendisini konsola yazdırın
  console.log("Tıklanan Öğe", e.target);
}
