import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";

import User from "../models/user.js";
import UserService from "../services/userService.js";
import Customer from "../models/customer.js";

console.log("user component yüklendi");

let logger1 = new ElasticLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Taner", "Özer", "Bursa");
let user2 = new User(2, "Enes", "Özer", "Bilecik");

userService.add(user1);
userService.add(user2);

// console.log(userService.list())
// console.log(userService.getById(1))

// let customer = {id:1, firstName:"Taner"}
// //prototyping
// customer.lastName="Özer"

// console.log(customer.lastName)

console.log("------");
userService.load();

let customerToAdd = new Customer(6, "Alias", "Sari", "Bal", 23);
customerToAdd.type = "customer";

userService.add(customerToAdd);
console.log("customer", userService.customers);
console.log("employee", userService.employees);
console.log("error", userService.errors);
console.log(userService.getCustomerSorted());
