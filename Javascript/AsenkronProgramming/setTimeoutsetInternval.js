// setTimeout kullanarak belirli bir süre sonra bir işlem yapma
setTimeout(function () {
  console.log("Naber");
}, 5000);

// setInterval kullanarak belirli aralıklarla işlem yapma
let i = 0;
let value = setInterval(function () {
  i++;
  console.log("Sayı:", i);
}, 1000);

// Butona tıklandığında setInterval'i temizleme
setTimeout(function () {
  clearInterval(value);
}, 10000);
