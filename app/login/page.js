'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !accessCode) {
      setError('Please enter both email and access code');
      return;
    }

    setLoading(true);
    setError('');

    // Super simple validation for MVP
    // You'll manually give customers these codes
    const validCodes = {
      'PREMIUM2024': { plan: 'premium', name: 'Premium Access' },
      'BASIC2024': { plan: 'basic', name: 'Basic Access' },
      'TEST123': { plan: 'premium', name: 'Test User' } // For your testing
    };

    const userAccess = validCodes[accessCode.toUpperCase()];

    if (userAccess) {
      // Store user info locally for now
      const userData = {
        email: email,
        plan: userAccess.plan,
        name: userAccess.name,
        loginTime: new Date().toISOString(),
        authenticated: true
      };

      localStorage.setItem('seasmart_user', JSON.stringify(userData));
      
      // Redirect based on plan
      if (userAccess.plan === 'premium') {
        window.location.href = '/chat';
      } else {
        window.location.href = '/worksheets';
      }
    } else {
      setError('Invalid access code. Check your email or contact support.');
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f8ff',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#1976d2', marginBottom: '0.5rem' }}>
            Welcome to SEA Smart™
          </h1>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Enter your access details to continue
          </p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: '#333'
          }}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="your.email@example.com"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '2px solid #e0e0e0',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: '#333'
          }}>
            Access Code
          </label>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your access code"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '2px solid #e0e0e0',
              fontSize: '1rem',
              outline: 'none',
              textTransform: 'uppercase'
            }}
          />
          <p style={{
            fontSize: '0.8rem',
            color: '#666',
            marginTop: '0.5rem'
          }}>
            Check your email for the access code sent after payment
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#ffebee',
            color: '#c62828',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            marginBottom: '1rem',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={loading || !email || !accessCode}
          style={{
            width: '100%',
            backgroundColor: (!email || !accessCode) ? '#ccc' : '#1976d2',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: (!email || !accessCode) ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          {loading ? 'Logging in...' : 'Access My Account'}
        </button>

        <div style={{
          marginTop: '1.5rem',
          textAlign: 'center',
          fontSize: '0.9rem'
        }}>
          <p style={{ color: '#666' }}>
            Don't have an access code?{' '}
            <a href="/pricing" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Get started here
            </a>
          </p>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>
            Need help?{' '}
            <a href="mailto:support@seasmart.tt" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
