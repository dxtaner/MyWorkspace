function flat(arr, depth = 1) {
  // Sonuç dizisini temsil eden boş bir dizi oluşturuluyor.
  const result = [];

  // Dizi üzerinde bir döngü başlatılıyor.
  for (let i = 0; i < arr.length; i++) {
    // Eğer mevcut eleman bir dizi ise ve derinlik sıfırdan büyükse,
    // bu elemanı daha da düzleştirmek için fonksiyonu tekrar çağırıyoruz.
    if (Array.isArray(arr[i]) && depth > 0) {
      // Eğer eleman bir dizi ise, bu elemanı belirtilen derinlikten bir azaltarak
      // (yani bir seviye daha derine inerek) tekrar "flat" fonksiyonuna gönderiyoruz
      // ve dönen sonucu "result" dizisine ekliyoruz.
      // Burada "..."" (spread operator) kullanarak dönen sonucu doğrudan "result" dizisine ekliyoruz.
      result.push(...flat(arr[i], depth - 1));
    } else {
      // Eğer mevcut eleman bir dizi değilse, direkt olarak bu elemanı "result" dizisine ekliyoruz.
      result.push(arr[i]);
    }
  }

  // Fonksiyon, düzleştirilmiş diziyi (yani "result" dizisini) döndürüyor.
  return result;
}
