interface RegistrationData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export const validateRegistration = (data: RegistrationData): string | null => {
    // Name validation
    if (!data.name.trim()) {
      return 'Name is required';
    }
    if (data.name.length < 2) {
      return 'Name must be at least 2 characters long';
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return 'Please enter a valid email address';
    }
  
    // Password validation
    if (data.password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
  
    // Confirm password
    if (data.password !== data.confirmPassword) {
      return 'Passwords do not match';
    }
  
    return null;
  };