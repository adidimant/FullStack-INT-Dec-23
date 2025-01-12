import api from './api';
import { User, AuthResponse } from '../types/auth.types';

export class AuthService {
  static async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', { email, password });
    return response.data;
  }

  static async register(name: string, email: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', { name, email, password });
    return response.data;
  }

  static async getProfile(): Promise<User> {
    const response = await api.get<User>('/users/profile');
    return response.data;
  }
}