// ===========================================
// 🛍️ productos.js - Renderizado dinámico de productos
// ===========================================

document.addEventListener("DOMContentLoaded", () => {
  // 🗂️ Lista de productos
  const productos = [
    {
      titulo: "Producto 1",
      producttop: true,
      descripcion: "Descripción del producto 1.",
      material: "Algodón",
      tamano: "Mediano",
      precio: "$20",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
    {
      titulo: "Producto 2",
      producttop: false,
      descripcion: "Descripción del producto 2.",
      material: "Plástico",
      tamano: "Grande",
      precio: "$35",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
    {
      titulo: "Producto 3",
      producttop: true,
      descripcion: "Descripción del producto 3.",
      material: "Madera",
      tamano: "Pequeño",
      precio: "$50",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
    {
      titulo: "Producto 4",
      producttop: true,
      descripcion: "Descripción del producto 4.",
      material: "Metal",
      tamano: "Grande",
      precio: "$70",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
    {
      titulo: "Producto 5",
      producttop: false,
      descripcion: "Descripción del producto 5.",
      material: "Metal",
      tamano: "Grande",
      precio: "$70",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
    {
      titulo: "Producto 6",
      producttop: false,
      descripcion: "Descripción del producto 6.",
      material: "Metal",
      tamano: "Grande",
      precio: "$70",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
    {
      titulo: "Producto 7",
      producttop: true,
      descripcion: "Descripción del producto 7.",
      material: "Metal",
      tamano: "Grande",
      precio: "$70",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
  ];

  // ===========================================
  // 🎯 Renderizar productos destacados (carrusel)
  // ===========================================
  const carousel = document.getElementById("product-carousel");

  if (carousel) {
    const productosDestacados = productos.filter(p => p.producttop);

    productosDestacados.forEach(producto => {
      const card = document.createElement("div");
      card.className = "card product-card text-white d-inline-block m-2 glass-card";
      card.style.width = "18rem";

      card.innerHTML = `
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <ul class="list-group list-group-flush text-dark">
            <li class="list-group-item"><strong>Material:</strong> ${producto.material}</li>
            <li class="list-group-item"><strong>Tamaño:</strong> ${producto.tamano}</li>
            <li class="list-group-item"><strong>Precio:</strong> ${producto.precio}</li>
          </ul>
          <a href="${producto.enlace}" class="btn btn-primary mt-3">Ver más</a>
        </div>
      `;
      carousel.appendChild(card);
    });
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
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <ul class="list-group list-group-flush text-dark mb-3">
              <li class="list-group-item"><strong>Material:</strong> ${producto.material}</li>
              <li class="list-group-item"><strong>Tamaño:</strong> ${producto.tamano}</li>
              <li class="list-group-item"><strong>Precio:</strong> ${producto.precio}</li>
            </ul>
            <a href="${producto.enlace}" class="btn btn-primary mt-auto">Ver más</a>
          </div>
        </div>
      `;

      grid.appendChild(col);
    });
  }
});
