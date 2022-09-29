const navIcon2 = document.querySelector("#nav-icon2");

navIcon2.addEventListener("click", () => {
  navIcon2.classList.toggle("open");
});

// animações icon-box
// animação eventos noturnos
const mouseLua = document.getElementById("mouseLua");
const moon = document.getElementById("nightEvents");
mouseLua.addEventListener("mouseover", (trocarIcone) => {
  nightEvents.classList.remove("bi-moon");
  nightEvents.classList.add("bi-moon-stars-fill");
});
mouseLua.addEventListener("mouseout", (voltarIcone) => {
  nightEvents.classList.remove("bi-moon-stars-fill");
  nightEvents.classList.add("bi-moon");
});
onmouseout = (voltarIcone) => {};

// animação eventos diurnos

const mouseSun = document.getElementById("mouseSun");
const sun = document.getElementById("sun");
mouseSun.addEventListener("mouseover", (trocarIcone) => {
  sun.classList.remove("bi-sunrise");
  sun.classList.add("bi-sunrise-fill");
});
mouseSun.addEventListener("mouseout", (voltarIcone) => {
  sun.classList.remove("bi-sunrise-fill");
  sun.classList.add("bi-sunrise");
});
onmouseout = (voltarIcone) => {};

// animação na natureza

const mouseNature = document.getElementById("mouseNature");
const tree = document.getElementById("tree");
mouseNature.addEventListener("mouseover", (trocarIcone) => {
  tree.classList.remove("bi-tree");
  tree.classList.add("bi-tree-fill");
});
mouseNature.addEventListener("mouseout", (voltarIcone) => {
  tree.classList.remove("bi-tree-fill");
  tree.classList.add("bi-tree");
});
onmouseout = (voltarIcone) => {};

// animação smooth ao clicar

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
