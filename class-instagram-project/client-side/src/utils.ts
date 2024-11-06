export const appendServerPrefix = (path: string) => {
  return `http://localhost:3000${path}`;
};

export const validateUsername = (value: unknown): boolean => {
  if (typeof value == 'string' && value.length >= 4) {
    return true;
  }
  return false;
};

export function validatePassword(value: unknown): boolean {
  if (typeof value == 'string') {
    return /[A-Z]/.test(value) &&
    /[a-z]/.test(value) &&
    /[0-9]/.test(value) &&
    /[^A-Za-z0-9]/.test(value) &&
    value.length > 4;
  }
  return false;
}

export const validateEmail = (value: unknown): boolean => {
  if (typeof value == 'string') {
    const isMatch = value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return !!isMatch;
  }
  return false;
};

export const validateFullName = (value: unknown): boolean => {
  if (typeof value == 'string' && value.includes(' ') && value.length >=5) {
    return true;
  }
  return false;
};

export const validatePhone = (value: any): boolean => {
  // Covers the following cases:
  // 0528594893
  // +972528594893
  // +97252-8594893
  // 052-8594893
  // 052-859-4893

  value = value.replaceAll('-', '');

  if ((value).toString().length >= 9) {
    if (isNaN(parseInt(value))) {
      return true;
    }
    
    if (value.startsWith('+') && isNaN(parseInt(value.slice(1)))) {
      return true;
    }
  }

  return false;
};