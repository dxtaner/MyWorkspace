let value;

// Belirtilen öğeleri seçin
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

// Element Özellikleri
value = {
  todoList,
  todo,
  cardrow,
};

// Child Nodes - Text Dahil
const textNodes = Array.from(todoList.childNodes).filter(
  (node) => node.nodeType === Node.TEXT_NODE
);

// Children - Element
const thirdChild = todoList.children[2];
thirdChild.textContent = "Değişti";

// İlk ve son element çocuklarını alın
const firstElementChild = todoList.firstElementChild;
const lastElementChild = todoList.lastElementChild;
const childElementCount = todoList.childElementCount;

value = {
  textNodes,
  thirdChild,
  firstElementChild,
  lastElementChild,
  childElementCount,
};

// Element Kardeşleri
const previousSibling = todo.previousElementSibling;
const nextSibling = todo.nextElementSibling;
const nextSibling2 = nextSibling.nextElementSibling;
const previousSibling2 = previousSibling
  ? previousSibling.previousElementSibling
  : null;

value = {
  previousSibling,
  nextSibling,
  nextSibling2,
  previousSibling2,
};

console.log("value", value);
