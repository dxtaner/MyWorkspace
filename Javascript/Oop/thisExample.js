// console.log(this); // Global Scope

// const emp1 = {
//   // Object Literal
//   name: "Taner",
//   age: 25,
//   showInfos: function () {
//     console.log("Bilgiler Gösteriliyor");
//   },
// };
// const emp2 = {
//   name: "Messi",
//   age: 32,
// };

// console.log(emp1);

function Employee(name, age, salary) {
  // Yapıcı Fonksiyon - Constructor
  this.name = name;
  this.age = age;
  this.salary = salary;

  this.showInfos = function () {
    console.log(this.name, this.age, this.salary);
  };
}
const emp1 = new Employee("Taner", 25, 4000);
const emp2 = new Employee("Messi", 35, 50000000);

console.log(emp1);
console.log(emp2);
