// contact.js
import { content } from "./menu";
const contact = document.querySelector("#contact");

const showContact = function () {
    content.innerHTML = "";
}

contact.addEventListener('click', showContact);

export {showContact};

