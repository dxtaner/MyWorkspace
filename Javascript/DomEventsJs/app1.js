const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
  console.log("Submit Eventi Tıklandı");

  e.preventDefault();
}

// filterInput.addEventListener("focus", function (e) {
//   console.log("e", e);
//   console.log("e.type", e.type);
//   console.log("e.target", e.target);
//   console.log("e.target.placeholder", e.target.placeholder);
//   console.log("e.target.className", e.target.className);
// });

// filterInput.onfocus = function () {
//   console.log("Nasılsın");
// };
