const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productos_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Conexion de la Database exitosa"))
    .catch(err=>console.log("Hay un error", err))