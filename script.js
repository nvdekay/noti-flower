function createPopup() {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    // Title bar with heart and window controls
    const header = document.createElement("div");
    header.classList.add("popup-header");

    const titleText = document.createElement("div");
    titleText.classList.add("title-text");
    titleText.innerHTML = "❤️Thông báo!"; // Heart icon with title
    header.appendChild(titleText);

    const controls = document.createElement("div");
    controls.classList.add("window-controls");

    // Minimize, maximize, and close buttons
    const minimizeButton = document.createElement("span");
    minimizeButton.classList.add("minimize");
    const maximizeButton = document.createElement("span");
    maximizeButton.classList.add("maximize");
    const closeButton = document.createElement("span");
    closeButton.classList.add("close-btn");
    closeButton.onclick = () => popup.remove();

    controls.appendChild(minimizeButton);
    controls.appendChild(maximizeButton);
    controls.appendChild(closeButton);
    header.appendChild(controls);
    popup.appendChild(header);

    // Content area
    const content = document.createElement("div");
    content.classList.add("popup-content");

    // Message with flower emoji
    content.innerHTML = "Here's a flower for you!🌺💐🌹🌷🌼";
    popup.appendChild(content);

    // Random position
    const width = window.innerWidth - 260;
    const height = window.innerHeight - 150;
    popup.style.left = Math.floor(Math.random() * width) + "px";
    popup.style.top = Math.floor(Math.random() * height) + "px";

    document.body.appendChild(popup);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (document.body.contains(popup)) {
            popup.remove();
        }
    }, 3000);
}

// Display multiple popups with increasing delay
for (let i = 0; i < 100; i++) {
    setTimeout(createPopup, i * 150);
}