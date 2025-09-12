// pages/pricing.js - Simplified version with inline styles
import { useState } from 'react';

export default function PricingPage() {
  const handlePayment = (planType, amount) => {
    // Use your original WiPay link for now
    const originalWiPayUrl = "https://tt.wipayfinancial.com/to_me/pascals_bakery_limited";
    
    // Log the plan details for manual tracking
    console.log(`Customer selected: ${planType} plan for TTD $${amount}`);
    alert(`Redirecting to payment for ${planType} plan (TTD $${amount}). You'll need to manually track this payment.`);
    
    // Redirect to WiPay
    window.location.href = originalWiPayUrl;
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    margin: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const buttonStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '1rem'
  };

  const buttonHoverStyle = {
    backgroundColor: '#1565c0'
  };

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ 
            display: 'inline-block', 
            backgroundColor: '#e3f2fd', 
            color: '#1976d2', 
            padding: '0.5rem 1rem', 
            borderRadius: '2rem', 
            marginBottom: '1rem',
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>
            📘 Your Pocket Tutor for Caribbean Success
          </div>
          
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#333', 
            margin: '1rem 0' 
          }}>
            Unlock AI-Powered SEA Prep Materials
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            Designed for <strong>teachers, parents, and tutors</strong> guiding Caribbean students. 
            Get unlimited practice sheets, study support, and cultural learning tools.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          
          {/* Annual Plan */}
          <div style={{
            ...cardStyle,
            border: '3px solid #1976d2',
            position: 'relative',
            transform: 'scale(1.05)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#1976d2',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '1rem',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              ⭐ Best Value - Save TTD $360
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginTop: '1rem' }}>
              Annual Plan
            </h3>
            
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1976d2', margin: '1rem 0' }}>
              TTD $600
            </div>
            
            <div style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '1.1rem' }}>
              Only TTD $50/month
            </div>
            
            <div style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0' }}>
              Save TTD $360 vs monthly plan
            </div>

            <div style={{ margin: '2rem 0', textAlign: 'left' }}>
              <div style={{ margin: '0.5rem 0', color: '#333' }}>✅ Unlimited AI worksheet generation</div>
              <div style={{ margin: '0.5rem 0', color: '#333' }}>✅ All subjects: Math, English, Science</div>
              <div style={{ margin: '0.5rem 0', color: '#333' }}>✅ Caribbean cultural context</div>
              <div style={{ margin: '0.5rem 0', color: '#333' }}>✅ Instant PDF downloads</div>
            </div>

            <button
              style={buttonStyle}
              onClick={() => handlePayment('Annual', 600)}
              onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              💳 Choose Annual Plan
            </button>
          </div>

          {/* Monthly Plan */}
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginTop: '1rem' }}>
              Monthly Plan
            </h3>
            
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#666', margin: '1rem 0' }}>
              TTD $80
            </div>
            
            <div style={{ color: '#666', fontSize: '1rem' }}>
              per month
            </div>
            
            <div style={{ color: '#888', fontSize: '0.9rem', margin: '0.5rem 0' }}>
              Flexible month-to-month
            </div>

            <div style={{ margin: '2rem 0', textAlign: 'left' }}>
              <div style={{ margin: '0.5rem 0', color: '#333' }}>✅ All the same features</div>
              <div style={{ margin: '0.5rem 0', color: '#333' }}>✅ Cancel anytime</div>
              <div style={{ margin: '0.5rem 0', color: '#333' }}>✅ No long-term commitment</div>
              <div style={{ height: '1.5rem' }}></div>
            </div>

            <button
              style={{
                ...buttonStyle,
                backgroundColor: '#9e9e9e'
              }}
              onClick={() => handlePayment('Monthly', 80)}
              onMouseOver={(e) => e.target.style.backgroundColor = '#757575'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#9e9e9e'}
            >
              💳 Choose Monthly Plan
            </button>
          </div>
        </div>

        {/* Trust Section */}
        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '2rem' }}>
            Whether you're a <strong>parent helping your child at home</strong>, a{' '}
            <strong>teacher looking for classroom-ready support</strong>, or a{' '}
            <strong>tutor guiding multiple students</strong>—SEA Smart™ is your trusted study partner.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap',
            color: '#666',
            fontSize: '0.9rem'
          }}>
            <div>🔒 Secure Payment</div>
            <div>🇹🇹 Trinidad & Tobago</div>
            <div>📚 SEA Aligned</div>
            <div>💰 30-Day Guarantee</div>
          </div>
        </div>

        {/* Simple Success Message */}
        <div style={{
          ...cardStyle,
          maxWidth: '600px',
          margin: '2rem auto',
          backgroundColor: '#f3e5f5'
        }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '1rem' }}>
            "Finally, worksheets that actually speak to my students' experiences. 
            My SEA prep classes have never been more engaged!"
          </p>
          <p style={{ fontSize: '0.9rem', color: '#888' }}>
            — Ms. Johnson, Secondary School Teacher, Port of Spain
          </p>
        </div>

        {/* Navigation Back */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a 
            href="/" 
            style={{
              color: '#1976d2',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
