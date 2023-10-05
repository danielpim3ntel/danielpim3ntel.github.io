let checkButton = document.getElementById("check");
let main = document.getElementsByTagName("main");
let menuButtons = document.getElementsByClassName("navbar-item");
let navbar = document.getElementsByClassName("navbar");

main[0].style.transition = "padding-top 0.6s";

Array.from(menuButtons).forEach(function (element) {
  element.addEventListener("click", function () {
    checkButton.checked = false;
    main[0].style.paddingTop = "10rem";
    navbar[0].style.height = "0";
  });
});

checkButton.addEventListener("change", function () {
  if (this.checked) {
    main[0].style.paddingTop = "23rem";
    navbar[0].style.height = "13.7rem";
  } else {
    main[0].style.paddingTop = "10rem";
    navbar[0].style.height = "0";
  }
});
