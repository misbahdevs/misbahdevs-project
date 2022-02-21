// ======= KETIKA LINK ACTIVE =======
$(document).ready(function () {
  $(".list__items").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
});

// ======= TOGGLE =======
const toggle = document.querySelector(".toggle");
const list = document.querySelector(".lists");
toggle.addEventListener("click", function (e) {
  if (list.className == "lists") {
    list.setAttribute("class", "listactive");
  } else if (list.className == "listactive") {
    list.setAttribute("class", "lists");
  }
});
