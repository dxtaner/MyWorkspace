const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded", load);
// // function load(e){
// //     console.log("Sayfa Yüklendi");
// // }

// Olay Dinleyicilerini Eklemek İçin Fonksiyon
function run(e) {
  console.log(e.type);
}

// Olay Dinleyicilerini Eklemek
filter.addEventListener("focus", run); // Odaklandığında
filter.addEventListener("blur", run); // Odak kaybolduğunda
filter.addEventListener("paste", run); // Yapıştırma işlemi yapıldığında
filter.addEventListener("copy", run); // Kopyalama işlemi yapıldığında
filter.addEventListener("cut", run); // Kesme işlemi yapıldığında
filter.addEventListener("select", run); // Seçim yapıldığında
