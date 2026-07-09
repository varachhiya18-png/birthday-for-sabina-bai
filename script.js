// =========================
// Premium Birthday Effects
// Made with ❤️ by Ahmad
// =========================

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.opacity = Math.random();
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = window.innerHeight;
    let drift = (Math.random() - 0.5) * 2;

    const move = setInterval(() => {
        pos -= 2;
        heart.style.top = pos + "px";
        heart.style.left =
            parseFloat(heart.style.left) + drift + "px";

        if (pos < -50) {
            clearInterval(move);
            heart.remove();
        }
    }, 20);
}

// Create a new heart every 500ms
setInterval(createHeart, 500);

// Welcome animation
window.onload = () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1.5s";
        document.body.style.opacity = "1";
    }, 100);
};

// Button click sparkle
const btn = document.querySelector(".btn");

if (btn) {
    btn.addEventListener("click", () => {
        alert("🎉 Happy Birthday Sabina Bai ❤️");
    });
}

// Console Message
console.log("Made with ❤️ by Ahmad");
