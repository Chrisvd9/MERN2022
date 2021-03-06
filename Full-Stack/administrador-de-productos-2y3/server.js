const express = require("express");
const app = express();
const cors=require('cors');
app.use(cors());

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/routes")(app);

app.listen(8000, () => console.log("Servidor 8000 iniciado"));