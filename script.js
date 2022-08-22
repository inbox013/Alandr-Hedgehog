let catalog = document.querySelector(".catalog");
let arrow = document.querySelector(".catalog-before");
let catalogList = document.querySelector(".sub-catalog__list");

catalog.addEventListener("click", function (e) {
  e.preventDefault();
  catalogList.classList.toggle("show");
  if (catalogList.classList.contains("show")) {
    arrow.style.transform = "rotate(90deg)";
  } else {
    arrow.style.transform = "rotate(0deg)";
  }
});

let btns = document.querySelectorAll(".btns");

btns.forEach((b) => b.addEventListener("click", selectBtns));

function selectBtns() {
  this.classList.toggle("select");
}
