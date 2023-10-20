import foodPlaceholderImg from "../assets/RestaurantEatingSet.png"

function menuPageRender() {
    const menuItems = [
        {
            id: "first",
            name: "Trailblazing Tex-Mex Tacos",
            price: "$12.99"
        },
        {
            id: "second",
            name: "Pixel-Perfect Pizza Pies",
            price: "$15.99"
        },
        {
            id: "third",
            name: "Gourmet Giga-Burgers",
            price: "$16.99"
        },
        {
            id: "fourth",
            name: "Data-Driven Sushi Symphony",
            price: "$18.99"
        },
        {
            id: "fifth",
            name: "Dessert Hacks Extravaganza",
            price: "$9.99"
        }
    ];

    const contentWrapper = document.getElementById("content");
    contentWrapper.appendChild(document.createElement("div")).classList.add("menu-container");

    const menuContainer = document.querySelector(".menu-container");

    for (let i = 0; i < menuItems.length; i++) {
        menuContainer.appendChild(document.createElement("article"));
    };
    const menuCards = menuContainer.querySelectorAll("article");

    menuItems.forEach((item, index) => {
        menuCards[index].appendChild(document.createElement("div")).id = `${item.id}ItemName`;
        const itemName = document.querySelector(`#${item.id}ItemName`);
        itemName.classList.add(`item-name`);
        itemName.appendChild(document.createElement(`img`)).classList.add(`food-image`);
        itemName.appendChild(document.createElement(`h1`)).innerText = `${item.name}`;
        menuCards[index].appendChild(document.createElement(`h1`)).id = `${item.id}ItemPrice`;
        const itemPrice = document.querySelector(`#${item.id}ItemPrice`);
        itemPrice.classList.add(`item-price`);
        itemPrice.innerText = `${item.price}`;
    });

    const foodImage = document.querySelectorAll(".food-image");
    foodImage.forEach(card => {
        card.src = foodPlaceholderImg;
        card.alt = "Food image placeholder.";
    });
}

export default menuPageRender;