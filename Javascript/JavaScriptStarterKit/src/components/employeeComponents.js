import { EmployeeService } from "../services/employeeService.js";
import Employee from "../models/employee.js";
import { MongoLogger } from "../crossCuttingConcerns/logging/mongoLogger.js";

console.log("Employee componenti yuklendi!!");

let logger = new MongoLogger();
// let employeeService = new EmployeeService(logger);
// console.log(employeeService.listAll()); 

let employeeService = new EmployeeService(logger);
console.log(employeeService.listAll());

let employee = new Employee(15, "Erkan", "Tepsi", "Samsun", "4d6as5", 5250);
employee.type = "employee";
employeeService.add(employee); 

console.log(employeeService.errors);