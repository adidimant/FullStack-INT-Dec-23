import { Utils } from "./utils.js";
import { Collector, ContinousCollector } from "./interface.js";




export class Mousemovecollector implements Collector<MouseEvent[]>,ContinousCollector<MouseEvent[]> {
    private data: MouseEvent[] | null = null;
    intervalTime: number;
    private collectInterval: ReturnType<typeof setTimeout> | number | null = null;
    bufferSize: number;
    eventArray: MouseEvent[] = [];
    private eventListener: (event: MouseEvent) => void;

    constructor(intervalTime: number, bufferSize: number) {
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectMouseMove.bind(this);
    }

    getData(): MouseEvent[] | null {
        return this.data;
    }

    setData(data: MouseEvent[] | null): void {
        this.data = data;
    }

    getKey(): string {
        return "mousemove";
    }

    startCollect(): void {
        this.eventArray = [];
        this.data = null;

        document.addEventListener("mousemove", this.eventListener);

        this.collectInterval = window.setInterval(() => {
            this.setData([...this.eventArray]); 
            console.log("data", this.data); 
        }, this.intervalTime);
    }

    private collectMouseMove(event: MouseEvent): void {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }

        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        document.removeEventListener("mousemove", this.eventListener)
        this.data = null
    }

}

export class Keyupcollector implements Collector<KeyboardEvent[]>, ContinousCollector<KeyboardEvent[]> {
    private data: KeyboardEvent[] | null = null;
    intervalTime: number;
    private collectInterval: ReturnType<typeof setTimeout> | number | null = null;
    bufferSize: number;
    eventArray: KeyboardEvent[] = [];
    private eventListener: (event: KeyboardEvent) => void;

    constructor(intervalTime: number, bufferSize: number) {
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectkeyup.bind(this);
    }

    getData(): KeyboardEvent[] | null {
        return this.data;
    }

    setData(data: KeyboardEvent[] | null) {
        this.data = data;
    }

    getKey(): string {
        return "keyup";
    }

    startCollect(): void {
        this.eventArray = [];
        this.data = null;

        document.addEventListener("keyup", this.eventListener);

        
        this.collectInterval = window.setInterval(() => {
            this.setData([...this.eventArray]); 
            console.log("data", this.data); 
        }, this.intervalTime);
    }

    private collectkeyup(event: KeyboardEvent): void {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        document.removeEventListener("keyup", this.eventListener as EventListener)
        this.data = null
    }

}


export class Clickcollector implements Collector<PointerEvent[]>, ContinousCollector<PointerEvent[]> {
    private data: PointerEvent[] | null = null;
    intervalTime: number;
    private collectInterval:ReturnType<typeof setTimeout> | number | null = null;
    bufferSize: number;
    eventArray: PointerEvent[] = [];
    private eventListener: (event: PointerEvent) => void;

    constructor(intervalTime: number, bufferSize: number) {
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectclick.bind(this);
    }

    getData(): PointerEvent[] | null {
        return this.data;
    }

    setData(data: PointerEvent[] | null) {
        this.data = data;
    }

    getKey(): string {
        return "click";
    }

    startCollect(): void {
        this.eventArray = [];
        this.data = null;

        document.addEventListener("click", this.eventListener as EventListener);

        this.collectInterval = window.setInterval(() => {
            this.setData([...this.eventArray]); 
            console.log("data", this.data); 
        }, this.intervalTime);
    }

    private collectclick(event: PointerEvent): void {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }
        
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}


export class DeviceMotioncollector implements Collector<DeviceMotionEvent[]>, ContinousCollector<DeviceMotionEvent[]> {
    private data: DeviceMotionEvent[] | null = null;
    intervalTime: number;
    private collectInterval: ReturnType<typeof setTimeout> | number | null = null;
    bufferSize: number;
    eventArray: DeviceMotionEvent[] = [];
    private eventListener: (event: DeviceMotionEvent) => void;

    constructor(intervalTime: number, bufferSize: number) {
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectMotion.bind(this);
    }

    getData(): DeviceMotionEvent[] | null {
        return this.data;
    }

    setData(data: DeviceMotionEvent[] | null) {
        this.data = data;
    }

    getKey(): string {
        return "devicemotion";
    }

    private async getDeviceMotion(): Promise<DeviceMotionEvent> {
        return new Promise(resolve => {
            window.addEventListener('devicemotion', event => {
                resolve(event);
            }, { once: true });
        });
    }

    
    async startCollect(): Promise<void> {
        this.eventArray = [];
        this.data = null;

        try {
            const initialEvent = await this.getDeviceMotion();
            this.collectMotion(initialEvent);
        } catch (error) {
            console.error("Error initializing device motion collection:", error);
        }
        
        window.addEventListener('devicemotion', this.eventListener);

        
        this.collectInterval = window.setInterval(() => {
            this.setData([...this.eventArray]); 
            console.log(`DeviceMotion Data updated: `, this.data); 
        }, this.intervalTime);
    }

    private collectMotion(event: DeviceMotionEvent): void {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}


export class DeviceOrientationCollector implements Collector<DeviceOrientationEvent[]>, ContinousCollector<DeviceOrientationEvent[]> {
    private data: DeviceOrientationEvent[] | null = null;
    intervalTime: number;
    private collectInterval: ReturnType<typeof setTimeout> | null = null;
    bufferSize: number;
    eventArray: DeviceOrientationEvent[] = [];
    private eventListener: (event: DeviceOrientationEvent) => void;

    constructor(intervalTime: number, bufferSize: number) {
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectOrientation.bind(this);
    }

    getData(): DeviceOrientationEvent[] | null {
        return this.data;
    }

    setData(data: DeviceOrientationEvent[] | null) {
        this.data = data;
    }

    getKey(): string {
        return "deviceorientation";
    }

    async startCollect(): Promise<void> {
        
        this.eventArray = [];
        this.data = null;

        
        try {
            const initialEvent = await this.getDeviceOrientation();
            this.collectOrientation(initialEvent);
        } catch (error) {
            console.error("Error initializing device orientation collection:", error);
        }

        window.addEventListener('deviceorientation', this.eventListener);

        this.collectInterval = setInterval(() => {
            this.setData([...this.eventArray]);
            console.log(`DeviceOrientation Data updated: `, this.data); 
        }, this.intervalTime);
    }

    private async getDeviceOrientation(): Promise<DeviceOrientationEvent> {
        return new Promise(resolve => {
            window.addEventListener('deviceorientation', event => {
                resolve(event);
            }, { once: true });
        });
    }

    private collectOrientation(event: DeviceOrientationEvent): void {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }
    finishCollect(): void {
        if (this.collectInterval) {
            clearInterval(this.collectInterval)
        }
        this.data = null
    }

}


