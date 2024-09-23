class Utils {
  static convertQueryToNumber(param: any, defaultValue: number): number | null {
    if (typeof param == 'number') {
      return param;
    }

    if (typeof param == 'string') {
      const result = parseInt(param);
      return isNaN(result) ? null : result;
    }

    return defaultValue;
  }
  public uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }

}

export default Utils;
