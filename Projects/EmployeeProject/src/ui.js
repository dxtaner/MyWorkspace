export class UI {
  constructor() {
    this.nameInput = document.getElementById("name");
    this.departmentInput = document.getElementById("department");
    this.salaryInput = document.getElementById("salary");
    this.ageInput = document.getElementById("age");
    this.cityInput = document.getElementById("city");
    this.employeesList = document.getElementById("employees");
    this.updateEmployeeButton = document.getElementById("update");
  }

  addAllEmployeesToUI(employees) {
    let result = "";

    employees.forEach((employee) => {
      result += `
          <tr>                                 
              <td>${employee.name}</td>
              <td>${employee.department}</td>
              <td>${employee.salary}</td>
              <td>${employee.id}</td>
              <td>${employee.age}</td>
              <td>${employee.city}</td>
              <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td> 
              <td><a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
          </tr>
        `;
    });

    this.employeesList.innerHTML = result;
  }

  clearInputs() {
    this.nameInput.value = "";
    this.departmentInput.value = "";
    this.salaryInput.value = "";
    this.ageInput.value = "";
    this.cityInput.value = "";
  }

  addEmployeeToUI(employee) {
    this.employeesList.innerHTML += `
          <tr>                                 
              <td>${employee.name}</td>
              <td>${employee.department}</td>
              <td>${employee.salary}</td>
              <td>${employee.id}</td>
              <td>${employee.age}</td>
              <td>${employee.city}</td>
              <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td> 
              <td><a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
          </tr>
      `;
  }

  deleteEmployeeFromUI(element) {
    if (confirm("Çalışanı silmek istediğinizden emin misiniz?")) {
      element.remove();
      alert("Çalışan başarıyla silindi.");
    }
  }

  toggleUpdateButton(target) {
    if (this.updateEmployeeButton.style.display === "none") {
      this.updateEmployeeButton.style.display = "block";
      this.addEmployeeInfoToInputs(target);
    } else {
      this.updateEmployeeButton.style.display = "none";
      this.clearInputs();
    }
  }

  addEmployeeInfoToInputs(target) {
    const children = target.children;
    this.nameInput.value = children[0].textContent;
    this.departmentInput.value = children[1].textContent;
    this.salaryInput.value = children[2].textContent;
    this.ageInput.value = children[4].textContent;
    this.cityInput.value = children[5].textContent;
  }

  updateEmployeeOnUI(employee, parent) {
    parent.innerHTML = `
          <tr>                                 
              <td>${employee.name}</td>
              <td>${employee.department}</td>
              <td>${employee.salary}</td>
              <td>${employee.id}</td>
              <td>${employee.age}</td>
              <td>${employee.city}</td>
              <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td> 
              <td><a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
          </tr>
      `;
  }
}
