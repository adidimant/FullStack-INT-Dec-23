import axios from 'axios';
import { AuthResponse, LoginCredentials, RegisterCredentials } from '../../types/auth.types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5501';

const authApi = axios.create({
  baseURL: `${API_URL}/auth`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    const { data } = await authApi.post<AuthResponse>('/login', credentials);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  try {
    const { data } = await authApi.post<AuthResponse>('/register', credentials);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    const { data } = await authApi.post('/verify', { token });
    return data.valid;
  } catch {
    return false;
  }
};