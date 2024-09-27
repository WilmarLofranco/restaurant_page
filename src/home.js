import { content } from "./menu";
const home = document.querySelector("#home");

const showHome = function () {
    content.innerHTML = "";

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homeContainer");

    const hero = document.createElement("div");
    hero.classList.add("hero");
    homeContainer.appendChild(hero);
    const heroImage = document.createElement("img");
    heroImage.src = "./imgs/belly.jpg";
    heroImage.alt = "Hero Image";
    heroImage.style.width = "80%";
    heroImage.style.height = "80%";
    hero.appendChild(heroImage);

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