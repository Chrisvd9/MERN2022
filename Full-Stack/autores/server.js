const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyAuthorRoutes = require("./server/routes/author.routes");
AllMyAuthorRoutes(app);

app.listen(8000, () => console.log("Server corriendo en el puerto: 8000"));
