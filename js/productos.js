// ===========================================
// 🛍️ productos.js - Renderizado dinámico de productos desde MySQL
// ===========================================

document.addEventListener("DOMContentLoaded", async () => {
  let productos = [];

  try {
    // 🔗 Llamada a tu backend (asegúrate que el servidor está corriendo)
    const respuesta = await fetch("http://localhost:3000/productos");
    productos = await respuesta.json();
  } catch (error) {
    console.error("❌ Error al obtener productos:", error);
    return;
  }
  

  // ===========================================
  // 🎯 Renderizar productos destacados (carrusel con tarjetas giratorias)
  // ===========================================

  const carouselTrack = document.getElementById("product-carousel");

  if (carouselTrack) {
    const productosDestacados = productos.filter(p => p.favorito === 1 || p.producttop === 1 || p.favorito === true);

    productosDestacados.forEach(producto => {
      const card = document.createElement("div");
      card.className = "flip-card m-2";
      card.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${producto.imagen_url}" class="img-fluid rounded-top" alt="${producto.nombre}">
            <h2 class="text-center mt-2">${producto.nombre}</h2>
          </div>
          <div class="flip-card-back">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <ul class="list-unstyled mb-3">
              <li><strong>Material:</strong> ${producto.material || "N/A"}</li>
              <li><strong>Precio:</strong> $${producto.precio}</li>
            </ul>
            <a href="productsdesc.html?id=${producto.id}" class="btn btn-light">Ver más</a>
          </div>
        </div>
      `;
      carouselTrack.appendChild(card);
    });

    // Movimiento automático del carrusel
    let scrollAmount = 0;
    const cardWidth = 240;
    const intervalTime = 4000;

    setInterval(() => {
      const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
      if (scrollAmount >= maxScroll) scrollAmount = 0;
      else scrollAmount += cardWidth;

      carouselTrack.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, intervalTime);
  }

  // ===========================================
  // 📦 Renderizar todos los productos (en grilla)
  // ===========================================
  const grid = document.getElementById("product-grid");

  if (grid) {
    productos.forEach(producto => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-2";

      col.innerHTML = `
        <div class="card product-card text-white h-100 glass-card">
          <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body d-flex flex-column">
            <h2 class="card-title">${producto.nombre}</h2>
            <a href="productsdesc.html?id=${producto.id}" class="btn btn-outline-success mt-auto">Ver detalles</a>
          </div>
        </div>
      `;
      grid.appendChild(col);
    });
  }

  // ===========================================
  // 🔍 Mostrar detalle del producto individual
  // ===========================================
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id) {
    const producto = productos.find(p => p.id == id);

    const detail = document.getElementById("product-detail");
    if (!producto) {
      detail.innerHTML = `
        <div class="col-12 text-center">
          <h3>Producto no encontrado</h3>
          <a href="index.html" class="btn btn-primary mt-3">Volver al inicio</a>
        </div>`;
      return;
    }

    detail.innerHTML = `
      <div class="col-md-8 col-lg-6 mx-auto">
        <div class="card-description">
          <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body text-center">
            <h3 class="card-title mb-3">${producto.nombre}</h3>
            <p class="card-text">${producto.descripcion}</p>
            <ul class="list-unstyled my-3">
              <li><strong>Material:</strong> ${producto.material}</li>
              <li><strong>Precio:</strong> $${producto.precio}</li>
            </ul>
            <a href="index.html" class="btn btn-outline-secondary mt-3">← Volver</a>
          </div>
        </div>
      </div>
    `;
  }
});
