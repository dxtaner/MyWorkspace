document.addEventListener('DOMContentLoaded', function () {
    var todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    displayTodoList(todoList);
});

document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    var todoInput = document.getElementById('todo-input');
    var todoText = todoInput.value.trim();

    if (todoText !== '') {
        var todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        todoList.push({ text: todoText, done: false });
        localStorage.setItem('todoList', JSON.stringify(todoList));

        displayTodoList(todoList);
        todoInput.value = '';

        showSuccessToast('Yeni bir görev eklendi.');
    } else {
        showErrorToast('Görev alanı boş bırakılamaz.');
    }
}

function deleteTodo(index) {
    var todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));

    displayTodoList(todoList);
}

function toggleTodoStatus(index) {
    var todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList[index].done = !todoList[index].done;
    localStorage.setItem('todoList', JSON.stringify(todoList));

    displayTodoList(todoList);
}

function displayTodoList(todoList) {
    var todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = '';

    for (var i = 0; i < todoList.length; i++) {
        var todoItem = todoList[i];

        var listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = todoItem.text;

        var closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'btn-close';
        closeButton.onclick = (function (index) {
            return function () {
                deleteTodo(index);
            };
        })(i);

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todoItem.done;
        checkbox.onclick = (function (index) {
            return function () {
                toggleTodoStatus(index);
            };
        })(i);

        listItem.appendChild(closeButton);
        listItem.appendChild(checkbox);
        todoListContainer.appendChild(listItem);
    }
}

function showSuccessToast(message) {
    var toastContainer = document.getElementById('toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-success border-0';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    toastContainer.appendChild(toast);

    var bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();

    toast.addEventListener('hidden.bs.toast', function () {
        toast.remove();
    });
}

function showErrorToast(message) {
    var toastContainer = document.getElementById('toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-danger border-0';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    toastContainer.appendChild(toast);

    var bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();

    toast.addEventListener('hidden.bs.toast', function () {
        toast.remove();
    });
}
    