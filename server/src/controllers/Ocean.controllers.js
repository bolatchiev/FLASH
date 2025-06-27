const OceanService = require('../services/Ocean.service');
const { formatResponse } = require('../utils/formatResponse')

class OceanController{

    static async getAll(req, res) {

    try {
      const result = await OceanService.getAllCardsOcean()
      res.status(200).json(result)
    } catch (error) {
      console.log(error)
      res.status(400).json(formatResponse({
        statusCode: 400, message: 'У тебя нет прав',
        error: error.message
      }))
    }
  }


  static async getOne(req, res) {
    try {
      const { id } = req.params
      const card = await OceanService.getOneCardOcean(id)
      res.status(200).json(formatResponse({
        statusCode: 200, message: 'Одна карточка',
        data: card
      }))
    } catch (error) {
      console.log(error)
      res.status(401).json(formatResponse({
        statusCode: 401, message: 'Не удалось получить карточку',
        error: error.message
      }))
    }
  }
}

module.exports = OceanController

