// contact.js
import { content } from "./menu";
const contact = document.querySelector("#contact");

const showContact = function () {
    content.innerHTML = "";

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");
    contactContainer.style.backgroundImage = "url('./imgs/contact.png')";
    contactContainer.style.backgroundSize = "cover"; // Change to 'cover' if needed
    contactContainer.style.width = "100%"; // Set width
    contactContainer.style.height = "100vh"; // Set heigh
    content.appendChild(contactContainer);
}

contact.addEventListener('click', showContact);

export {showContact};

