import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 mb-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Phone</h2>
              <p className="text-gray-600">050-5552054</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Business Hours</h2>
              <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Friday: 9:00 AM - 2:00 PM</p>
              <p className="text-gray-600">Saturday: Closed</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Email</h2>
              <p className="text-gray-600">ziv.elharar@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};