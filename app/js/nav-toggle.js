const navBar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navbar__links");
const navToggle = document.querySelector(".navbar__hamburger");
const body = document.querySelector("body");
const html = document.querySelector("html");

let pricingClass = document.querySelector(".subnav__link--pricing");
let specsClass = document.querySelector(".subnav__link--specs");

// toggles the navbar on tablet/mobile
navToggle.addEventListener("click", () => {
  const visibility = navLinks.getAttribute("data-visible");
  const expanded = navToggle.getAttribute("aria-expanded");

  if (visibility === "false") {
    navLinks.setAttribute("data-visible", true);
  } else {
    navLinks.setAttribute("data-visible", false);
  }

  if (expanded === "true") {
    html.classList.remove("no-scroll");
    navToggle.setAttribute("aria-expanded", false);
    navLinks.classList.toggle("show");
  } else {
    html.classList.add("no-scroll");
    navToggle.setAttribute("aria-expanded", true);
    navLinks.classList.toggle("show");
  }
});

// changes the name of the subnav links on mobile
window.matchMedia("(max-width: 450px)").onchange = (e) => {
  if (e.matches) {
    specsClass.innerHTML = "Specs";
  } else {
    specsClass.innerHTML = "Specifications";
  }
};
