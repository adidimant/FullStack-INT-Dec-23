import { Collector } from './Collector';

export class ColorDepthCollector implements Collector<number | null> {
    private data: number | null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number) {
        this.interval = interval;
        this.data = screen.colorDepth; // אוסף את צבעי העומק של המסך הנוכחית
    }

    getData(): number | null {
        return this.data;
    }

    getKey(): string {
        return 'colorDepth';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                const currentColorDepth = screen.colorDepth;
                if (this.data !== currentColorDepth) {
                    this.data = currentColorDepth;
                    console.log('Color depth updated:', this.data);
                }
            } catch (error) {
                console.error('Error collecting color depth data:', error);
                this.data = null;
            }
        }, this.interval); // בודק כל פרק זמן אם צבעי העומק השתנו
    }

    finishCollect(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
