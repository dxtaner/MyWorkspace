async function test() {
  return "Selam";
}

// `test` fonksiyonunu çağır ve sonucunu elde et
test().then((result) => {
  console.log(result); // "Selam" sonucunu yazdır

  // Yeni işlemler veya şeyler ekleyebilirsiniz
  console.log("Yeni şeyler eklendi.");
});
