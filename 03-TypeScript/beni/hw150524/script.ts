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
    return this.y;
  }

  setY(y: number) {
    this.y = y;
  }

  //TODO - the function returns the quadrant (רביע) of the current point
  getQuadrant(): string {
    if (this.x > 0 && this.y > 0) {
      return "quadrant 1";
    }
    if (this.x < 0 && this.y > 0) {
      return "quadrant 2";
    }
    if (this.x < 0 && this.y < 0) {
      return "quadrant 3";
    }
    return "quadrant 4";
  }

  // Gets another x, y. returns the distance between our current point to the gives point x,y
  // distance = sqrt((x1-x2)^2 + (y1-y2)^2)
  //TODO - expand this function to be able to accept also a second point (receive p2: Point)
  calculateDistance(xP: number | PT, y?: number): number {
    if (xP instanceof PT) {
      const a = xP.getX() - this.x;
      const b = xP.getY() - this.y;
      return Math.sqrt(a * a + b * b);
    }
    const a = xP - this.x;
    const b = (y as number) - this.y;
    return Math.sqrt(a * a + b * b);
  }

  //TODO the funciton should be able to get x,y OR another point p2 - and return the incline between our point to the other point
  calculateIncline(xP: number | PT, y?: number): number {
    if (xP instanceof PT) {
      const a = this.y - xP.getY();
      const b = this.x - xP.getX();
      if (a == 0 || b == 0) {
        return Infinity;
      }
      return a / b;
    }
    const a = (y as number) - this.y;
    const b = xP - this.x;
    if (a == 0 || b == 0) {
      return Infinity;
    }
    return a / b;
  }

  //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
  calculateMiddlePoint(xP: number | PT, y?: number): PT {
    if (xP instanceof PT) {
      const mx = (this.x + xP.getX()) / 2;
      const my = (this.y + xP.getY()) / 2;
      return new PT(mx, my);
    }
    const mx = (this.x + xP) / 2;
    const my = (this.y + (y as number)) / 2;
    return new PT(mx, my);
  }
}

const p1 = new PT(5, 2);
const p2 = new PT(12, 4);
