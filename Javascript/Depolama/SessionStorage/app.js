// Butonları ve Inputları Seçmek
const addBtn = document.querySelector("#add");
const delBtn = document.querySelector("#delete");
const clearBtn = document.querySelector("#clear");
const addKeyInput = document.querySelector("#addkey");
const addValueInput = document.querySelector("#addvalue");
const deleteKeyInput = document.querySelector("#deletekey");

// Ekle düğmesine tıklama olayı ekle
addBtn.addEventListener("click", addItem);

// Sil düğmesine tıklama olayı ekle
delBtn.addEventListener("click", deleteItem);

// Hepsini Sil düğmesine tıklama olayı ekle
clearBtn.addEventListener("click", clearItems);

// Ekle düğmesine tıklanınca çalışacak işlev
function addItem() {
  const key = addKeyInput.value;
  const value = addValueInput.value;
  if (key.trim() !== "" && value.trim() !== "") {
    sessionStorage.setItem(key, value);
    addKeyInput.value = "";
    addValueInput.value = "";
  }
}

// Sil düğmesine tıklanınca çalışacak işlev
function deleteItem() {
  const key = deleteKeyInput.value;
  if (key.trim() !== "") {
    sessionStorage.removeItem(key);
    deleteKeyInput.value = "";
  }
}

// Hepsini Sil düğmesine tıklanınca çalışacak işlev
function clearItems() {
  sessionStorage.clear();
}
