let ogrenciler = [
  { ad: "yiğit", soyad: "bilgi", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
  { ad: "çınar", soyad: "turan", notlar: [10, 20, 60] },
];

for (let ogrenci of ogrenciler) {
  let not_toplam = 0;
  let ortalama = 0;
  let adet = 0;
  for (let not of ogrenci.notlar) {
    not_toplam += not;
    adet++;
  }
  ortalama = not_toplam / adet;

  console.log(
    `${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması: ${ortalama}.`
  );

  if (ortalama >= 50) {
    console.log("Başarılı.");
  } else {
    console.log("Başarısız.");
  }
}

let toplamNot = 0;
let toplamOgrenci = 0;

for (let ogrenci of ogrenciler) {
  for (let not of ogrenci.notlar) {
    toplamNot += not;
  }
  toplamOgrenci += ogrenci.notlar.length;
}

let ortalamaNot = toplamNot / toplamOgrenci;
console.log("Tüm öğrencilerin not ortalaması:", ortalamaNot.toFixed(2));
