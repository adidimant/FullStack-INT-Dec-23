function magical(arr: (number |string)[], obj:{[key: string] : boolean} ) :boolean {
    for (let key in obj) {
        if (arr.includes(key)) {
          console.log(`${key} exists in the array`);
          return true;
        }
        else {
            return false;
        }
    }
}

function magical2(arr: (number |string)[], obj:{[key: string] : boolean} ) :boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            return true
        }
    }
    return false;
}
type Point2 = {
    x: number,
    y: number
}

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
    calculateDistance(x1: number, y1: number) : number{
        const distX = this.x - x1;
        const distY = this.y - y1;
        const distance = Math.sqrt(distX * distX + distY * distY);
        return distance;
    }

    calculateDistance2(x1: number | Point2, y1: number) : number{
        if (typeof x1 === 'object') {
            
        }
        const distX = this.x - x1;
        const distY = this.y - y1;
        const distance = Math.sqrt(distX * distX + distY * distY);
        return distance;
    }
  }
  // instances (מופעים) of the clas PT
  const p1 = new PT(8, 4);
  const p2 = new PT(50, 70);