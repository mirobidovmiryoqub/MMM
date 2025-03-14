export default function createMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; 

    const menuDiv = document.createElement("div");
    menuDiv.innerHTML = `
        <h1>Menu</h1>
        <p>Our delicious dishes!</p>
    `;

    content.appendChild(menuDiv);
}
