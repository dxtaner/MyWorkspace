const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// İlgili Öğeleri Kaldırma

// 1. Yöntem: Direkt remove() kullanarak
// todos[1].remove();

// 2. Yöntem: removeChild kullanarak son çocuğu kaldırma
// todoList.removeChild(todoList.lastElementChild);

// 3. Yöntem: removeChild kullanarak belirli bir öğeyi kaldırma
todoList.removeChild(todos[3]);

// Güncellenmiş öğe listesini alma
const updatedTodos = document.querySelectorAll("li.list-group-item");

console.log(updatedTodos);
console.log(todoList);
