const SERVER_JOKE_ADDRESS = 'http://localhost:3000/api/joke'

export class JokeApi{
    static async getAll(){
        const response = await fetch(SERVER_JOKE_ADDRESS)
        const serverData = await response.json()
        return serverData
    }
}
