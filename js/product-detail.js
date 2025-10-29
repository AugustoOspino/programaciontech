document.addEventListener("DOMContentLoaded", () => {

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
      <div class="card">
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
