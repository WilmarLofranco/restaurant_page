// home.js
import { content } from "./menu";
const home = document.querySelector("#home");
import heroImg from "./imgs/hero.jpg";
import krakelLoc from "./imgs/krakel.png"

const showHome = function () {
    content.innerHTML = "";

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homeContainer");

    const hero = document.createElement("div");
    hero.classList.add("hero");
    homeContainer.appendChild(hero);
    const heroImage = document.createElement("img");
    heroImage.src = heroImg;
    heroImage.style.width = "70%";
    heroImage.style.height = "70%";
    hero.appendChild(heroImage);
    const intro = document.createElement("p");
    intro.textContent = "Welcome to The Krakel Resto-Bar, located in the heart of Manolo Fortich, Bukidnon. We take pride in serving the finest seafood dishes that will leave you craving for more. Join us for an unforgettable dining experience where fresh flavors and quality come together in every bite.";
    hero.appendChild(intro);

    const loc = document.createElement("div");
    loc.classList.add("location");
    homeContainer.appendChild(loc);
    const textLoc = document.createElement("p");
    textLoc.innerHTML = "<h3>LOCATION</h1>Upper Pol-oton, Tankulan<br>Manolo Fortich, Bukidnon, 8703<br>House #1463";
    loc.appendChild(textLoc);

    const krakelLocation = document.createElement("img");
    krakelLocation.src = krakelLoc;
    krakelLocation.style.width = "40%";
    krakelLocation.style.height = "80%";
    loc.appendChild(krakelLocation);

    const hoursOpen = document.createElement("div");
    hoursOpen.classList.add("hoursOpen");
    homeContainer.appendChild(hoursOpen);
    const openTime = document.createElement("p");
    openTime.innerHTML = "<strong><em>~Monday - Saturday: 10am - 10pm / Sunday: Closed~</em></strong>";
    openTime.style.color = "white";
    openTime.style.textAlign = "center";
    hoursOpen.appendChild(openTime);

    content.appendChild(homeContainer);
}

home.addEventListener('click', showHome);

export {showHome};