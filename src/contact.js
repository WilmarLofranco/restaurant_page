// contact.js
import { content } from "./menu";
const contact = document.querySelector("#contact");

const showContact = function () {
    content.innerHTML = "";

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");
    content.appendChild(contactContainer);
}

contact.addEventListener('click', showContact);

export {showContact};

