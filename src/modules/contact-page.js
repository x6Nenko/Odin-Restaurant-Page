function contactPageRender() {
    const contentWrapper = document.getElementById("content");
    contentWrapper.appendChild(document.createElement("div")).classList.add("contact-container");

    const contactContainer = document.querySelector(".contact-container");
    contactContainer.appendChild(document.createElement("h1")).innerText = "Contact page";
}

export default contactPageRender;