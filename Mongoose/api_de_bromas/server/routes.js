const JokeController = require("../server/controllers/joke.controller");

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}