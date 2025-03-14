export default function createHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Eskisini o‘chirish

    const homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <p>Best food in town!</p>
    `;

    content.appendChild(homeDiv);
}
