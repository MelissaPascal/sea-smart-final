'use client';

import { SimpleAuth } from '../../lib/auth';
import { useState } from 'react';

export default function PaymentSuccess() {
  const [copied, setCopied] = useState(false);

  const copyCredentials = async () => {
    const credentialsText = `Email: ${SimpleAuth.STUDENT_EMAIL}\nPassword: ${SimpleAuth.STUDENT_PASSWORD}\nAccess Code: ${SimpleAuth.ACCESS_CODE}`;
    
    try {
      await navigator.clipboard.writeText(credentialsText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = credentialsText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGoToChat = () => {
    SimpleAuth.setLoggedIn();
    window.location.href = '/chat';
  };

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
          background: 'linear-gradient(45deg, #5BBDEF, #FECF3A)',
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

        {/* Static Credentials Display */}
        <div style={{
          background: '#f8f9fa',
          padding: '25px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #5BBDEF'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>Your Login Credentials</h3>
          
          <div style={{
            background: 'white',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '15px',
            textAlign: 'left'
          }}>
            <strong>Email:</strong>
            <code style={{
              background: '#e9ecef',
              padding: '5px 10px',
              borderRadius: '5px',
              marginLeft: '10px',
              fontSize: '1.1rem'
            }}>
              {SimpleAuth.STUDENT_EMAIL}
            </code>
          </div>

          <div style={{
            background: 'white',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '15px',
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
              {SimpleAuth.STUDENT_PASSWORD}
            </code>
          </div>

          <div style={{
            background: 'white',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '20px',
            textAlign: 'left'
          }}>
            <strong>Access Code:</strong>
            <code style={{
              background: '#e9ecef',
              padding: '5px 10px',
              borderRadius: '5px',
              marginLeft: '10px',
              fontSize: '1.1rem'
            }}>
              {SimpleAuth.ACCESS_CODE}
            </code>
          </div>

          <button
            onClick={copyCredentials}
            style={{
              background: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}
          >
            {copied ? '📋 Copied!' : '📋 Copy Credentials'}
          </button>
        </div>

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
            marginBottom: '30px'
          }}
        >
          🚀 Start Chatting with Mojo!
        </button>

        <div style={{
          background: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '10px',
          padding: '20px'
        }}>
          <h4 style={{ color: '#856404', marginBottom: '10px' }}>What's Next?</h4>
          <p style={{ color: '#856404', margin: 0 }}>
            Use your credentials to login at sea-smart.ai/chat
          </p>
        </div>

        <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '20px' }}>
          Need help? WhatsApp us at +1 868 310 1226
        </p>
      </div>
    </div>
  );
}
