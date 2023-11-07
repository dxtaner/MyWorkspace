const todoInput = document.getElementById("todo");

// Özellikleri Değiştirmek İçin Tek Bir Element Kullanın
todoInput.classList.add("newClass", "newClass2");
todoInput.classList.remove("form-control");
todoInput.placeholder = "Ekle 123";
todoInput.setAttribute("title", "Ekle Sayfası");
todoInput.removeAttribute("name");

console.log(todoInput);

const hasNameAttribute = todoInput.hasAttribute("name");
console.log("Has 'name' attribute:", hasNameAttribute);
