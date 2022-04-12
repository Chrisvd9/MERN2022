const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/author_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Conexion exitosa en la database"))
	.catch(err => console.log("Ocurrió un erro al establecer conexión con la database", err));