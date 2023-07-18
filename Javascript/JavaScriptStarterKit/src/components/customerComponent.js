import { MongoLogger } from "../crossCuttingConcerns/logging/mongoLogger.js";
import { CustomerService } from "../services/customerService.js";
import Customer from "../models/customer.js";

console.log("customer service yüklendi");

let logger = new MongoLogger();

let customerService = new CustomerService(logger);
let customer1 = new Customer(166, "Ter", "San", "Manisa", 3522);
customer1.type = "customer";
customerService.add(customer1);
console.log(customerService.listAll());
console.log(customerService.errors);
