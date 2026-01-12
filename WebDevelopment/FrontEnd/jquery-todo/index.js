// Sayfa yüklendiğinde çalışsın
$(document).ready(function () {
  // ➕ Butona tıklayınca görev ekle
  $("#add-btn").click(function () {
    addTodo();
  });

  // ⌨️ Enter'a basınca görev ekle
  $("#todo-input").keypress(function (event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });

  // ✅ Göreve tıklayınca tamamlandı / geri al
  $(document).on("click", "li", function () {
    $(this).toggleClass("completed");
  });

  // ❌ Göreve çift tıklayınca sil (animasyonlu)
  $(document).on("dblclick", "li", function () {
    $(this).fadeOut(300, function () {
      $(this).remove();
    });
  });

  // 🔧 Görev ekleme fonksiyonu
  function addTodo() {
    let todoText = $("#todo-input").val().trim();

    if (todoText !== "") {
      $("#todo-list").append("<li>" + todoText + "</li>");
      $("#todo-input").val("");
    }
  }
});
