const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const videoPage = document.getElementById("videoPage");
const video = document.getElementById("valVideo");

// Move NO button everywhere
function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// YES button logic
yesBtn.addEventListener("click", () => {
  main.innerHTML = `
    <h1 id="finalMsg">I knew you were gonna say YES, sweetheart ❤️🥹</h1>
    <p>Now watch this… 💕</p>
  `;

  setTimeout(() => {
    main.classList.add("fade-out");
  }, 2000);

  setTimeout(() => {
    main.style.display = "none";
    videoPage.style.display = "block";
    video.play();
  }, 4500);
}); 
