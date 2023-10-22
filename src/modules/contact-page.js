function contactPageRender() {
    const contentWrapper = document.getElementById("content");
    contentWrapper.appendChild(document.createElement("div")).classList.add("contact-container");

    const contactContainer = document.querySelector(".contact-container");
    contactContainer.appendChild(document.createElement("div")).classList.add("contact-wrapper");

    const contactWrapper = document.querySelector(".contact-wrapper");
    contactWrapper.appendChild(document.createElement("article")).classList.add("contact-heading");

    const contactHeading = document.querySelector(".contact-heading");
    contactHeading.appendChild(document.createElement("h1")).innerText = "Contact Us";
    contactHeading.appendChild(document.createElement("p")).innerText = "Welcome to Savor Culinary Delights for the Internet Cowboys! We're thrilled to hear from you. Whether you have a question, feedback, or a special request, please don't hesitate to get in touch with us.";

    contactWrapper.appendChild(document.createElement("div")).classList.add("contact-info-container");
    const infoContainer = document.querySelector(".contact-info-container");
    infoContainer.appendChild(document.createElement("article")).classList.add("contact-info");
    infoContainer.appendChild(document.createElement("article")).classList.add("business-hours");

    const contactInfo = document.querySelector(".contact-info");
    const businessHours = document.querySelector(".business-hours");

    contactInfo.innerHTML = "<ul><li><b>Address:</b> 123 Digital Range Road, Cyber City, Netville</li> <li><b>Phone:</b> (555) 123-4567</li> <li><b>Email:</b> info@internetcowboyrestaurant.com</li></ul>";
    businessHours.innerHTML = "<ul><li><b>Monday - Friday:</b> 11:00 AM - 10:00 PM</li> <li><b>Saturday - Sunday:</b> 10:00 AM - 11:00 PM</li></ul>"
}

export default contactPageRender;