'use client';

import React, { useState, useEffect } from 'react';

export default function PaymentSuccess() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('customer');

  useEffect(() => {
    // Get email from URL parameters using vanilla JavaScript
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email') || 'customer';
    setEmail(emailParam);
    
    // Generate unique credentials
    const timestamp = Date.now().toString().slice(-6);
    const username = `user${timestamp}`;
    const password = 'seasmart2025';
    
    setCredentials({ username, password });
    
    // Store credentials (in a real app, this would be a database call)
    const userData = {
      username,
      password,
      email: emailParam,
      createdAt: new Date().toISOString(),
      plan: 'premium'
    };
    
    // For now, store in localStorage for demo (replace with actual database)
    if (typeof window !== 'undefined') {
      localStorage.setItem(`user_${username}`, JSON.stringify(userData));
    }
    
    setIsLoading(false);
  }, []);

  const handleGoToChat = () => {
    window.location.href = '/chat';
  };

  const handleCopyCredentials = () => {
    const text = `Username: ${credentials.username}\nPassword: ${credentials.password}`;
    navigator.clipboard.writeText(text);
    alert('Credentials copied to clipboard!');
  };

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎉</div>
          <h2>Processing your payment...</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
        
        <h1 style={{ 
          color: '#2c3e50', 
          marginBottom: '20px',
          fontSize: '2.5rem' 
        }}>
          Payment Successful!
        </h1>
        
        <div style={{
          background: 'linear-gradient(45deg, #5B8DEF, #FECF3A)',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          marginBottom: '30px'
        }}>
          <img 
            src="https://i.imgur.com/Xdt38x1.png"
            alt="Mojo"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              marginBottom: '10px'
            }}
          />
          <h2 style={{ margin: '10px 0' }}>Welcome to SEA Smart Premium!</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>Mojo is excited to meet you!</p>
        </div>

        <div style={{
          background: '#f8f9fa',
          padding: '25px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #5B8DEF'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>Your Login Credentials</h3>
          
          <div style={{
            background: 'white',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '15px',
            textAlign: 'left'
          }}>
            <strong>Username:</strong> 
            <code style={{
              background: '#e9ecef',
              padding: '5px 10px',
              borderRadius: '5px',
              marginLeft: '10px',
              fontSize: '1.1rem'
            }}>
              {credentials.username}
            </code>
          </div>
          
          <div style={{
            background: 'white',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '20px',
            textAlign: 'left'
          }}>
            <strong>Password:</strong> 
            <code style={{
              background: '#e9ecef',
              padding: '5px 10px',
              borderRadius: '5px',
              marginLeft: '10px',
              fontSize: '1.1rem'
            }}>
              {credentials.password}
            </code>
          </div>

          <button
            onClick={handleCopyCredentials}
            style={{
              background: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              marginBottom: '10px'
            }}
          >
            📋 Copy Credentials
          </button>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Save these credentials! You'll need them to access your chat with Mojo.
          </p>
          
          <button
            onClick={handleGoToChat}
            style={{
              background: 'linear-gradient(45deg, #28a745, #20c997)',
              color: 'white',
              border: 'none',
              padding: '20px 40px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(40,167,69,0.4)',
              transition: 'all 0.3s ease',
              marginBottom: '20px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            🚀 Start Chatting with Mojo!
          </button>
        </div>

        <div style={{
          background: '#fff3cd',
          padding: '15px',
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <h4 style={{ color: '#856404', margin: '0 0 10px 0' }}>What's Next?</h4>
          <ul style={{ 
            textAlign: 'left', 
            color: '#856404', 
            margin: 0,
            paddingLeft: '20px'
          }}>
            <li>Use your credentials to login at sea-smart.ai/chat</li>
            <li>Chat with Mojo anytime, 24/7</li>
            <li>Earn badges and track progress</li>
            <li>Weekly worksheet packs delivered to WhatsApp</li>
          </ul>
        </div>

        <p style={{ 
          color: '#999', 
          fontSize: '0.9rem', 
          marginTop: '20px' 
        }}>
          Need help? WhatsApp us at +1 868 310 1226
        </p>
      </div>
    </div>
  );
}
