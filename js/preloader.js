document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader");
  window.addEventListener("load", () => {
    preloader.classList.add("preloaded");
    setTimeout(() => {
      preloader.remove();
    }, 1500);
  });
});