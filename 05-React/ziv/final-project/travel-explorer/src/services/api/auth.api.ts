import axios, { AxiosError } from 'axios';
import { AuthResponse, LoginCredentials, RegisterCredentials } from '../../types/auth.types';

const authApi = axios.create({
  baseURL: '/api/auth',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    const { data } = await authApi.post<AuthResponse>('/login', credentials);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
    throw new Error('Login failed');
  }
};

export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  try {
    const { data } = await authApi.post<AuthResponse>('/register', credentials);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Registration error:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
    throw new Error('Registration failed');
  }
};

export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    const { data } = await authApi.post<{ valid: boolean }>('/verify', { token });
    return data.valid;
  } catch {
    return false;
  }
};