// Cargar header y footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // Después de insertar el header, inicializar el navbar toggle
      if (typeof initNavbarToggle === "function") {
        initNavbarToggle();
      }
    })
    .catch(err => console.error("Error cargando header:", err));

  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Error cargando footer:", err));
});
