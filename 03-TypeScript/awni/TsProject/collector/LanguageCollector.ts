
import { Collector } from './Collector-Interface';

export class LanguageCollector implements Collector<string> {
    public interval: number;
    private data: string;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): string {
        return this.data;
    }

    getKey(): string {
        return 'language';
    }

    startCollect(): void {
        this.data = navigator.language;
    }

    finishCollect(): void {
        this.data = '';
    }


}