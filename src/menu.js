// menu.js
const content = document.querySelector("#content");
const menu = document.querySelector("#menu");

const showMenu =  function () {
    content.innerHTML= "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");

    const kinilaw = document.createElement("div");
    kinilaw.classList.add("kinilaw");
    menuContainer.appendChild(kinilaw);

    const tinola = document.createElement("div");
    tinola.classList.add("tinola");
    menuContainer.appendChild(tinola);

    const sisig = document.createElement("div");
    sisig.classList.add("sisig");
    menuContainer.appendChild(sisig);

    const sashimi = document.createElement("div");
    sashimi.classList.add("sashimi");
    menuContainer.appendChild(sashimi);

    const bicol = document.createElement("div");
    bicol.classList.add("bicol");
    menuContainer.appendChild(bicol);

    const belly = document.createElement("div");
    belly.classList.add("belly");
    menuContainer.appendChild(belly);

    content.appendChild(menuContainer);
}

    menu.addEventListener("click", showMenu);


export {content, showMenu};