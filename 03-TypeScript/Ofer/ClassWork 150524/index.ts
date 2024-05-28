console.log(`test`)


class PT {
    private x: number;
    private y: number;
    private biggerValue: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.biggerValue = x > y ? x : y;
    }
    getX(): number {
      return this.x;
    }
    setX(x: number): void {
      this.x = x;
    }
    getY(): number {
      return this.y
    }
    setY(y: number) {
      this.y = y;
    }
    // Gets another x, y. returns the distance between our current point to the gives point x,y
    calculateDistance(x:number, y:number){
        const d = Math.sqrt((this.x-x)**2+(this.y-y)**2);
        console.log(d);
        return d;
    }
  }
  // instances (מופעים) of the clas PT
  const p1 = new PT(8, 4);
  const p2 = new PT(50, 70);
  p1.calculateDistance(p2.getX(),p2.getY())
