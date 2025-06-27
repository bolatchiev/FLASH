const {Joke} = require("../db/models");

class JokeService {

    static async getAll() {
        return await Joke.findAll();
    }
}

module.exports = JokeService;
