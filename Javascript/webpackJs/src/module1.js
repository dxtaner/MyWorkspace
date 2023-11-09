// module1.js

export const name = "Taner";

export function test1() {
  console.log("Test 11");
}

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`Adım ${this.name}`);
  }
}

export const employee = {
  name: "Taner",
  salary: 55555,
};

export default "Modül 1 Deneme Değeri";
