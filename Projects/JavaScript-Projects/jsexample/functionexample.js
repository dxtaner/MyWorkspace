function kelimeYazdir(kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
}

function alanCevreHesapla(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = (kisa + uzun) * 2;

  return `Alan: ${alan}, Çevre: ${cevre}`;
}

function yaziTuraAt() {
  let random = Math.random();

  if (random < 0.5) {
    console.log("Yazı");
  } else {
    console.log("Tura");
  }
  console.log(random);
}

function tamBolenler(sayi) {
  let sayilar = [];

  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      sayilar.push(i);
    }
  }

  return sayilar;
}

function toplam() {
  let sonuc = 0;

  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }

  return sonuc;
}

console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));
console.log(toplam(2, 5, 7, 10));
