// app2.js

import { name, test1, Person } from "./module1";

console.log(`Merhaba, ${name}`);
test1();

const person = new Person("Alice", 28);
person.sayName();
