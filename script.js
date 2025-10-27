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
// Плавное появление элементов при скролле
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target); // чтобы анимация сработала один раз
    }
  });
}, {
  threshold: 0.2 // 20% элемента видимо
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.body.style.backgroundPositionY = `${scrolled * 0.5}px`;
});