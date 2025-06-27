const GeographyService = require("../services/Geography.service");
const formatResponse = require('../utils/formatResponse')

class GeographyController {
    static async getAll(req, res) {
        const { topic } = req.params;
        try {
            const getAllQuestion = await GeographyService.getAll(topic); 
            res.status(200).json(formatResponse({
                statusCode: 200,
                message: 'Получены все данные из темы',
                data: getAllQuestion
            }));
        } catch (error) {
            console.log(error);
            res.status(500).json(formatResponse({
                statusCode: 500,
                message: 'Ошибка при получении данных',
                error: error.message
            }));
        }
    }

    // static async getById(req, res){
    //     const { id } = req.params
    //     const getOne = await GeographyService.getById(id)
    //     res.status(200).json(formatResponse({
    //         statusCode: 200, message: 'Получена все данные'
    //     }))
    // }
}

module.exports = GeographyController