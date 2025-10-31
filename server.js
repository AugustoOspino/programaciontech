import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());

// ===========================================
// 🔌 Conexión a la base de datos
// ===========================================
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "sakila" // 👈 cámbialo si tu base se llama diferente
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL exitosamente");
});

// ===========================================
// 📦 RUTAS DEL CRUD DE PRODUCTOS
// ===========================================

// 🔹 Obtener todos los productos
app.get("/productos", (req, res) => {
  connection.query("SELECT * FROM productos", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// 🔹 Obtener un producto por ID
app.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM productos WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(results[0]);
  });
});

// 🔹 Crear un nuevo producto
app.post("/productos", (req, res) => {
  const { titulo, descripcion, material, tamano, precio, imagen, producttop } = req.body;
  const sql = "INSERT INTO productos (titulo, descripcion, material, tamano, precio, imagen, producttop) VALUES (?, ?, ?, ?, ?, ?, ?)";
  connection.query(sql, [titulo, descripcion, material, tamano, precio, imagen, producttop], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, message: "✅ Producto agregado exitosamente" });
  });
});

// 🔹 Actualizar un producto
app.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, material, tamano, precio, imagen, producttop } = req.body;
  const sql = "UPDATE productos SET titulo=?, descripcion=?, material=?, tamano=?, precio=?, imagen=?, producttop=? WHERE id=?";
  connection.query(sql, [titulo, descripcion, material, tamano, precio, imagen, producttop, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "✅ Producto actualizado correctamente" });
  });
});

// 🔹 Eliminar un producto
app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM productos WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "🗑️ Producto eliminado correctamente" });
  });
});

// ===========================================
// 🚀 Iniciar servidor
// ===========================================
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
