const { Ocean } = require('../db/models');

class OceanService{
    //* Получение всех
    static async getAllCardsOcean(){
        const cards = await Ocean.findAll()
        const result = cards.map((el) => el.get({plain: true}))
        return result
    }


    //* получение одной карточки
    static async getOneCardOcean(question){
        const card = await Ocean.findOne(question)
        const result = card.get({plain: true})
        return result
    }
}

module.exports = OceanService