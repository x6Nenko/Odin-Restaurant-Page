import heroPage from "./modules/hero-page";
import contactPage from "./modules/contact-page"
import menuPage from "./modules/menu-page"
import './style.css';

const contentWrapper = document.getElementById("content");
contentWrapper.appendChild(document.createElement("nav"));

const nav = document.querySelector("nav");

heroPage();
menuPage();
contactPage();

const heroContent = document.querySelector(".hero-container");

const menuContent = document.querySelector(".menu-container");
menuContent.style.display = "none";

const contactContent = document.querySelector(".contact-container");
contactContent.style.display = "none";

nav.appendChild(document.createElement("a")).id = "heroLink";
const heroLink = document.getElementById("heroLink");
heroLink.innerText = "Home";
heroLink.href = "#";
heroLink.classList.add("active");
heroLink.addEventListener("click", function() {
    heroContent.style.display = "flex";
    menuContent.style.display = "none";
    contactContent.style.display = "none";

    heroLink.classList.add("active");
    menuLink.classList.remove("active");
    contactLink.classList.remove("active");
});

nav.appendChild(document.createElement("a")).id = "menuLink";
const menuLink = document.getElementById("menuLink");
menuLink.innerText = "Menu";
menuLink.href = "#";
menuLink.addEventListener("click", function() {
    heroContent.style.display = "none";
    menuContent.style.display = "flex";
    contactContent.style.display = "none";

    heroLink.classList.remove("active");
    menuLink.classList.add("active");
    contactLink.classList.remove("active");
});

nav.appendChild(document.createElement("a")).id = "contactLink";
const contactLink = document.getElementById("contactLink");
contactLink.innerText = "Contact";
contactLink.href = "#";
contactLink.addEventListener("click", function() {
    heroContent.style.display = "none";
    menuContent.style.display = "none";
    contactContent.style.display = "flex";

    heroLink.classList.remove("active");
    menuLink.classList.remove("active");
    contactLink.classList.add("active");
});
