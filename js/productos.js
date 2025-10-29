// ===========================================
// 🛍️ productos.js - Renderizado dinámico de productos
// ===========================================

document.addEventListener("DOMContentLoaded", () => {
  // 🗂️ Lista de productos
  const productos = [
    { titulo: "Sombrero vueltiao", id: 1, producttop: true, descripcion: "El sombrero vueltiao es una prenda tradicional de Colombia, originaria de la región Caribe y símbolo de la cultura Zenú. Está elaborado artesanalmente con caña flecha, una fibra natural que se trenza y se teje formando los característicos diseños en blanco y negro. Su nombre proviene de la forma en que se “vueltean” las trenzas para dar forma al sombrero. Es un ícono del folclor colombiano y representa identidad, tradición y orgullo nacional.", material: "Caña flecha", tamano: "S-M-L-XL", precio: "$330.000", imagen: "/assets/img/products/sombrerovueltiao.png" },
    { titulo: "Sombrero machimbre", id: 2, producttop: false, descripcion: "Descripción del producto 2.", material: "Plástico", tamano: "Grande", precio: "$35", imagen: "/assets/img/products/sobreromachimbre.png" },
    { titulo: "Producto 3", id: 3, producttop: true, descripcion: "Descripción del producto 3.", material: "Madera", tamano: "Pequeño", precio: "$50", imagen: "/assets/img/products/producto1.png" },
    { titulo: "Producto 4", id: 4, producttop: true, descripcion: "Descripción del producto 4 es más larga y por eso necesitamos que sea así.", material: "Metal", tamano: "Grande", precio: "$70", imagen: "/assets/img/products/producto1.png" },
    { titulo: "Producto 5", id: 5, producttop: false, descripcion: "Descripción del producto 5.", material: "Metal", tamano: "Grande", precio: "$70", imagen: "/assets/img/products/producto1.png" },
    { titulo: "Producto 6", id: 6, producttop: true, descripcion: "Descripción del producto 6.", material: "Metal", tamano: "Grande", precio: "$70", imagen: "/assets/img/products/producto1.png" },
    { titulo: "Producto 7", id: 7, producttop: true, descripcion: "Descripción del producto 7.", material: "Metal", tamano: "Grande", precio: "$70", imagen: "/assets/img/products/producto1.png" },
    { titulo: "Producto 8", id: 8, producttop: true, descripcion: "Descripción del producto 8.", material: "Hierro", tamano: "Grande", precio: "$200", imagen: "/assets/img/products/producto1.png" },
    { titulo: "Producto 9", id: 9, producttop: true, descripcion: "Descripción del producto 9.", material: "Metal", tamano: "Grande", precio: "$70", imagen: "/assets/img/products/producto1.png" },
    { titulo: "Producto 10", id: 10, producttop: true, descripcion: "Descripción del producto 10.", material: "Metal", tamano: "Grande", precio: "$70", imagen: "/assets/img/products/producto1.png" },
    { titulo: "Producto 11", id: 11, producttop: true, descripcion: "Descripción del producto 10.", material: "Metal", tamano: "Grande", precio: "$70", imagen: "/assets/img/products/producto1.png" }
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
          <h2 class="text-center mt-2">${producto.titulo}</h2>
        </div>
        <div class="flip-card-back">
          <h2>${producto.titulo}</h2>
          <p>${producto.descripcion}</p>
          <ul class="list-unstyled mb-3">
            <li><strong>Material:</strong> ${producto.material}</li>
            <li><strong>Tamaño:</strong> ${producto.tamano}</li>
            <li><strong>Precio:</strong> ${producto.precio}</li>
          </ul>
          <a href="productsdesc.html?id=${producto.id}" class="btn btn-light ">Ver más</a>
          
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
            <h2 class="card-title">${producto.titulo}</h2>
            
            <a href="productsdesc.html?id=${producto.id}" class="btn btn-outline-success mt-auto">Ver detalles</a> 
          </div>
        </div>
      `;

      grid.appendChild(col);
    });
  }
  // 🧭 1️⃣ Obtenemos el parámetro "id" desde la URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id"); // ✅ ejemplo: "3"

  // 📍 2️⃣ Verificamos si hay un ID válido en la URL
  if (!id) {
    document.getElementById("product-detail").innerHTML = `
      <div class="col-12 text-center">
        <h3>Producto no encontrado</h3>
        <a href="index.html" class="btn btn-primary mt-3">Volver al inicio</a>
      </div>`;
    return;
  }

  // 🔍 4️⃣ Buscamos el producto que coincida con el ID recibido
  const producto = productos.find(p => p.id == id); // ✅ comparación flexible

  // ❌ 5️⃣ Si no se encuentra el producto, mostramos un mensaje de error
  if (!producto) {
    document.getElementById("product-detail").innerHTML = `
      <div class="col-12 text-center">
        <h3>Producto no encontrado</h3>
        <a href="index.html" class="btn btn-primary mt-3">Volver al inicio</a>
      </div>`;
    return;
  }

  // 🎨 6️⃣ Renderizamos dinámicamente los datos del producto
  document.getElementById("product-detail").innerHTML = `
    <div class="col-md-8 col-lg-6 mx-auto">
      <div class="card-description">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body text-center">
          <h3 class="card-title mb-3">${producto.titulo}</h3>
          <p class="card-text">${producto.descripcion}</p>
          <ul class="list-unstyled my-3">
            <li><strong>Material:</strong> ${producto.material}</li>
            <li><strong>Tamaño:</strong> ${producto.tamano}</li>
            <li><strong>Precio:</strong> ${producto.precio}</li>
          </ul>
          <a href="index.html" class="btn btn-outline-secondary mt-3">← Volver</a>
        </div>
      </div>
    </div>
  `;
  // 🖼️ 7️⃣ Configuramos el modal para ampliar imagen
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const img = document.querySelector(".card-img-top");
  const closeBtn = document.querySelector(".close");

  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

});
