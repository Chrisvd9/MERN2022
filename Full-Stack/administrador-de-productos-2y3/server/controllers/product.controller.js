const Producto = require('../models/product.model');

module.exports.findAllProductos = (req, res) => {
    Producto.find()
        .then((allProductos)=>res.json({productos: allProductos}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
};

module.exports.createNewProducto = (request, response) => {
    Producto.create(request.body)
        .then((nuevoProducto)=>response.json({producto: nuevoProducto}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
};

module.exports.getProducto = (req, res) => {
    Producto.findOne({_id: req.params.id})
        .then((producto)=>res.json({producto: producto}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
};

module.exports.updateProducto = (req, res) => {
    Producto.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((producto)=>res.json({producto: producto}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.deleteProducto = (req, res) => {
    Producto.deleteOne({_id: req.params.id})
        .then((result)=>res.json({resultado: result}))
        .catch((err)=>res.json({message:"Algo salio mal", error:err}))
}