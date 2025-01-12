import axios, { AxiosError } from 'axios';
import { User } from '../../types/auth.types';

const userApi = axios.create({
  baseURL: '/api/users',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
userApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getProfile = async (): Promise<User> => {
  try {
    const { data } = await userApi.get<User>('/profile');
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile');
    }
    throw new Error('Failed to fetch profile');
  }
};

export const updateProfile = async (updates: Partial<User>): Promise<User> => {
  try {
    const { data } = await userApi.put<User>('/profile', updates);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
    throw new Error('Failed to update profile');
  }
};