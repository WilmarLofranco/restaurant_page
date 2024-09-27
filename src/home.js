// home.js
import { content } from "./menu";
const home = document.querySelector("#home");
import image from "./imgs/hero.jpg"

const showHome = function () {
    content.innerHTML = "";

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homeContainer");

    const hero = document.createElement("div");
    hero.classList.add("hero");
    homeContainer.appendChild(hero);
    const heroImage = document.createElement("img");
    heroImage.src = image;
    heroImage.style.width = "70%";
    heroImage.style.height = "70%";
    hero.appendChild(heroImage);
    const intro = document.createElement("p");
    intro.textContent = "Welcome to The Krakel Resto-Bar, located in the heart of Manolo Fortich, Bukidnon. We take pride in serving the finest seafood dishes that will leave you craving for more. Join us for an unforgettable dining experience where fresh flavors and quality come together in every bite.";
    hero.appendChild(intro);

    const loc = document.createElement("div");
    loc.classList.add("location");
    homeContainer.appendChild(loc);

    const hoursOpen = document.createElement("div");
    hoursOpen.classList.add("hoursOpen");
    homeContainer.appendChild(hoursOpen);

    content.appendChild(homeContainer);
}

home.addEventListener('click', showHome);

export {showHome};