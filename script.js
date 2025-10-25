document.addEventListener("DOMContentLoaded", () => {
  console.log("VibeDev Studio активен ⚡");
});
// Появление карточек технологий по очереди
const skillCards = document.querySelectorAll('#skills .skill-card');

skillCards.forEach((card, index) => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  setTimeout(() => {
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, index * 150); // 150ms задержка между каждой карточкой
});
