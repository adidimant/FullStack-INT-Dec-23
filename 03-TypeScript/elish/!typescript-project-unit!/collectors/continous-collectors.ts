import {ContinousCollector} from './interfaceCollectors';
import {Utils1} from '../utils/Utils'

export class MouseMoveCollector implements ContinousCollector<MouseEvent> {
  interval: number;
  bufferSize?: number | undefined;
  private data: MouseEvent [] = [];

  constructor(interval: number, bufferSize?: number| undefined){
    this.interval = interval;
    this.bufferSize = bufferSize;
  };

  getData(): MouseEvent[] | null {
    return this.data.length > 0 ? this.data.slice() : null;
  };

  getKey(): string {
      return 'MouseMove';
  };

  startCollect(): void{
      document.addEventListener('mousemove', (mousemoveEvent)=>{
        this.data = Utils1.maintainLastXItems(this.data, this.bufferSize, mousemoveEvent);
      });
  };
 
  finishCollect(): void {
      document.removeEventListener('mousemove', (mousemoveEvent)=>{
        this.data = [];
      });
  };
};

// export class MouseMoveCollector implements ContinousCollector<MouseEvent> {
//     public interval: number;
//     public bufferSize: number;
//     private data: MouseEvent[] = [];
  
//     constructor(interval: number, bufferSize: number) {
//       this.interval = interval;
//       this.bufferSize = bufferSize;
//     }
  
//     getData(): MouseEvent[]{
//       return this.data;
//     }
  
//     getKey(): string {
//       return 'mouseMove';
//     }
  
//     startCollect(): void {
//       try {
//         document.addEventListener('mousemove', this.handleMouseMove);
//       } catch (error) {
//         console.error('Failed to start mouse move collection:', error);
//       }
//     }
  
//     finishCollect(): void {
//       try {
//         document.removeEventListener('mousemove', this.handleMouseMove);
//         this.data = [];
//       } catch (error) {
//         console.error('Error finishing mouse move collection:', error);
//       }
//     }
  
//     private handleMouseMove = (event: MouseEvent): void => {
//       try {
//         this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
//       } catch (error) {
//         console.error('Error handling mouse move:', error);
//       }
//     }
//   };


export class KeyboardPressCollector implements ContinousCollector<KeyboardEvent> {
  interval: number;
  bufferSize?: number | undefined;
  private data: KeyboardEvent [] = [];

  constructor(interval: number, bufferSize?: number | undefined){
    this.interval = interval;
    this.bufferSize = bufferSize;
  };

  getData(): KeyboardEvent[] | null {
      return this.data.length > 0 ? this.data.slice() : null;
  };

  getKey(): string {
      return 'KeyboardPress';
  };

  startCollect(): void {
      try{
        document.addEventListener('keyup', (keyupEvent)=>{
          this.data = maintainLastXItems(this.data, this.bufferSize, keyupEvent);
        })
      } catch(error){
        console.error('Error handling keyup Event :', error);
      }
  };

  finishCollect(): void {
      document.removeEventListener('keyup' , (keyupEvent)=>{
        this.data = [];
      });
  };
};

export class ClickCollector implements ContinousCollector<MouseEvent> {
  interval: number;
  bufferSize?: number | undefined;
  private data: MouseEvent [] = [];

  constructor(interval: number, bufferSize?: number | undefined){
    this.interval = interval;
    this.bufferSize = bufferSize;
  };

  getData(): MouseEvent[] | null {
    return this.data.length > 0 ? this.data.slice() : null;
  };

  getKey(): string {
    return 'Click';
  };

  startCollect(): void {  
    try{
      document.addEventListener('click', (clickEvent)=>{
        this.data = maintainLastXItems(this.data, this.bufferSize, clickEvent);
      })
    } catch(error){
      console.error('Error handling click :', error);
    }
  };

  finishCollect(): void {
    document.removeEventListener('click' , (clickEvent)=>{
      this.data = [];
    });
  };
};

export class DeviceMotionCollector implements ContinousCollector<DeviceMotionEvent> {
  interval: number;
  bufferSize?: number | undefined;
  private data: DeviceMotionEvent[] = [];

  constructor(interval: number, bufferSize?: number| undefined) {
    this.interval = interval 
    this.bufferSize = bufferSize 
  }

  getData(): DeviceMotionEvent[] | null {
    return this.data.length > 0 ? this.data.slice() : null; 
  };

  getKey(): string {
      return 'DeviceMotion';
  };

  startCollect() {
    window.addEventListener('devicemotion', (event) => {
      this.data = maintainLastXItems(this.data, this.bufferSize, event);
    });
  };

  finishCollect() {
    window.addEventListener('devicemotion', (event) => {
      this.data = []; 
    }, { once: true });
  };
};


export class DeviceOrientationCollector implements ContinousCollector<DeviceOrientationEvent> {
  interval: number;
  bufferSize?: number | undefined;
  private data: DeviceOrientationEvent[] = [];

  constructor(interval: number, bufferSize?: number | undefined) {
    this.interval = interval;
    this.bufferSize = bufferSize;
  };

  getData(): DeviceOrientationEvent[] | null {
    return this.data.length > 0 ? this.data.slice() : null;
  }

  getKey(): string {
      return 'DeviceOrientation';
  }

  startCollect() {
    window.addEventListener('deviceorientation', (event) => {
      this.data = maintainLastXItems(this.data, this.bufferSize, event);
    });
  }

  finishCollect() {
    window.addEventListener('deviceorientation', (event) => {
      this.data = [];
    }, { once: true });
  }
};



