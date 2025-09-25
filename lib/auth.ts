// types/auth.ts
export interface User {
  id: string;
  email: string;
  password: string;
  accessCode: string;
  createdAt: string;
  tier: 'premium' | 'basic';
}

// lib/auth.ts - Simple user management system
const USERS_STORAGE_KEY = 'sea_smart_users';

export class AuthManager {
  static getUsers(): User[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(USERS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  static saveUsers(users: User[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }

  static generateCredentials(): { email: string; password: string; accessCode: string } {
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substr(2, 4);
    
    return {
      email: `student${timestamp}@sea-smart.ai`,
      password: `mojo${randomSuffix}`,
      accessCode: `SEA${timestamp.toString().slice(-6)}`
    };
  }

  static createUser(tier: 'premium' | 'basic' = 'premium'): User {
    const credentials = this.generateCredentials();
    const users = this.getUsers();
    
    const newUser: User = {
      id: Date.now().toString(),
      email: credentials.email,
      password: credentials.password,
      accessCode: credentials.accessCode,
      createdAt: new Date().toISOString(),
      tier
    };

    users.push(newUser);
    this.saveUsers(users);
    
    return newUser;
  }

  static validateUser(email: string, accessCode: string): User | null {
    const users = this.getUsers();
    return users.find(user => 
      user.email === email && user.accessCode === accessCode
    ) || null;
  }

  static getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('current_user');
    return stored ? JSON.parse(stored) : null;
  }

  static setCurrentUser(user: User): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('current_user', JSON.stringify(user));
  }

  static logout(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('current_user');
  }
}

// app/payment-success/page.tsx - Fixed version
'use client';

import { useEffect, useState } from 'react';
import { AuthManager, User } from '../../lib/auth';

export default function PaymentSuccess() {
  const [user, setUser] = useState<User | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Create new user on payment success
    const newUser = AuthManager.createUser('premium');
    setUser(newUser);
  }, []);

  const copyCredentials = async () => {
    if (!user) return;
    
    const credentialsText = `Email: ${user.email}\nPassword: ${user.password}\nAccess Code: ${user.accessCode}`;
    
    try {
      await navigator.clipboard.writeText(credentialsText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy credentials:', err);
    }
  };

  const startChatting = () => {
    if (!user) return;
    AuthManager.setCurrentUser(user);
    window.location.href = '/chat';
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-yellow-400 flex items-center justify-center">
        <div className="text-white text-xl">Generating your credentials...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-yellow-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        {/* Mojo Welcome */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-full flex items-center justify-center">
            <img 
              src="https://i.imgur.com/Xdt38x1.png" 
              alt="Mojo" 
              className="w-16 h-16 rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to SEA Smart Premium!
          </h1>
          <p className="text-gray-600">
            Mojo is excited to meet you!
          </p>
        </div>

        {/* Credentials Display */}
        <div className="border-2 border-blue-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
            Your Login Credentials
          </h2>
          
          <div className="space-y-2">
            <div>
              <label className="text-sm text-gray-600">Email:</label>
              <div className="bg-gray-100 p-2 rounded font-mono text-sm">
                {user.email}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Password:</label>
              <div className="bg-gray-100 p-2 rounded font-mono text-sm">
                {user.password}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Access Code:</label>
              <div className="bg-gray-100 p-2 rounded font-mono text-sm">
                {user.accessCode}
              </div>
            </div>
          </div>

          <button
            onClick={copyCredentials}
            className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            📋 {copied ? 'Copied!' : 'Copy Credentials'}
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 mb-6">
          Save these credentials! You'll need them to access your chat with Mojo.
        </div>

        {/* Start Chatting Button */}
        <button
          onClick={startChatting}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors mb-4"
        >
          🚀 Start Chatting with Mojo!
        </button>

        {/* What's Next */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">What's Next?</h3>
          <p className="text-sm text-yellow-700">
            Use your credentials to login at sea-smart.ai/chat
          </p>
        </div>
      </div>
    </div>
  );
}

// app/chat/page.tsx - Fixed login page
'use client';

import { useState, useEffect } from 'react';
import { AuthManager, User } from '../../lib/auth';

export default function ChatLogin() {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const currentUser = AuthManager.getCurrentUser();
    if (currentUser) {
      window.location.href = '/chat/room';
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const user = AuthManager.validateUser(email.trim(), accessCode.trim());
      
      if (user) {
        AuthManager.setCurrentUser(user);
        window.location.href = '/chat/room';
      } else {
        setError('Invalid access code. Check your email or contact support.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
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
              placeholder="student123@sea-smart.ai"
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
              placeholder="SEA123456"
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
            {loading ? 'Accessing Account...' : 'Access My Account'}
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

// app/chat/room/page.tsx - Protected chat room
'use client';

import { useEffect, useState } from 'react';
import { AuthManager, User } from '../../../lib/auth';

export default function ChatRoom() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = AuthManager.getCurrentUser();
    
    if (!currentUser) {
      window.location.href = '/chat';
      return;
    }
    
    setUser(currentUser);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    AuthManager.logout();
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-yellow-400 flex items-center justify-center">
        <div className="text-white text-xl">Loading your chat with Mojo...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Please log in to access the chat</p>
          <a href="/chat" className="text-blue-600 hover:underline">
            Go to login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-yellow-400">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.imgur.com/Xdt38x1.png" 
            alt="Mojo" 
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h1 className="font-semibold">Chat with Mojo</h1>
            <p className="text-sm text-gray-600">Welcome, {user.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-red-600 hover:text-red-700 text-sm"
        >
          Logout
        </button>
      </div>

      {/* Chat Interface - You can integrate your existing chat component here */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <img 
              src="https://i.imgur.com/Xdt38x1.png" 
              alt="Mojo" 
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Hey there! I'm Mojo! 🎵
            </h2>
            <p className="text-gray-600">
              Ready to practice for your SEA exam? Let's make learning fun!
            </p>
          </div>

          {/* TODO: Integrate your existing chat component from /chat/demo/page.tsx here */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-blue-800">
              🚧 Your chat interface will be integrated here! 
              <br />
              Copy your chat component from the demo page and paste it below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
