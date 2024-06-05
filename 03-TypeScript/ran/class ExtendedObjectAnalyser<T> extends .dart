class ExtendedObjectAnalyser<T> extends ObjectAnalyser<T> {
  constructor(obj: T) {
    super(obj);
  }

  getMinValue(): number | null {
    if (typeof this.obj !== 'object' || this.obj === null) {
      return null;
    }

    const values = Object.values(this.obj);
    let minValue: number | null = null;

  }
  getMinValue(): number | null {
    if (typeof this.obj !== 'object' || this.obj === null) {
      return null;
    }

    const values = Object.values(this.obj);
    let minValue: number | null = null;

    for (const value of values) {
      if (typeof value === 'number') {
        if (minValue === null || value < minValue) {
          minValue = value;
        }
      } else if (typeof value === 'object' && value !== null) {
        const nestedMin = new ExtendedObjectAnalyser(value).getMinValue();
        if (nestedMin !== null && (minValue === null || nestedMin < minValue)) {
          minValue = nestedMin;
        }
      }
    }

    return minValue;
  }