const yeniGrvIpt = document.querySelector(".input-gorev");
const yeniGrvBtn = document.querySelector(".btn-gorev-ekle");
const gorevList = document.querySelector(".gorev-listesi");
const gorevError = document.querySelector(".feedback");

yeniGrvIpt.addEventListener("keydown", gorevVaidate);
yeniGrvBtn.addEventListener("click", gorevEkle);
gorevList.addEventListener("click", gorevSilTmm);
document.addEventListener("DOMContentLoaded", localStorageLoad);

// Yazı düzelleme
function toTitleCase(str) {
  if (str.charAt(0) === " ") {
    return str.charAt(0).replace(" ", "");
  }
  return str.replace(/\S*/g, function (txt) {
    return (
      txt.charAt(0).toLocaleUpperCase() + txt.substr(1).toLocaleLowerCase()
    );
  });
}

// Validate
function gorevVaidate(e) {
  if (
    (yeniGrvIpt.value.length >= 0 && yeniGrvIpt.value.length < 5) ||
    yeniGrvIpt.value.length > 25
  ) {
    gorevError.textContent = "Not en az 5 en fazla 25 karakter olmalıdır...";
    yeniGrvBtn.setAttribute("disabled", "");
  } else {
    gorevError.textContent = "";
    yeniGrvBtn.removeAttribute("disabled");
  }
}

function gorevSilTmm(e) {
  const clickElement = e.target;
  if (clickElement.classList.contains("btn-tmm")) {
    clickElement.parentElement.classList.toggle("pasif-gorev");
    clickElement.previousSibling.classList.toggle("pasif-gorev-tanim");
  } else if (clickElement.classList.contains("btn-sil")) {
    if (confirm("Görevi Silmek istediğinize eminmisiniz?")) {
      clickElement.parentElement.classList.toggle("kaybol");
      const taskDeleted = clickElement.parentElement.children[0].innerText;
      taskLocalStorageDelete(taskDeleted);

      clickElement.parentElement.addEventListener("transitionend", (_) =>
        clickElement.parentElement.remove()
      );
    } else {
      alert("Görev silme işlemi iptal edildi.");
    }
  }
}

function gorevEkle(e) {
  e.preventDefault();
  if (yeniGrvIpt.value.length === 0) {
    yeniGrvBtn.setAttribute("disabled", "");
    gorevError.textContent = "Boş not eklenemez...";
  } else {
    taskItemCreate(yeniGrvIpt.value);
    // Storage kayıt
    localStorageSave(yeniGrvIpt.value);
    yeniGrvIpt.value = null;
  }
}

function localStorageToArray() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasks;
}

function localStorageSave(newTasks) {
  let tasks = localStorageToArray();

  // Local Storage ye yeni görev ekleme
  tasks.push(newTasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function localStorageLoad() {
  let tasks = localStorageToArray();

  // Local Storage den listeleme
  tasks.forEach((task) => {
    taskItemCreate(task);
  });
}

function taskItemCreate(...param) {
  // Div oluşturma
  const gorevDiv = document.createElement("div");
  gorevDiv.classList.add("gorev-item");
  // Li oluşturma
  const gorevLi = document.createElement("li");
  gorevLi.classList.add("gorev-tanim");
  gorevLi.innerText = param[0];
  // Tmm btn Oluştur
  const gorevTmmBtn = document.createElement("button");
  gorevTmmBtn.classList.add("gorev-btn", "btn-tmm");
  // Tmm btn icon Oluştur
  const gorevTmmBtnIcn = document.createElement("i");
  gorevTmmBtnIcn.classList.add("far", "fa-check-square");
  // Sil btn Oluştur
  const gorevSilBtn = document.createElement("button");
  gorevSilBtn.classList.add("gorev-btn", "btn-sil");
  // Sil btn icon Oluştur
  const gorevSilBtnIcn = document.createElement("i");
  gorevSilBtnIcn.classList.add("far", "fa-trash-alt");

  // Appents
  // Dive li ekledim
  gorevDiv.appendChild(gorevLi);
  // Dive Tmm button ekledim
  gorevDiv.appendChild(gorevTmmBtn);
  // Tmm Buttona icon ekledim
  gorevTmmBtn.appendChild(gorevTmmBtnIcn);
  gorevList.appendChild(gorevDiv);
  // Dive Sil button ekledim
  gorevDiv.appendChild(gorevSilBtn);
  // Sil Buttona icon ekledim
  gorevSilBtn.appendChild(gorevSilBtnIcn);
  gorevList.appendChild(gorevDiv);
}

function taskLocalStorageDelete(task) {
  let tasks = localStorageToArray();

  // Slice ile item sil
  tasks.splice(tasks.indexOf(task), 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
