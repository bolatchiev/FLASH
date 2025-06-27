const GeographyService = require("../services/Geography.service");
const formatResponse = require('../utils/formatResponse')

class GeographyController {
    static async getAll(req, res) {
        try {
            const getAllQuestion = await GeographyService.getAll()
            res.status(200).json(formatResponse({
                statusCode: 200, message: 'Получены все данные из темы',
                data: getAllQuestion
            }))
        } catch (error) {
            console.log(error);
            res.staus(500).json(formatResponse({
                statusCode: 401, message: 'Нет прав на получение всей темы',
                error: error.message
            }))
        }
    }

    static async getById(req, res){
        const { id } = req.params
        const getOne = await GeographyService.getById(id)
        res.status(200). 
    }
}