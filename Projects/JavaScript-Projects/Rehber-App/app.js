class Data {
  constructor(name, surname, email, formBtn) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.formBtn = formBtn;
  }
}

class View {
  constructor() {
    // Tanımlamalar
    this.name = document.getElementById("name");
    this.surname = document.getElementById("surname");
    this.email = document.getElementById("email");
    this.formBtn = document.getElementById("formBtn");
    this.formClr = document.getElementById("formClr");
    this.form = document.querySelector("form");
    this.dataTable = document.querySelector("tbody");

    this.dataTr = undefined;
    this.store = new Store();
    // Dinlemeler
    this.form.addEventListener("keyup", this.cancel.bind(this));
    this.formBtn.addEventListener("click", this.formSubmit.bind(this));
    this.formClr.addEventListener("click", this.clearForm.bind(this));
    this.dataTable.addEventListener("click", this.crudData.bind(this));

    // İlk Açılış localStorage'i tabloya yazdır
    this.storeDataToView();
  }
  cancel() {
    console.log(this.name.value);
    if (
      this.name.value.length > 0 ||
      this.surname.value.length > 0 ||
      this.email.value.length > 0
    ) {
      this.formClr.parentElement.removeAttribute("hidden");
    } else {
      this.formClr.parentElement.setAttribute("hidden", "on");
    }
  }

  clearForm() {
    this.name.value = null;
    this.surname.value = null;
    this.email.value = null;
    this.formClr.parentElement.setAttribute("hidden", "on");
    document.querySelector("#formBtn").textContent = "Kayıt Et";
    document.querySelector("#formBtn").classList.replace("update", "create");
    document.querySelector("#formBtn").removeAttribute("disabled");
  }

  storeDataToView() {
    this.store.allData.forEach((data) => this.dataAppentView(data));
  }

  dataAppentView(data) {
    const dataTr = document.createElement("tr");
    dataTr.innerHTML = `<td>${data.name}</td><td>${data.surname}</td><td>${data.email}</td><td class="text-center"><i id="edit" class="far fa-edit fs-5"></i>&nbsp;<i id="delete" class="far fa-trash-alt fs-5"></i></td>`;
    this.dataTable.appendChild(dataTr);
  }

  dataDeleteView() {
    this.dataTr.remove();
    this.store.deleteData(this.dataTr.cells[2].textContent);
  }

  formSubmit(e) {
    e.preventDefault();
    let result = { status: true };
    const newData = new Data(
      this.name.value,
      this.surname.value,
      this.email.value,
      this.formBtn.value
    );
    newData && result.status ? (result = Validation.freeSpace(newData)) : null;
    newData && result.status
      ? (result = Validation.stringFixed(newData))
      : null;
    newData && result.status
      ? (result = Validation.validateEmail(newData.email))
      : null;
    newData && result.status
      ? (result = this.store.findData(newData.email))
      : null;
    // Validation Başarılı
    if (result.status) {
      if (newData.formBtn === "create") {
        if (result.status)
          // Veriyi Tabloya ekler
          this.dataAppentView(newData);
        // Veriyi LocalStorage'e ekler
        this.store.saveData(newData);
        // Kayıttan sonra form iputlarını boşaltır
        this.clearForm();
        this.statusMessage({
          status: true,
          message: `İsim: ${newData.name.fontcolor(
            "blue"
          )} Soyisim: ${newData.surname.fontcolor(
            "blue"
          )}<br>E-mail: ${newData.email.fontcolor(
            "blue"
          )} olarak yeni bir kişi eklendi.`,
        });
      } else if (newData.formBtn === "update") {
        this.dataDeleteView();
        // Veriyi Tabloya ekler
        this.dataAppentView(newData);
        // Veriyi LocalStorage'e ekler
        this.store.saveData(newData);
        // Kayıttan sonra form iputlarını boşaltır
        this.clearForm();
        this.statusMessage({
          status: true,
          message: `İsim: ${newData.name.fontcolor(
            "blue"
          )} Soyisim: ${newData.surname.fontcolor(
            "blue"
          )}<br>E-mail: ${newData.email.fontcolor("blue")} olarak güncellendi.`,
        });
      }
    } else {
      this.statusMessage(result);
    }
  }

  crudData(e) {
    if (e.target.id === "edit") {
      this.dataTr = e.target.parentElement.parentElement;
      this.formBtn.textContent = "düzenle";
      this.formBtn.value = "update";
      this.name.value = this.dataTr.cells[0].textContent;
      this.surname.value = this.dataTr.cells[1].textContent;
      this.email.value = this.dataTr.cells[2].textContent;
      this.cancel();
    } else if (e.target.id === "delete") {
      this.dataTr = e.target.parentElement.parentElement;
      this.dataDeleteView();
      this.clearForm();
      this.statusMessage({
        status: true,
        message: `İsim: ${this.dataTr.cells[0].textContent.fontcolor(
          "blue"
        )} Soyisim: ${this.dataTr.cells[1].textContent.fontcolor(
          "blue"
        )}<br>E-mail: ${this.dataTr.cells[2].textContent.fontcolor(
          "blue"
        )} bilgilerine sahip kişi silindi.`,
      });
    }
  }

  statusMessage(result) {
    this.formBtn.setAttribute("disabled", "on");
    this.formBtn.innerHTML = `waıt&nbsp;<div class="sk-chase">
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                        </div>`;
    const info = document.createElement("div");
    info.classList.add("alert", "shadow-lg", "fw-bolder");
    // Ture ise success // false ise danger
    info.classList.add(
      result.status ? "alert-success" : "alert-danger",
      result.status ? "text-success" : "text-danger"
    );
    info.setAttribute("role", "alert");

    info.innerHTML = `<i class="fa ${
      result.status ? "fa-check " : "fa-times"
    }">&nbsp;</i>${result.message}`;

    document.querySelector("#alert").append(info);

    $("#alert").slideDown(600, function () {});
    $("#alert")
      .delay(2000)
      .slideUp(600, function () {
        document.querySelector(".alert").remove();
        document.querySelector("#formBtn").textContent = "Kayıt Et";
        document
          .querySelector("#formBtn")
          .classList.replace("update", "create");
        document.querySelector("#formBtn").removeAttribute("disabled");
      });
  }
}

class Validation {
  // TODO Objelerde in kulanımı
  // TODO Kayıtlı Veri Validate
  static freeSpace(datas) {
    // TODO Boş Alan Validate  // Objelerde in kulanımı
    for (var data in datas) {
      if (datas[data].length === 0 || datas[data].length[1] === " ") {
        switch (data) {
          case "name":
            data = "İsim";
            break;
          case "surname":
            data = "Soyisim";
            break;
          case "email":
            data = "E-mail";
            break;
        }
        return {
          status: false,
          message: `${data} alanı veya  boş bırakılamaz.`,
        };
      }
    }
    return { status: true, message: `Sıkıntı Yok` };
  }

  static stringFixed(datas) {
    // TODO Metin düzeltme Validate
    for (var data in datas) {
      if (datas[data]) {
        if (data === "email") {
          datas[data] = datas[data].trimStart();
          datas[data] = this.toLowerMail(datas[data]);
        } else {
          if (data === "formBtn") continue;
          datas[data] = datas[data].trimStart();
          datas[data] = this.toTitleCase(datas[data]);
        }
      }
    }
    return { status: true, message: `Sıkıntı Yok` };
  }

  static validateEmail(email) {
    const regEx =
      /^(([^<>()[\]\\.,;:ıİğĞüÜşŞöÖçÇ\s@"]+(\.[^<>()[\]\\.,;:ıİğĞüÜşŞöÖçÇ\s@"]+)*)|(".+"))@((\[[0-9ıİğĞüÜşŞöÖçÇ]{1,3}\.[0-9ıİğĞüÜşŞöÖçÇ]{1,3}\.[0-9ıİğĞüÜşŞöÖçÇ]{1,3}\.[0-9ıİğĞüÜşŞöÖçÇ]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(String(email))) {
      return { status: true, message: "Sikinti yok." };
    } else {
      return {
        status: false,
        message: "Geçersiz bir e-posta adresi girdiniz!",
      };
    }
  }

  static toLowerMail(str) {
    return str.replace(/\S*/g, function (txt) {
      return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();
    });
  }

  static toTitleCase(str) {
    return str.replace(/\S*/g, function (txt) {
      return (
        txt.charAt(0).toLocaleUpperCase() + txt.substr(1).toLocaleLowerCase()
      );
    });
  }
}

class Store {
  // Sayfa çalıştığında veri getirir.
  constructor() {
    this.allData = this.getData();
  }

  findData(email) {
    if (this.allData.find((data) => data.email === email)) {
      return {
        status: false,
        message: `${email.fontcolor(
          "blue"
        )} Önceden kayıt edilmiş bir E-mail dir.`,
      };
    } else {
      return { status: true };
    }
  }

  getData() {
    if (localStorage.getItem("LSRehber") == null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("LSRehber"));
    }
  }

  saveData(data) {
    this.allData.push(data);
    localStorage.setItem("LSRehber", JSON.stringify(this.allData));
  }

  deleteData(data) {
    this.allData.forEach((value, index) => {
      if (value.email === data) {
        return this.allData.splice(index, 1);
      }
    });
    localStorage.setItem("LSRehber", JSON.stringify(this.allData));
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  const view = new View();
});
