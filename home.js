// Generate random stars
    const starField = document.getElementById("star-twinkle");
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 2 + 1 + "px";
  star.style.width = size;
  star.style.height = size;

  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s";
  star.style.animationDelay = (Math.random() * 5) + "s";

  starField.appendChild(star);
};
