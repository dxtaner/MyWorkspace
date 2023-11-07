// Eski Elementi Seç
const oldElement = document.querySelector("#tasks-title");

// Eski Elementin Ebeveynini Bul
const parentElement = oldElement.parentElement;

// Yeni Bir Element Oluştur
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar Eklendi";

// Eski Elementi Yeni Element İle Değiştir
parentElement.replaceChild(newElement, oldElement);

// Konsola İlgili Bilgileri Yazdır
console.log("oldElement", oldElement);
console.log("newElement", newElement);
