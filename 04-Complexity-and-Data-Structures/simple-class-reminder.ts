class Car {
  private numberCard: number;
  private company: string;
  private model: string;
  private year: number;
  private owner: string;
  private color: string;

  constructor(numberCard: number, company: string, model: string, year: number, owner: string, color: string) {
    this.numberCard = numberCard;
    this.company = company;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.color = color;
  }

  getNumberCard(): number {
    return this.numberCard;
  }

  getCompany(): string {
    return this.company;
  }

  getModel(): string {
    return this.model;
  }

  getOwner(): string {
    return this.owner;
  }

  setOwner(newOwner: string) {
    this.owner = newOwner;
  }

  getColor(): string {
    return this.color;
  }

  setColor(newColor: string): void {
    this.color = newColor;
  }
}

class ElectricCar extends Car {
  private batteryModel: string;
  private batteryYear: number;
  private horsePower: number;
}

const car = new Car(545355, 'Honda', 'Civic', 2019, 'Roy', 'red');
car.setOwner('Danny');

const shouldUpdateServer = car instanceof Car;