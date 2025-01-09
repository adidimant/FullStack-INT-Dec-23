import { jwtDecode } from "jwt-decode";

// Define the type for the decoded token
interface DecodedToken {
  userId: string;
}

export const appendServerPrefix = (path: string) => {
  return `http://localhost:3001${path}`;
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

export function parseJwt (token: string) { 
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) { 
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

export function extractUserIdFromToken ():string {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    throw new Error("No authentication token found");
  }

  const decodedToken = jwtDecode<DecodedToken>(token);
  return decodedToken.userId;
};

export const paymentTypeOptions = [
    { value: '', label: 'בחר סוג תשלום' },
    { value: 'Bank transfer', label: 'העברה בנקאית' },
    { value: 'Cash', label: 'מזומן' },
    { value: 'bit', label: 'ביט' },
    { value: 'paybox', label: 'פייבוקס' },
    { value: 'Check', label: "צ'ק" },
    { value: 'Credit card', label: 'כרטיס אשראי' }
];
