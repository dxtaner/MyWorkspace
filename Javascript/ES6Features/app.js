// const Selam = function () {
//   console.log("Selam");
// };

// Selam();

// Arrow Function

// const Selam = () => {
//   console.log("Selam");
// };
// Selam();

// const merhaba = (firstName, lastName) =>
//   console.log("Selam", firstName, lastName);

// merhaba("Taner", "Özer");

// const cube = function (x) {
//   return x * x * x;
// };
// console.log(cube(4));

// const cube = (x) => x * x * x;

// console.log(cube(4));

// let number1, number2;

// arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];

// // Destructing

// [number1, number2] = arr;
// const [number1, number2] = arr;

// console.log(number1, number2);

// Obje Destructing

// const numbers = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
//   e: 50,
// };

// const { a: number1, c: number2, e: number3 } = numbers;

// console.log(number1, number2, number3);

// Function Destructing

// const getLangs = () => ["Python", "JavaScript", "C#"];

// const [lang1, lang2, lang3] = getLangs();
// console.log(lang1, lang2, lang3);

// Obje

// const person = {
//   name: "taner özer",
//   year: 1997,
//   salary: 3333,
//   showInfos: () => console.log("Bilgiler gösteriliyor..."),
// };

// const {
//   name: isim,
//   year: yil,
//   salary: maas,
//   showInfos: bilgileriGoster,
// } = person;

// console.log(isim, yil, maas);

// bilgileriGoster();

// const person = {
//   name: "Taner Özer",
//   age: 25,
//   salary: 5555,
// };

// const langs = ["Python", "JavaScript", "C++", "Ruby"];

// const name = "Taner";

// For In
// Object
// for (let prop in person) {
//   console.log(prop, person[prop]);
// }
// Array
// for (let index in langs) {
//   console.log(index, langs[index]);
// }
// String

// for (let index in name) {
//   console.log(index, name[index]);
// }

// Object

// for (let value of person) {
//   console.log(value);
// }

// for (let value of langs) {
//   console.log(value);
// }

// String

// for (let character of name) {
//   console.log(character);
// }

// Mapler - Key(Anahtar) - Value(Değer)

// let myMap = new Map(); // Oluşturma

// console.log(myMap);

// const key1 = "Taner";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 19;
// // // Set
// myMap.set(key1, "String Değer");
// myMap.set(key2, "Object Literal Değer");
// myMap.set(key3, "Function Değer");

// // Get
// // console.log(myMap.get(key1));
// // console.log(myMap.get(key2));
// // console.log(myMap.get(key3));

// // Map Boyutu

// console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara", 225);
// cities.set("İstanbul", 115);
// cities.set("Bursa", 2312);
// For Each

// cities.forEach(function (value, key) {
//   console.log(key, value);
// });

// For Of

// for (let [key, value] of cities) {
//   // Destructing
//   console.log(key, value);
// }

// Map Keys

// for (let key of cities.keys()) {
//   console.log(key);
// }

// Map Values

// for (let value of cities.values()) {
//   console.log(value);
// }

// Arraylerden Map Oluşturma
// const array = [
//   ["key1", "value1"],
//   ["key2", "value2"],
// ];

// const lastMap = new Map(array);

// console.log(lastMap);

// Maplerden Array Oluşturma

// const cities = new Map();

// cities.set("Bursa", 165);
// cities.set("İstanbul", 125);
// cities.set("İzmir", 41);

// const array = Array.from(cities);
// console.log(array);

// let a = "Taner";
// let b = "Taner";

// if (a === b) {
//   console.log("Eşit");
// }

// const person1 = {
//   name: "Taner",
//   age: 25,
// };
// const person2 = {
//   name: "Taner",
//   age: 25,
// };

// if (person1 === person2) {
//   console.log("Eşit");
// }

// const cities = new Map();
// const key = [1, 2, 3];
// cities.set("Bursa", 16);
// cities.set("İstanbul", 15);
// cities.set(key, "Array");

// console.log(cities.get(key));

// Setler - Kümeler
// const myset = new Set();

// myset.add(100);
// myset.add(100);
// myset.add(3.14);
// myset.add("Taner");
// myset.add(true);
// myset.add([1, 2, 3]);
// myset.add({ a: 1, b: 2 });

// const myset2 = new Set([100, 3.14, "Taner"]);

// console.log(myset);
// console.log(myset2);
// // Size
// console.log(myset.size);

// // Delete Metodu
// myset.delete("Taner");

// // Has Metodu
// console.log(myset.has("Taner"));
// console.log(myset.has(3.14));
// console.log(myset.has(2000));
// console.log(myset.has([1, 2, 3]));

// For Each

// myset.forEach(function (value) {
//   console.log(value);
// });

// // For Of

// for (let value of myset) {
//   console.log(value);
// }

// const array = Array.from(myset);
// console.log(array);

// Spread Operator
// const langs = ["Python", "C#", "JavaScript", "Ruby"];
// console.log(langs[0], langs[1], langs[2], langs[3]);

// console.log(...langs);

// const langs2 = ["Java", "C++", ...langs];

// console.log(langs2);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [a, b, c, ...number2] = numbers;

// console.log(a, b, c);
// console.log(number2);
