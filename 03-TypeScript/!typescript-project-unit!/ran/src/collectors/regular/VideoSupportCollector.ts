import { Collector } from '../../interfaces/Collector';

interface VideoSupport {
  mp4: boolean;
  webm: boolean;
  ogg: boolean;
}

export class VideoSupportCollector implements Collector<VideoSupport> {
  public interval: number;
  private data: VideoSupport | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): VideoSupport | null {
    return this.data;
  }

  getKey(): string {
    return 'videoSupport';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting video support:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start video support collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      const video = document.createElement('video');
      this.data = {
        mp4: video.canPlayType('video/mp4').replace(/no/, '') !== '',
        webm: video.canPlayType('video/webm').replace(/no/, '') !== '',
        ogg: video.canPlayType('video/ogg').replace(/no/, '') !== ''
      };
    } catch (error) {
      console.error('Error getting video support:', error);
      this.data = null;
    }
  }
}