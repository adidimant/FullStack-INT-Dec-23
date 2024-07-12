import { Collector } from './Collector-Interface';



export class PluginsCollector implements Collector<Array<string>> {
    public interval: number;
    private data: Array<string>;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): Array<string> {
        return this.data;
    }

    getKey(): string {
        return 'plugins';
    }

    startCollect(): void {
        this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
    }

    finishCollect(): void {
        this.data = null;
    }

}