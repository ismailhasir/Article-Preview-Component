const shareButton = document.querySelector(".share-button");
const shareButtonActive = document.querySelector(".share-active-button");

const footer = document.querySelector(".footer");
const footerActive = document.querySelector(".footer-2");

// Detect desktop or mobile
const isDesktop = window.matchMedia("(min-width: 750px)").matches;

shareButton.addEventListener("click", (e) => {
  footerActive.classList.remove("hidden");
  footer.classList.add("hidden");
});

shareButtonActive.addEventListener("click", (e) => {
  footerActive.classList.add("hidden");
  footer.classList.remove("hidden");
});
