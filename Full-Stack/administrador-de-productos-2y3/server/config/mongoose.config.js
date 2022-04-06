const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productosdb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Base de datos conectada"))
	.catch(err => console.log("Error en la conexión", err));