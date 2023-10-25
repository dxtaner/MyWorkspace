async function test() {
  return "Selam";
}

async function main() {
  // `test` fonksiyonunu çağır ve sonucu elde et
  const result = await test();

  console.log(result); // "Selam" sonucunu yazdır

  // Yeni işlemler veya şeyler ekleyebilirsiniz
  console.log("Yeni şeyler eklendi.");

  // Örnek olarak başka bir asenkron işlem ekleyelim
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 saniye bekle
  console.log("Başka bir asenkron işlem tamamlandı.");

  // Daha fazla işlem eklemek için devam edebilirsiniz.
}

main();
