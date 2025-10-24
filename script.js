document.addEventListener("DOMContentLoaded", () => {
  console.log("VibeDev Studio активен ⚡");

  // Эффект печати заголовка
  const title = document.querySelector("header h1");
  const text = title.textContent;
  title.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  type();
});
