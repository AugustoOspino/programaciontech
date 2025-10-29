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
      descripcion: "Descripción del producto 4 es ma larga y por eso necesitamos que sea asi .",
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
      producttop: true,
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
    {
      titulo: "Producto 8",
      producttop: true,
      descripcion: "Descripción del producto 8.",
      material: "Hierro",
      tamano: "Grande",
      precio: "$200",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
    {
      titulo: "Producto 9",
      producttop: true,
      descripcion: "Descripción del producto 9.",
      material: "Metal",
      tamano: "Grande",
      precio: "$70",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
    {
      titulo: "Producto 10",
      producttop: true,
      descripcion: "Descripción del producto 10.",
      material: "Metal",
      tamano: "Grande",
      precio: "$70",
      imagen: "/assets/img/products/producto1.png",
      enlace: "#"
    },
  ];

  // ===========================================
// 🎯 Renderizar productos destacados (carrusel con tarjetas giratorias)
// ===========================================

const carouselTrack = document.getElementById("product-carousel");

if (carouselTrack) {
  const productosDestacados = productos.filter(p => p.producttop);

  // Renderiza las tarjetas
  productosDestacados.forEach(producto => {
    const card = document.createElement("div");
    card.className = "flip-card m-2";
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${producto.imagen}" class="img-fluid rounded-top" alt="${producto.titulo}">
          <h5 class="text-center mt-2">${producto.titulo}</h5>
        </div>
        <div class="flip-card-back">
          <h5>${producto.titulo}</h5>
          <p>${producto.descripcion}</p>
          <ul class="list-unstyled mb-3">
            <li><strong>Material:</strong> ${producto.material}</li>
            <li><strong>Tamaño:</strong> ${producto.tamano}</li>
            <li><strong>Precio:</strong> ${producto.precio}</li>
          </ul>
          <a href=" productsdesc.html" class="btn btn-light ">Ver más</a>
          
        </div>
      </div>
    `;
    carouselTrack.appendChild(card);
  });

  // Movimiento automático del carrusel
  let scrollAmount = 0;
  const cardWidth = 240; // Ancho estimado de cada tarjeta con márgenes
  const intervalTime = 4000; // Tiempo entre desplazamientos (4s)

  setInterval(() => {
    const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;

    if (scrollAmount >= maxScroll) {
      scrollAmount = 0;
    } else {
      scrollAmount += cardWidth;
    }

    carouselTrack.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
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
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${producto.titulo}</h5>
            
            <a href="productsdesc.html" class="btn btn-outline-success mt-auto">Ver detalles</a> 
          </div>
        </div>
      `;

      grid.appendChild(col);
    });
  }
});
