document.addEventListener("DOMContentLoaded", () => {
  console.log("VibeDev Studio активен ⚡");

  const faders = document.querySelectorAll(".fade-in");

  // Обновляем видимость сразу после загрузки страницы
  faders.forEach(el => {
    el.classList.add("visible");
  });

  // Дополнительно плавное появление при скролле
  window.addEventListener("scroll", () => {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  });
});
