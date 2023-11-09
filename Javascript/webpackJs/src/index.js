// index.js

import denemeVal from "./module1";
import { test1, employee } from "./module1";
import { sumOfApp1 } from "./app1.js";
import "./app2.js";

console.log("denemeVal:", denemeVal);
console.log("employee:", employee);

test1();

console.log("Toplam (app1.js):", sumOfApp1);
