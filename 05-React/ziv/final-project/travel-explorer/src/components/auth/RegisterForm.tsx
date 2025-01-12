import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Loader } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { ServiceUnavailableModal } from '../common/ServiceUnavailableModal';
import { validateRegistration } from '../../utils/validation';

interface ApiError {
  response?: {
    status?: number;
    data?: {
      message?: string;
    };
  };
  message?: string;
}

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showUnavailableModal, setShowUnavailableModal] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setShowUnavailableModal(false);

    const validationError = validateRegistration(formData);
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/profile');
    } catch (err) {
      const error = err as ApiError;
      
      // Show service unavailable modal for network errors, 405, or 503 status
      if (!error.response || error.response.status === 503 || error.response.status === 405) {
        setShowUnavailableModal(true);
      } else {
        setError(error.response?.data?.message || error.message || 'Registration failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && !showUnavailableModal && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <Input
          id="name"
          name="name"
          type="text"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          icon={<User className="w-5 h-5" />}
        />

        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
          icon={<Mail className="w-5 h-5" />}
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          required
          icon={<Lock className="w-5 h-5" />}
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          icon={<Lock className="w-5 h-5" />}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            'Create Account'
          )}
        </Button>
      </form>

      <ServiceUnavailableModal 
        isOpen={showUnavailableModal}
        onClose={() => setShowUnavailableModal(false)}
      />
    </>
  );
};