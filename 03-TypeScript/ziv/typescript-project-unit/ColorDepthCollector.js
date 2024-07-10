"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorDepthCollector = void 0;
class ColorDepthCollector {
    constructor(interval) {
        this.intervalId = null;
        this.interval = interval;
        this.data = screen.colorDepth; // אוסף את צבעי העומק של המסך הנוכחית
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'colorDepth';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                const currentColorDepth = screen.colorDepth;
                if (this.data !== currentColorDepth) {
                    this.data = currentColorDepth;
                    console.log('Color depth updated:', this.data);
                }
            }
            catch (error) {
                console.error('Error collecting color depth data:', error);
                this.data = null;
            }
        }, this.interval); // בודק כל פרק זמן אם צבעי העומק השתנו
    }
    finishCollect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
exports.ColorDepthCollector = ColorDepthCollector;
