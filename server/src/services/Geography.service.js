const { Geography } = require('../db/models')

class GeographyService {
    static async getAll(){
        return await Geography.findAll()
    }

    static async getById(id){
        return await Geography.findByPk(id)
    }
}

module.exports = GeographyService