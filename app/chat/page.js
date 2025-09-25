'use client';

import { useState, useEffect } from 'react';
import { SimpleAuth } from '../../lib/auth';

export default function ChatLogin() {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if already logged in
    if (SimpleAuth.isLoggedIn()) {
      window.location.href = '/chat/demo'; // Redirect to your existing chat demo
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (SimpleAuth.validateLogin(email, accessCode)) {
      SimpleAuth.setLoggedIn();
      window.location.href = '/chat/demo'; // Redirect to your existing chat demo
    } else {
      setError('Invalid credentials. Check your email and access code.');
    }
    
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '10px',
        padding: '40px',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#007bff', marginBottom: '10px', fontSize: '2rem' }}>
            Welcome to SEA Smart™
          </h1>
          <p style={{ color: '#666' }}>
            Enter your access details to continue
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '5px', 
              fontWeight: 'bold',
              color: '#333'
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="student@sea-smart.ai"
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '5px', 
              fontWeight: 'bold',
              color: '#333'
            }}>
              Access Code
            </label>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="SEA2024"
              required
            />
            <p style={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              margin: '5px 0 0 0' 
            }}>
              Check your email for the access code sent after payment
            </p>
          </div>

          {error && (
            <div style={{
              background: '#f8d7da',
              color: '#721c24',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '20px',
              fontSize: '0.9rem'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? '#6c757d' : '#007bff',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Logging in...' : 'Access My Account'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>
            Don't have an access code?{' '}
            <a href="/" style={{ color: '#007bff' }}>Get started here</a>
          </p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Need help?{' '}
            <a href="/support" style={{ color: '#007bff' }}>Contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
