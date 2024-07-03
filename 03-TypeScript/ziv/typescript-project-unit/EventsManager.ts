export class EventsManager {
    static async getConfig(customerId: string) {
        // חזרה של קונפיגורציה קבועה במקום fetch אמיתי
        // const response = await fetch(`https://acme-server.com/conf?customerId=${customerId}`);
        // return response.json();
        const config = {
            COLLECTORS_INTERVAL: 60000,
            DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
            SDK_ENABLED: true
        };
        localStorage.setItem('acmeConfig', JSON.stringify(config));
        return config;
    }

    static async updateData(data: Record<string, any>) {
        // שליחה לשרת
        await fetch('https://acme-server.com/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

