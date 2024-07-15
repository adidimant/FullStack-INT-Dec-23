

export class EventsManager {
   
    public static async getConfig(): Promise<any> {
        const response = await fetch('https://acme-server.com/conf?customerId=123');
        const data = await response.json();
        return data;
    }

    public static async updateData(data: any): Promise<void> {
        await fetch('https://acme-server.com/update', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    public static async getConfiguration(): Promise<any> {
        const response = await fetch('https://acme-server.com/conf?customerId=123');
        const data = await response.json();
        return data;
    }
}