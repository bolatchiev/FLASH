const SERVER_TASKS_ADDRESS = 'http://localhost:3000/api/geography';

export class GeographyApi {
    static async getAll() {
        const response = await fetch(SERVER_TASKS_ADDRESS);
        const serverData = await response.json();
        return serverData;
    }
}