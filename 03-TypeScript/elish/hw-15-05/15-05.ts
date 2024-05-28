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

    //TODO - the function returns the quadrant (רביע) of the current point
    //Quadrant in case the point in some quadrant, if no point data or the point in the center of the axes - returns null
    getQuadrant():number| null{
        if(this.x>0 && this.y>0)
            return 1;
        else if(this.x<0 && this.y>0)
            return 2;
        else if(this.x<0 && this.y<0)
            return 3;
        else if(this.x>0 && this.y<0)
            return 4;
        else
            return null;
    };

    // Gets another x, y. returns the distance between our current point to the gives point x,y
    calculateDistance(x: number, y: number): number {
        const deltaX = x - this.x;
        const deltaY = y - this.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    //TODO the funciton should be able to get x,y OR another point p2 - and return the incline between our point to the other point
    calculateIncline(xPT: number | PT, y?:number): number {
        if(xPT instanceof PT)
            return (this.y - xPT.getY()) / (this.x - xPT.getX());
        else if(y == undefined)
            throw new Error('No value was entered for y');
        else
            return (this.y - y) / (this.x - xPT);
    };

    //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
    calculateMiddlePoint(xPT: number | PT, y?: number): PT{
        if(xPT instanceof PT)
            return new PT((this.x + xPT.getX())/2 , (this.y + xPT.getY()/2));
        else if(y == undefined)
            throw new Error('No value was entered for y');
        else
            return new PT((this.x + xPT)/2 , (this.y + y)/2);
    };

  }
  // instances (מופעים) of the clas PT
  const p1 = new PT(8, 4);
  const p2 = new PT(50, 70);

  

  