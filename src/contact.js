export default function createContactPage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; 

    const contactDiv = document.createElement("div");
    contactDiv.innerHTML = `
        <h1>Contact Us</h1>
        <p>Phone: +123 456 789</p>
    `;

    content.appendChild(contactDiv);
}
