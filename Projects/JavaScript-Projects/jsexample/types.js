let ogr1_ad = "Mavi";
let ogr1_soyad = "Esra";
let ogr1_dogumTarihi = 2010;
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;

let ogr2_ad = "Samir";
let ogr2_soyad = "Dersa";
let ogr2_dogumTarihi = 2012;
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - ogr1_dogumTarihi;
let ogr2_yas = suankiYil - ogr2_dogumTarihi;

let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;
let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;

let ogr1_basariDurumu = ogr1_ortalama >= 50 ? "Geçti" : "Kaldı";
let ogr2_basariDurumu = ogr2_ortalama >= 50 ? "Geçti" : "Kaldı";

console.log("Öğrenci 1 Bilgileri:");
console.log("Adı:", ogr1_ad);
console.log("Soyadı:", ogr1_soyad);
console.log("Yaşı:", ogr1_yas);
console.log("Ortalama:", ogr1_ortalama);
console.log("Başarı Durumu:", ogr1_basariDurumu);

console.log("Öğrenci 2 Bilgileri:");
console.log("Adı:", ogr2_ad);
console.log("Soyadı:", ogr2_soyad);
console.log("Yaşı:", ogr2_yas);
console.log("Ortalama:", ogr2_ortalama);
console.log("Başarı Durumu:", ogr2_basariDurumu);
