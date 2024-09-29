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
}

export default Utils;
