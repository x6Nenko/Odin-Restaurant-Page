function menuPageRender() {
    const contentWrapper = document.getElementById("content");

    contentWrapper.appendChild(document.createElement("h1")).innerText = "Menu page";
}

export default menuPageRender;