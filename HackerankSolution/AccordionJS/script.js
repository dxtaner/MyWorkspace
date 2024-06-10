document.addEventListener("DOMContentLoaded", function () {
  var accordionItems = document.querySelectorAll(".accordion");

  for (var i = 1; i < accordionItems.length; i++) {
    accordionItems[i].querySelector(".description").style.display = "none";
  }

  var firstItemTitleSection = accordionItems[0].querySelector(".title-section");
  firstItemTitleSection.querySelector(".collapse-icon").style.display = "block";

  accordionItems.forEach(function (item) {
    var titleSection = item.querySelector(".title-section");
    var expandIcon = titleSection.querySelector(".expand-icon");
    var collapseIcon = titleSection.querySelector(".collapse-icon");

    expandIcon.addEventListener("click", function () {
      collapseAll();
      item.querySelector(".description").style.display = "block";
      collapseIcon.style.display = "block";
      expandIcon.style.display = "none";
    });

    collapseIcon.addEventListener("click", function () {
      item.querySelector(".description").style.display = "none";
      collapseIcon.style.display = "none";
      expandIcon.style.display = "block";
    });
  });

  function collapseAll() {
    accordionItems.forEach(function (item) {
      item.querySelector(".description").style.display = "none";
      item.querySelector(".expand-icon").style.display = "block";
      item.querySelector(".collapse-icon").style.display = "none";
    });
  }
});
