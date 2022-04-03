const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: { 
    type: String,
    unique: true,
    required: [true, "setup es requerido"],
    minlength: [10, "Debe contener al menos 10 caracteres"]
},
    punchline: {
        type: String,
        unique: true,
        required: [true, "punchline es requerido"],
        minlength: [3, "Debe contener al menos 3 caracteres"]
    }
})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;