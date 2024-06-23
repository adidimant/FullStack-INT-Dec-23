export function calculateAverage(arr: number[]) {
  return arr.reduce((acc, value: number) => {
    return acc + value;
  }, 0) / arr.length;
}

export const DAYS_IN_MILLI = 1000 * 60 * 60 * 24;

function myPrivateModuleFunction() {
  return;
}

export class Airplane {
  private width: number;
  private height: number;
  private company: string;
  private year: number;
  private miles: number;

  constructor(width: number, height: number, company: string, year: number, miles: number) {
    this.width = width;
    this.height = height;
    this.company = company;
    this.miles = miles;
    this.year = year;
  }
  // getters/setters
}

export default Airplane;