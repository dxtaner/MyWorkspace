// Element Id'ye Göre Seçme
let element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Element Class'a Göre Seçme
element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

// Element Tag'e Göre Seçme
element = document.getElementsByTagName("div");

// Query Selector - CSS Seçicisi - Tek Bir Element
element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");
element = document.querySelector("div");

// QuerySelectorAll - Tüm Elementleri Seçme (Node List Olarak)
const elements = document.querySelectorAll(".list-group-item");

elements.forEach(function (el) {
  console.log("el", el);
});

console.log("element", element);
