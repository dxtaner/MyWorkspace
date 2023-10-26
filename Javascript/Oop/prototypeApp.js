// function Employee(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Employee.prototype.showInfos = function () {
//   console.log("İsim: " + this.name + " Yaş: " + this.age);
// };

// const emp1 = new Employee("Taner", 25);
// const emp2 = new Employee("Messi", 35);

// emp2.showInfos();

// console.log(emp1);
// console.log(emp2);

// Kalıtım - Inheritance
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.showInfos = function () {
  console.log("İsim: " + this.name + " Yaş: " + this.age);
};
// const person = new Person("Taner", 25);
// console.log(person);

function Employee(name, age, salary) {
  // this.name = name;
  // this.age = age;
  Person.call(this, name, age);
  this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function () {
  console.log("Employee");
};
// Overriding - İptal Etme
Employee.prototype.showInfos = function () {
  console.log(
    "İsim: " + this.name + " Yaş: " + this.age + " Maaş : " + this.salary
  );
};
const emp = new Employee("Taner", 26, 5555);

console.log(emp);
emp.showInfos();
emp.toString();

console.log(emp);
