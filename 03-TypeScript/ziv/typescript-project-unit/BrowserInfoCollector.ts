import { Collector } from './Collector';

export class BrowserInfoCollector implements Collector<string | null> {
    public interval: number;
    private data: string | null;
    private intervalId: number | null = null;

    constructor(interval: number) {
        this.interval = interval;
        this.data = null;
    }

    getKey(): string {
        return 'browserInfo';
    }

    getData(): string | null {
        return this.data;
    }

    private collectBrowserInfo() {
        try {
            const ua = navigator.userAgent;
            let tem: RegExpMatchArray | null = null;
            let M: RegExpMatchArray | null = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i);

            if (M && /trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua);
                this.data = 'IE ' + (tem ? tem[1] : '');
                return;
            }

            if (M && M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem) {
                    this.data = tem.slice(1).join(' ').replace('OPR', 'Opera');
                    return;
                }
            }

            if (M) {
                const versionMatch = ua.match(/version\/(\d+)/i);
                const browserInfo: [string, string] | [string, string, string] = M[2]
                    ? [M[1], M[2], '']
                    : [(navigator as any).appName || 'Unknown', (navigator as any).appVersion || 'Unknown', '-?'];

                if (versionMatch) {
                    browserInfo.splice(1, 1, versionMatch[1]);
                }
                this.data = browserInfo.join(' ');
            } else {
                this.data = `${navigator.userAgent}`;
            }
        } catch (error) {
            console.error('Error collecting browser info data:', error);
            this.data = null;
        }
    }

    startCollect(): void {
        this.collectBrowserInfo();
        this.intervalId = window.setInterval(() => {
            this.collectBrowserInfo();
        }, this.interval);
    }

    finishCollect(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
