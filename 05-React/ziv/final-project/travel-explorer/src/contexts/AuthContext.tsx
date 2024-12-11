import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import * as authApi from '../services/api/auth.api';
import * as userApi from '../services/api/user.api';
import { User, LoginCredentials, RegisterCredentials } from '../types/auth.types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const isValid = await authApi.verifyToken(token);
        if (!isValid) {
          throw new Error('Invalid token');
        }

        const userData = await userApi.getProfile();
        setUser(userData);
      } catch (error) {
        localStorage.removeItem('token');
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      setError(null);
      const { token, user } = await authApi.login(credentials);
      localStorage.setItem('token', token);
      setUser(user);
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, []);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    try {
      setError(null);
      const { token, user } = await authApi.register(credentials);
      localStorage.setItem('token', token);
      setUser(user);
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};