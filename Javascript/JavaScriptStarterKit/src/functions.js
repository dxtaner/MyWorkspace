function addToCart(quantity, productName = "Elma") {
  // deafult değer Elma
  console.log("sepete eklendi!! ürün:" + productName + "  adeti:" + quantity);
}

// addToCart() // undefined
addToCart(25);
// addToCart("") // null

let mayHel = () => {
  console.log("say hello");
};

mayHel();

let mayHel2 = function () {
  console.log("say hello 2");
};

mayHel2();

function addToCart2(productName, quantity, unitPrice) {}

addToCart2("Muz", 2, 5);

let product1 = { productName: "Muz", quantity: 2, unitPrice: 5 };

function addToCart3(product) {
  console.log(
    "product eklendi! Ürün:" +
      product.productName +
      " adeti:" +
      product.quantity +
      " fiyati:" +
      product.unitPrice +
      " tl"
  );
}

addToCart3(product1);

let product2 = { productName: "Ciklet", quantity: 3, unitPrice: 3 };
let product3 = { productName: "Ciklet", quantity: 3, unitPrice: 3 };

product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);

function addToCart4(products) {
  console.log(products);
}

let products = [
  { productName: "Ciklet", quantity: 3, unitPrice: 3 },
  { productName: "Muz", quantity: 2, unitPrice: 30 },
  { productName: "Cilek", quantity: 5, unitPrice: 23 },
];

addToCart4(products);

function add(ad, ...numbers) {
  // ... rest oparetorü
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
  console.log(ad);
}

// add(20,30)
add(20, 30, 40);

let numbers = [20, 0, 35, -8, 12];
console.log(Math.max(...numbers));

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
  { name: "İç anadolu", population: "20M" },
  { name: "Marmara", population: "30M" },
  { name: "Karedeniz", population: "10M" },
  [
    ["Ankara", "Niğde"],
    ["Bursa", "İstanbul"],
    ["Trabzon", "Sinop"],
  ],
];

console.log(icAnadolu.name);
console.log(icAnadolu.population);
console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity;
({
  productName: newProductName,
  unitPrice: newUnitPrice,
  quantity: newQuantity,
} = { productName: "Ciklet", unitPrice: 5, quantity: 3 });

console.log(newProductName);
console.log(newQuantity);
console.log(newUnitPrice);
