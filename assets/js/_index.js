// windowLoad
let windowHeightMin = window.innerWidth <= 760;

function windowLoad() {
  windowHeightMin === true
    ? window.addEventListener("load", closeNav(), false)
    : window.addEventListener("load", openNav(), true);
}

const openIcon = document.querySelector("#open-icon");
const closeIcon = document.querySelector("#close-icon");
const navList = document.querySelector(".menuNav");
const navListLi = navList.querySelector(".liNav");

function openNav() {
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  navList.style.display = "block";
}

function closeNav() {
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
  navList.style.display = "none";
}
