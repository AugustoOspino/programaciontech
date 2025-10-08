function initNavbarToggle() {
  const toggleButton = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
}