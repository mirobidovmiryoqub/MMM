// import createHomePage from "./home.js";

// document.addEventListener("DOMContentLoaded", () => {
//     createHomePage();
// });

import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
    createHomePage();

    document.getElementById("home-btn").addEventListener("click", createHomePage);
    document.getElementById("menu-btn").addEventListener("click", createMenuPage);
    document.getElementById("contact-btn").addEventListener("click", createContactPage);
});
