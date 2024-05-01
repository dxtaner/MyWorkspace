// Sipariş bilgilerini object içerisinde saklayınız.
let siparis_1 = {
  siparis_id: 101,
  siparis_tarihi: "31.12.2022",
  odeme_sekli: "kredi kartı",
  kargo_adresi: {
    mahalle: "Yahya kaptan",
    ilce: "İzmit",
    sehir: "Kocaeli",
  },
  urunler: [
    {
      urun_id: 5,
      urun_adi: "IPhone 13 Pro",
      urun_url: "http://abc.com/iphone-13-pro",
      urun_fiyat: 22000,
    },
    {
      urun_id: 6,
      urun_adi: "IPhone 13 Pro Max",
      urun_url: "http://abc.com/iphone-13-pro-max",
      urun_fiyat: 25000,
    },
  ],
};

let siparis_2 = {
  siparis_id: 102,
  siparis_tarihi: "30.12.2022",
  odeme_sekli: "kredi kartı",
  kargo_adresi: {
    mahalle: "Yahya kaptan",
    ilce: "İzmit",
    sehir: "Kocaeli",
  },
  urunler: [
    {
      urun_id: 6,
      urun_adi: "IPhone 13 Pro Max",
      urun_url: "http://abc.com/iphone-13-pro-max",
      urun_fiyat: 25000,
    },
  ],
};

// Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
function kdvDahilToplamHesapla(siparis) {
  let toplamFiyat = 0;
  for (let urun of siparis.urunler) {
    toplamFiyat += urun.urun_fiyat;
  }
  return toplamFiyat * 1.18;
}

let siparis1_toplam = kdvDahilToplamHesapla(siparis_1);
let siparis2_toplam = kdvDahilToplamHesapla(siparis_2);

// Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.
let toplam_siparis = siparis1_toplam + siparis2_toplam;

console.log("Sipariş 1 Toplam Tutarı: " + siparis1_toplam.toFixed(2) + " TL");
console.log("Sipariş 2 Toplam Tutarı: " + siparis2_toplam.toFixed(2) + " TL");
console.log("Toplam Ödenen Miktar: ", toplam_siparis.toFixed(2) + " TL");

let siparisler = [siparis_1, siparis_2];
