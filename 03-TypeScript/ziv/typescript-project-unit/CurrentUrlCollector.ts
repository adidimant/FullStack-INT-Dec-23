import { Collector } from './Collector';

export class CurrentUrlCollector implements Collector<string | null> {
    private data: string | null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number) {
        this.interval = interval;
        this.data = window.location.href; // אוסף את כתובת ה-URL הנוכחית
    }

    getData(): string | null {
        return this.data;
    }

    getKey(): string {
        return 'currentUrl';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                const currentUrl = window.location.href;
                if (this.data !== currentUrl) {
                    this.data = currentUrl;
                    console.log('URL updated:', this.data);
                }
            } catch (error) {
                console.error('Error collecting current URL data:', error);
                this.data = null;
            }
        }, this.interval); // בודק כל שנייה אם ה-URL השתנה
    }

    finishCollect(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
