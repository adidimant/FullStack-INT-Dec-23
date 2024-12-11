import { useCallback } from 'react';
import { useAuthStore } from '../store/auth.store';
import { AuthService } from '../services/auth.service';

export const useAuth = () => {
  const { user, setUser, setError, setLoading } = useAuthStore();

  const login = useCallback(async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const { token, user } = await AuthService.login(email, password);
      localStorage.setItem('token', token);
      setUser(user);
    } catch (err: any) {
      const message = err.response?.data?.message || 'Login failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setUser, setError, setLoading]);

  const register = useCallback(async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const { token, user } = await AuthService.register(name, email, password);
      localStorage.setItem('token', token);
      setUser(user);
    } catch (err: any) {
      const message = err.response?.data?.message || 'Registration failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setUser, setError, setLoading]);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, [setUser]);

  return {
    user,
    login,
    register,
    logout,
    isLoading: useAuthStore(state => state.isLoading),
    error: useAuthStore(state => state.error)
  };
};