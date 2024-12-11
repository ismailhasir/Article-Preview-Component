const shareButton = document.querySelector(".share-button");
const shareButtonActive = document.querySelector(".share-active-button");

const footer = document.querySelector(".footer");
const footerActive = document.querySelector(".footer-2");

// Detect desktop or mobile
const isDesktop = window.matchMedia("(min-width: 750px)").matches;

shareButton.addEventListener("click", (e) => {
  if (isDesktop) {
    console.log("Desktop!!");
  } else {
    footerActive.classList.remove("hidden");
    footer.classList.add("hidden");
  }
});

shareButtonActive.addEventListener("click", (e) => {
  if (isDesktop) {
    console.log("BBBBBB");
  } else {
    footerActive.classList.add("hidden");
    footer.classList.remove("hidden");
  }
});
