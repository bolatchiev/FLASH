const SERVER_TASKS_ADDRESS = 'http://localhost:3000/api/geography';

export class GeographyApi {
    static async getAll(topic) {
        const response = await fetch(`${SERVER_TASKS_ADDRESS}/${topic}`);
        const serverData = await response.json();
        return serverData;
    }
}