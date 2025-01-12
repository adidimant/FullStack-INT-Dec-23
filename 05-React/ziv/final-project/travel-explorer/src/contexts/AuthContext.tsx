import React, { createContext, useContext, useState, useCallback } from 'react';
import { AuthService } from '../services/auth.service';
import { User } from '../types/auth.types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = useCallback(async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const { token, user } = await AuthService.register(name, email, password);
      localStorage.setItem('token', token);
      setUser(user);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      setError(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const { token, user } = await AuthService.login(email, password);
      localStorage.setItem('token', token);
      setUser(user);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Login failed';
      setError(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, error, register, login, logout }}>
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