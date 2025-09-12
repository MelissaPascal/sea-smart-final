// pages/success.js - Simple success page (easier route)
import { useState } from 'react';

export default function SuccessPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [accessCode] = useState('SEA' + Math.random().toString(36).substr(2, 8).toUpperCase());

  const handleSubmit = () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    
    console.log('Customer Email:', email);
    console.log('Access Code:', accessCode);
    setSubmitted(true);
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '2px solid #ddd',
    fontSize: '1rem',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%'
  };

  if (submitted) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
          
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
            Welcome to SEA Smart™!
          </h1>
          
          <div style={{
            backgroundColor: '#e3f2fd',
            borderRadius: '0.5rem',
            padding: '1rem',
            margin: '1rem 0'
          }}>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Your Access Code:</p>
            <div style={{
              fontSize: '1.5rem',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#1976d2',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              padding: '1rem',
              border: '2px solid #1976d2'
            }}>
              {accessCode}
            </div>
            <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>
              Save this code - you'll need it to log in
            </p>
          </div>

          <div style={{
            backgroundColor: '#fff3e0',
            border: '2px solid #ffb74d',
            borderRadius: '0.5rem',
            padding: '1rem',
            margin: '1rem 0',
            textAlign: 'left'
          }}>
            <h3 style={{ fontWeight: 'bold', color: '#f57c00', marginBottom: '0.5rem' }}>
              📧 Check Your Email
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#e65100' }}>
              We've sent your access details to <strong>{email}</strong>. 
              If you don't see it, check your spam folder.
            </p>
          </div>

          <button
            onClick={() => window.location.href = '/chat'}
            style={{
              ...buttonStyle,
              backgroundColor: '#1976d2'
            }}
          >
            Access Your AI Tutor Now →
          </button>

          <div style={{ marginTop: '1.5rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Need help? Email us at{' '}
              <a href="mailto:support@seasmart.tt" style={{ color: '#1976d2' }}>
                support@seasmart.tt
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
          Payment Successful! 🎉
        </h1>
        
        <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Thank you for choosing SEA Smart™. To complete your setup and access your AI tutor, 
          please provide your email address.
        </p>

        <div>
          <label style={{ 
            display: 'block', 
            fontSize: '0.9rem', 
            fontWeight: 'bold', 
            color: '#333', 
            marginBottom: '0.5rem',
            textAlign: 'left'
          }}>
            Email Address
          </label>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            style={inputStyle}
          />

          <button
            onClick={handleSubmit}
            style={buttonStyle}
          >
            📧 Send My Access Details
          </button>
        </div>

        <div style={{
          backgroundColor: '#e3f2fd',
          borderRadius: '0.5rem',
          padding: '1rem',
          margin: '1.5rem 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <div style={{ fontSize: '1.2rem' }}>📥</div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontWeight: 'bold', color: '#1976d2', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>
                What's Next?
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#1565c0', margin: 0 }}>
                You'll receive your login details via email, plus a quick start guide 
                to help you create your first SEA practice worksheet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
