function menuPageRender() {
    const contentWrapper = document.getElementById("content");
    contentWrapper.appendChild(document.createElement("div")).classList.add("menu-container");

    const menuContainer = document.querySelector(".menu-container");
    menuContainer.appendChild(document.createElement("h1")).innerText = "Menu page";
}

export default menuPageRender;