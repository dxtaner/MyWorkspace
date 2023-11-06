// Yeni Link Oluştur
const newLink = document.createElement("a");
newLink.id = "clear-todos";
newLink.className = "btn btn-warning";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

// Link Metni Oluştur
const linkText = document.createTextNode("Farklı Sayfaya Git 123");
newLink.appendChild(linkText);

// Bağlantıyı Ekranın İlgili Bölümüne Ekleyin
const cardbody = document.getElementsByClassName("card-body")[1];
cardbody.appendChild(newLink);

// Yeni Bağlantıyı Konsola Yazdır
console.log(newLink);
