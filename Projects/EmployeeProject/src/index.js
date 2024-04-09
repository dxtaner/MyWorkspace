import { Request } from "./requests.js";
import { UI } from "./ui.js";

const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const cityInput = document.getElementById("city");
const ageInput = document.getElementById("age");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();

eventListeners();

let updateState = null;

function eventListeners() {
  document.addEventListener("DOMContentLoaded", GetAllEmployees);
  form.addEventListener("submit", AddEmployee);
  employeesList.addEventListener("click", UpdateOrDelete);
  updateEmployeeButton.addEventListener("click", updateEmployee);
}

function GetAllEmployees() {
  request
    .get()
    .then((employees) => {
      ui.addAllEmployeesToUI(employees);
    })
    .catch((err) => console.log(err));
}

function AddEmployee(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const department = document.getElementById("department").value;
  const salary = document.getElementById("salary").value;
  const city = document.getElementById("city").value;
  const age = document.getElementById("age").value;

  if (
    name === "" ||
    department === "" ||
    salary === "" ||
    city === "" ||
    age === ""
  ) {
    alert("Lütfen tüm alanları doldurun");
  } else {
    const newEmployee = {
      name,
      department,
      salary,
      city,
      age,
    };

    request
      .post(newEmployee)
      .then((employee) => {
        ui.addEmployeeToUI(employee);
        ui.clearInputs();
      })
      .catch((err) => console.log(err));
  }
}

function UpdateOrDelete(e) {
  if (e.target.id === "delete-employee") {
    deleteEmployee(e.target);
  } else if (e.target.id === "update-employee") {
    updateEmployeeController(e.target.parentElement.parentElement);
  }
}

function deleteEmployee(targetEmployee) {
  const id =
    targetEmployee.parentElement.previousElementSibling.previousElementSibling
      .previousElementSibling.previousElementSibling.textContent;
  request
    .delete(id)
    .then((message) => {
      ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
    })
    .catch((err) => console.log(err));
}

function updateEmployeeController(targetEmployee) {
  ui.toggleUpdateButton(targetEmployee);

  if (updateState === null) {
    updateState = {
      updateId: targetEmployee.children[3].textContent,
      updateParent: targetEmployee,
    };
  } else {
    updateState = null;
  }
}

function updateEmployee() {
  if (updateState) {
    const data = {
      name: nameInput.value.trim(),
      department: departmentInput.value.trim(),
      salary: Number(salaryInput.value.trim()),
      age: Number(ageInput.value.trim()),
      city: cityInput.value.trim(),
    };

    request
      .put(updateState.updateId, data)
      .then((updatedEmployee) => {
        ui.updateEmployeeOnUI(updatedEmployee, updateState.updateParent);
      })
      .catch((err) => console.log(err));
  }
}

// request
//   .get()
//   .then((employees) => console.log(employees))
//   .catch((err) => console.log(err));

// request
//   .post({
//     name: "Mesii MEsi",
//     department: "Futbolcu",
//     age: 35,
//     city: "Roca",
//     salary: 1554000,
//   })
//   .then((employees) => console.log(employees))
//   .catch((err) => console.log(err));

// request
//   .put(98774, { name: "Emir Ay", department: "Bilişim", salary: 30000 })
//   .then((employees) => console.log(employees))
//   .catch((err) => console.log(err));

// request
//   .delete(98769)
//   .then((employees) => console.log(employees))
//   .catch((err) => console.log(err));
