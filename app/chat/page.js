'use client';

import { useState, useEffect } from 'react';
import { SimpleAuth } from '../../lib/auth';

export default function ChatLogin() {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (SimpleAuth.isLoggedIn()) {
      window.location.href = '/chat/demo';
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (SimpleAuth.validateLogin(email, accessCode)) {
      SimpleAuth.setLoggedIn();
      window.location.href = '/chat/demo';
    } else {
      setError('Invalid credentials. Check your email and access code.');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Welcome to SEA Smart™
          </h1>
          <p className="text-gray-600">
            Enter your access details to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="student@sea-smart.ai"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Access Code
            </label>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="SEA2024"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Check your email for the access code sent after payment
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            {loading ? 'Logging in...' : 'Access My Account'}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Don't have an access code?{' '}
            <a href="/" className="text-blue-600 hover:underline">
              Get started here
            </a>
          </p>
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <a href="/support" className="text-blue-600 hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
