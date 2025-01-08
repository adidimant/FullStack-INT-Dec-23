import express from 'express';

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

  // const result = convertQueryToNumber('45');
  // if (typeof result == 'number' && result = 45) {
  //   return true;
  // }
  // return false;

  // const result = convertQueryToNumber(45);
  // if (typeof result == 'number' && result = 45) {
  //   return true;
  // }
  // return false;

  // const result = convertQueryToNumber('asd');
  // if (result == null) {
  //   return true;
  // }
  // return false;

  // const result = convertQueryToNumber([], 5);
  // if (result == 5) {
  //   return true;
  // }
  // return false;

  static validateRequiredParams = (requiredFields: string[]) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
      const body = req.body;
  
      const allFieldsExist = requiredFields.every((field: string) => field in body);
  
      if (!allFieldsExist) {
        res.status(400).send(`One of the required parameters [${requiredFields.join()}] is missing`);
        return;
      }
    
      next();
    };
  };
}

export default Utils;