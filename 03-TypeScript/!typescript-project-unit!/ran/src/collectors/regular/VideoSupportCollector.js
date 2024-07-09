"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoSupportCollector = void 0;
class VideoSupportCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'videoSupport';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting video support:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start video support collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            const video = document.createElement('video');
            this.data = {
                mp4: video.canPlayType('video/mp4').replace(/no/, '') !== '',
                webm: video.canPlayType('video/webm').replace(/no/, '') !== '',
                ogg: video.canPlayType('video/ogg').replace(/no/, '') !== ''
            };
        }
        catch (error) {
            console.error('Error getting video support:', error);
            this.data = null;
        }
    }
}
exports.VideoSupportCollector = VideoSupportCollector;
