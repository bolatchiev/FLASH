const JokeService = require('../services/Joke.service');
const { formatResponse } = require('../utils/formatResponse');

class JokesController {
    static async getAll(req, res) {
        try {
            const getAllQuestion = await JokeService.getAll()
            res.status(200).json(formatResponse({
                statusCode: 200, message: 'Получены все данные из темы',
                data: getAllQuestion
            }))
        } catch (error) {
            console.log(error);
            res.status(500).json(formatResponse({
                statusCode: 401, message: 'Нет прав на получение всей темы',
                error: error.message
            }))
        }
    }
}
module.exports = JokesController;
