import HeroImage from "../assets/hero.jpg";

function heroPageRender() {
    const contentWrapper = document.getElementById("content");
    contentWrapper.appendChild(document.createElement("main")).classList.add("hero-container");

    const heroContainer = document.querySelector(".hero-container");
    heroContainer.appendChild(document.createElement("img")).classList.add("hero-image");

    const heroImage = document.querySelector(".hero-image");
    heroImage.src = HeroImage;
    heroImage.alt = "Restaurant";

    heroContainer.appendChild(document.createElement("article")).classList.add("hero-text");

    const heroText = document.querySelector(".hero-text");
    heroText.appendChild(document.createElement("h1")).innerHTML = "Savor Culinary Delights for the Internet Cowboys!";
    heroText.appendChild(document.createElement("p")).innerHTML = "Indulge in Exquisite Flavors and Unforgettable Dining Experiences.";
};

export default heroPageRender;