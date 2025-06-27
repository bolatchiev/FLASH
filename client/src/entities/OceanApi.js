const SERVER_OCEAN_ADRESS = 'http://localhost:3000/api/ocean'

export class OceanApi{
    static async getAll(){
        const response = await fetch(SERVER_OCEAN_ADRESS)
        const serverData = await response.json()
        return serverData
    }
}