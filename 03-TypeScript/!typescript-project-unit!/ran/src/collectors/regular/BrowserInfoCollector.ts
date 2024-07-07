import { Collector } from '../../interfaces/Collector';

export class BrowserInfoCollector implements Collector<string> {
  public interval: number;
  private data: string | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'browserInfo';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting browser info:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start browser info collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      const ua = navigator.userAgent;
      let tem;
      let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        this.data = 'IE ' + (tem[1] || '');
      } else if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) this.data = tem.slice(1).join(' ').replace('OPR', 'Opera');
      } else {
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        this.data = M.join(' ');
      }
    } catch (error) {
      console.error('Error getting browser info:', error);
      this.data = null;
    }
  }
}

