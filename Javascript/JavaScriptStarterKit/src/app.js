console.log("Taner");

let dolarDun = 2.4;
let dolarBugun = 9.4;

let dolarYarin;
console.log(dolarDun);
console.log(dolarYarin);
dolarYarin = "düşmez";

{
  let dolarYarin = 8.4;
  console.log("block kapsami :", dolarYarin);
}

console.log(dolarYarin);

const euroDun = 12.5;

// euroDun=25; // hata

console.log("euro", euroDun);

// array
let krediler = ["emlak", "ev", "tasıt", "eğitim", "ban"];

console.log(krediler);
console.log("krediler dizi uzunlungu:", krediler.length);

//for dongusu elemanları yazdırma
console.log("<ul>");
for (let i = 0; i < krediler.length; i++) {
  const element = krediler[i];
  console.log("<li>", element, "</li>");
}
console.log("</ul>");
console.log("element bitti!");
