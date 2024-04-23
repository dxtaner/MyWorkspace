let meyveler = ["Elma", "Armut", "Muz", "Çilek"];
console.log("Dizinin eleman sayısı:", meyveler.length);

console.log("Dizinin ilk elemanı:", meyveler[0]);
console.log("Dizinin son elemanı:", meyveler[meyveler.length - 1]);

console.log("Elma dizinin bir elemanı mı?", meyveler.includes("Elma"));

meyveler.push("Kiraz");

meyveler.splice(-2);

const ogrenciler = [
  ["Yiğit", "Bilgi", 2010, [70, 60, 80]],
  ["Ada", "Bilgi", 2012, [80, 80, 90]],
  ["Ahmet", "Turan", 2009, [60, 60, 70]],
];

function yasHesapla(dogumYili) {
  const simdikiYil = new Date().getFullYear();
  return simdikiYil - dogumYili;
}

function notOrtalamasiHesapla(notlar) {
  const toplamNot = notlar.reduce((toplam, not) => toplam + not, 0);
  return toplamNot / notlar.length;
}

for (let i = 0; i < ogrenciler.length; i++) {
  const ogrenci = ogrenciler[i];
  const yas = yasHesapla(ogrenci[2]);
  const notOrtalamasi = notOrtalamasiHesapla(ogrenci[3]);
  console.log(
    `${ogrenci[0]} ${
      ogrenci[1]
    }: Yaş - ${yas}, Not Ortalaması - ${notOrtalamasi.toFixed(1)}`
  );
}
