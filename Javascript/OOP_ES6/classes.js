// function Employee(name, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
// }
// Employee.prototype.showInfos = function () {
//   console.log(
//     "İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
//   );
// };
// const emp = new Employee("Taner", 25, 131312);

// console.log(emp);

class Employee {
  constructor(name, age, salary) {
    // Constructr
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  showInfos() {
    console.log(
      "İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
    );
  }
}

const emp = new Employee("Messi", 35, 40044000);

// console.log(emp);
emp.showInfos();
