let url = "https://dxtaner.github.io";
let kursAdi = "Web Geliştirme Kursu";

let sonuc = url.length;
console.log("Url karakter sayısı:", sonuc);

sonuc = kursAdi.split(" ").length;
console.log("Kurs adı kelime sayısı:", sonuc);

sonuc = url.startsWith("https");
if (sonuc) {
  console.log("Url https ile başlıyor.");
} else {
  console.log("Url https ile başlamıyor.");
}

sonuc = kursAdi.includes("Eğitimi");
if (sonuc) {
  console.log("Kurs adı içerisinde 'Eğitimi' kelimesi bulunuyor.");
} else {
  console.log("Kurs adı içerisinde 'Eğitimi' kelimesi bulunmuyor.");
}

kursAdi = kursAdi
  .toLowerCase()
  .replaceAll(" ", "-")
  .replace("ş", "s")
  .replace("ı", "i");
sonuc = `${url}/${kursAdi}`;
console.log("Oluşturulan string bilgi:", sonuc);
