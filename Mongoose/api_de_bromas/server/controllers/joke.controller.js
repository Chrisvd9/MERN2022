const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes)=>res.json({jokes: allJokes}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke)=>res.json({joke: newJoke}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then((joke)=>res.json({joke: joke}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((joke)=>res.json({joke: joke}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then((result)=>req.json({resultado: result}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};

// module.exports.randomJoke = (req, res) => {
//     Joke.find();
//     const randomNum = Math.floor(Math.random() * jokes.length);
//     const joke = jokes[randomNum]
// }