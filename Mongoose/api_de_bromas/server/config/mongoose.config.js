const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peliculasapi_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('BASES DE DATOS OPERACIONAL'))
    .catch((err) => console.log('ALGO SALIO MAL', err))