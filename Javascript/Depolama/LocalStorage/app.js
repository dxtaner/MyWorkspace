document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo");
  const todoList = document.getElementById("todo-list");
  const filterInput = document.getElementById("filter");
  const clearButton = document.getElementById("clear-todos");

  // Sayfa yüklendiğinde localStorage'dan görevleri getir
  loadTodos();

  // Form gönderildiğinde yeni bir görev ekleyin
  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoText = todoInput.value;
    if (todoText !== "") {
      addTodoToLocalStorage(todoText);
      todoInput.value = "";
      loadTodos();
    }
    // alert("görev eklendi.");
  });

  // Görevlerin üzerine tıklanıldığında veya sil düğmesine basıldığında işlemleri yapın
  todoList.addEventListener("click", function (e) {
    const parentLI = e.target.parentElement.parentElement;
    const todoText = parentLI.textContent.trim();
    console.log(todoText);

    deleteTodoFromLocalStorage(todoText);
    loadTodos();
    alert("Görev başarıyla silindi.");
  });

  // Filtreleme işlemini gerçekleştirin
  filterInput.addEventListener("input", function () {
    const filterText = filterInput.value.toLowerCase();
    filterTodos(filterText);
  });

  // Tüm görevleri temizle
  clearButton.addEventListener("click", function () {
    clearTodosFromLocalStorage();
    loadTodos();
    alert("Tüm görevler temizlendi.");
  });

  // Local Storage işlemleri
  function getTodosFromLocalStorage() {
    const todosJSON = localStorage.getItem("todos");
    return todosJSON ? JSON.parse(todosJSON) : [];
  }

  function addTodoToLocalStorage(todoText) {
    const todos = getTodosFromLocalStorage();
    todos.push({ text: todoText, completed: false });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function deleteTodoFromLocalStorage(todoText) {
    const todos = getTodosFromLocalStorage();
    const filteredTodos = todos.filter((todo) => todo.text !== todoText);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  }

  function clearTodosFromLocalStorage() {
    localStorage.removeItem("todos");
  }

  function loadTodos() {
    const todos = getTodosFromLocalStorage();
    let html = "";
    todos.forEach((todo) => {
      html += `<li class="list-group-item ${
        todo.completed ? "completed" : ""
      }">${
        todo.text
      }<a href="#" class="delete-item float-right"><i class="fa fa-remove"></i></a></li>`;
    });
    todoList.innerHTML = html;
  }

  function toggleTodoStatus(todoElement) {
    const todos = getTodosFromLocalStorage();
    const todoText = todoElement.innerText.trim();
    const todoIndex = todos.findIndex((todo) => todo.text === todoText);
    if (todoIndex !== -1) {
      todos[todoIndex].completed = !todos[todoIndex].completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      todoElement.classList.toggle("completed");
    }
  }

  function filterTodos(filterText) {
    const todos = getTodosFromLocalStorage();
    todos.forEach((todo) => {
      const todoText = todo.text.toLowerCase();
      const isVisible = todoText.includes(filterText);
      const todoElement = Array.from(todoList.children).find(
        (element) => element.innerText.trim() === todo.text
      );
      if (todoElement) {
        todoElement.style.display = isVisible ? "block" : "none";
      }
    });
  }
});
