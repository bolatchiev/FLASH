const { Geography, Joke, Ocean } = require('../db/models')

class GeographyService {
    static async getAll(topic) {
        let data;
        switch (topic) {
            case 'geography':
                data = await Geography.findAll(); 
                break;
            case 'joke':
                data = await Joke.findAll(); 
                break;
            case 'ocean':
                data = await Ocean.findAll(); 
                break;
            default:
                throw new Error('Неверная тема');
        }
        return data;
    }
}

module.exports = GeographyService