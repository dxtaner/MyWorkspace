class Person {
  static test() {
    console.log("Test1 ");
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Yeni bir Person örneği oluştur
const person1 = new Person("John", 30);

// Yeni eklenen metodu çağır
person1.sayHello();
