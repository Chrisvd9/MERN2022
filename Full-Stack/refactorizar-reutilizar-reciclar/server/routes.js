const ProductoController = require('../server/controllers/product.controller');

module.exports = app => {
    app.post("/api/productos/new", ProductoController.createNewProducto);
    app.get("/api/productos", ProductoController.findAllProductos);
    app.get("/api/productos/:id", ProductoController.getProducto);
    app.put("/api/productos/update/:id", ProductoController.updateProducto);
    app.delete("/api/productos/delete/:id", ProductoController.deleteProducto);
}