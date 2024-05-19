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
    getQuadrant() : number | string | undefined {
        let negaOrPosiX =  Math.sign(this.x);
            let negaOrPosiY =  Math.sign(this.y);
            if (negaOrPosiX == 1 && negaOrPosiY == 1) {
                return 1;
            } else if (negaOrPosiX == -1 && negaOrPosiY == 1) {
                return 2;
            } else if (negaOrPosiX == -1 && negaOrPosiY == -1) {
                return 3;
            } else if (negaOrPosiX == 1 && negaOrPosiY == -1) {
                return 4;
            } else if (negaOrPosiX == 0 && negaOrPosiY == 0) {
                return 0; 
            } else if (negaOrPosiX == 0 && negaOrPosiY !== 0) {
                return 'y axis'; 
            } else if (negaOrPosiX !== 0 && negaOrPosiY == 0) {
                return 'x axis'; 
            }
                
        }

        // Gets another x, y. returns the distance between our current point to the gives point x,y
        // calculateDistance(x: number, y: number): number {
        //     return Math.sqrt((this.x-x) **2 + (this.y-y) **2)
        // }

        calculateDistance(xOrPT: number | PT, y?: number): number {
            if (xOrPT instanceof PT) {
                return Math.sqrt((this.x - xOrPT.getX()) **2 + (this.y-p1.getY()) **2);
            }
            // reaching here in case xOrPT is a number
            if (y == undefined) {
                throw new Error("y 2nd parameter must be provided if x was provided!");
            }
            return Math.sqrt((this.x-xOrPT) **2 + (this.y-y) **2);
        }

        //TODO the funciton should be able to get x,y OR another point p2 - and return the incline between our point to the other point
        // calculateIncline(x: number, y: number): number {
        //     return (this.x - x) / (this.y - y)
        // }

        calculateIncline(xOrPT: number | PT, y?: number): number {
            if (xOrPT instanceof PT) {
                return (this.x - xOrPT.getX()) / (this.y - xOrPT.getY());
            }
            if (y == undefined) {
                throw new Error("y 2nd parameter must be provided if x was provided!");
            }
            return (this.x - xOrPT) / (this.y - y);
        }

        //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
        // calculateMiddlePoint(x: number, y: number) :PT{
        //     let x1 = (this.x + x) / 2
        //     let y1 = (this.y + y) / 2
        //     let midSection = new PT(x1, y1)
        //     return midSection
        // }

        calculateMiddlePoint(p: PT) :PT{
            let x1 = (this.x + p.x) / 2
            let y1 = (this.y + p.y) / 2
            let midSection = new PT(x1, y1)
            return midSection
        }

        
    }
    // instances (מופעים) of the clas PT
    const p1 = new PT(8, 4);
    const p2 = new PT(50, 70);
    const p3 = new PT(-2, -3);
    const p4 = new PT(0, -4);
    const p5 = new PT(25, -15);
    const p6 = new PT(-7, 16);
    const p7 = new PT(0, 0);


    console.log(p1.getQuadrant());
    console.log(p3.getQuadrant());
    console.log(p5.getQuadrant());
    console.log(p6.getQuadrant());
    console.log(p7.getQuadrant());
    console.log(p4.getQuadrant());


    console.log(p2.calculateDistance(p1));

    console.log(p1.calculateIncline(p2));

    console.log(p1.calculateMiddlePoint(p2));

    


    
