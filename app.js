// Typing effect
const text = "Welcome most beautiful ❤️ girl in the world 🌎";
let index = 0;
const typingText = document.getElementById("typingText");
const questionBox = document.getElementById("questionBox");

function typeText() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      questionBox.classList.remove("hidden");
    }, 800);
  }
}
typeText();

// Gallery logic
const box = document.getElementById("galleryBox");
let rotateX = 0;
let rotateY = 0;
let autoRotate = true;

function showGallery(correct) {
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.loop = true;


  if (correct) {
    document.getElementById("welcomeScreen").style.display = "none";
    bgMusic.play()
    box.classList.remove("hidden");
  } else {
    alert(" Ni ni hmne kha tha na Aap sirf ' Pyaari' ni hain... dobara sochiye!");
  }
}

setInterval(() => {
  if (autoRotate) {
    rotateY += 0.3;
    box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
}, 30);

let startX, startY;
box.addEventListener("touchstart", (e) => {
  autoRotate = false;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});
box.addEventListener("touchmove", (e) => {
  const moveX = e.touches[0].clientX;
  const moveY = e.touches[0].clientY;
  const deltaX = moveX - startX;
  const deltaY = moveY - startY;
  rotateY += deltaX * 0.3;
  rotateX -= deltaY * 0.3;
  box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  startX = moveX;
  startY = moveY;
});
box.addEventListener("touchend", () => {
  autoRotate = true;
});
