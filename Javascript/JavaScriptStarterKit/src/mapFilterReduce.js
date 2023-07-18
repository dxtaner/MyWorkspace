let cart = [
  { id: 1, productName: "Telefon", qunatity: 3, unitPrice: 4250 },
  { id: 2, productName: "Kitap", qunatity: 3, unitPrice: 55 },
  { id: 3, productName: "Laptop", qunatity: 2, unitPrice: 5000 },
  { id: 4, productName: "Buzdolabi", qunatity: 1, unitPrice: 2500 },
];

console.log("<ul>");
cart.map((product) => {
  console.log(
    "<li>" +
      product.productName +
      ": " +
      product.unitPrice * product.qunatity +
      "</li>"
  );
});
console.log("</ul>");

let total = cart.reduce(
  (acc, product) => acc + product.unitPrice * product.qunatity,
  0
);
console.log("total:", total);

let quantityOver2 = cart.filter((product) => product.qunatity > 2);
console.log("sayisi:", quantityOver2);

function addToCart(sepet) {
  sepet.push({ id: 5, productName: "Buzdolabi", qunatity: 3, unitPrice: 2500 });
}

addToCart(cart);
console.log(cart);

// ikisinin farkı ilki refarans tipidir ikinci primitive tiptir
let sayi = 10;
function sayiTopla(number) {
  number += 1;
}

sayiTopla(sayi);
console.log(sayi);
