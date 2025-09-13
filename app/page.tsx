'use client';

import LandingPage from './components/LandingPage';

const PricingCTASection = () => {
  return (
    <section style={{ 
      textAlign: 'center', 
      padding: '4rem 2rem',
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid #e9ecef'
    }}>
      <h2 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        marginBottom: '1rem',
        color: '#333'
      }}>
        Ready to Transform Your Teaching?
      </h2>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '3rem',
        maxWidth: '700px',
        margin: '0 auto 3rem auto',
        lineHeight: '1.6'
      }}>
        Join hundreds of Caribbean educators already using SEA Smart™ to create 
        engaging, culturally-relevant worksheets in seconds
      </p>
      
      <div style={{ 
        display: 'flex', 
        gap: '1.5rem', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        marginBottom: '2rem'
      }}>
        <a 
          href="/pricing"
          style={{
            display: 'inline-block',
            backgroundColor: '#1976d2',
            color: 'white',
            padding: '1.2rem 2.5rem',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(25, 118, 210, 0.3)',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.backgroundColor = '#1565c0';
            target.style.transform = 'translateY(-2px)';
            target.style.boxShadow = '0 6px 12px rgba(25, 118, 210, 0.4)';
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.backgroundColor = '#1976d2';
            target.style.transform = 'translateY(0)';
            target.style.boxShadow = '0 4px 6px rgba(25, 118, 210, 0.3)';
          }}
        >
          View Pricing Plans
        </a>
        
        <a 
          href="/chat"
          style={{
            display: 'inline-block',
            border: '2px solid #1976d2',
            color: '#1976d2',
            backgroundColor: 'white',
            padding: '1.2rem 2.5rem',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.backgroundColor = '#1976d2';
            target.style.color = 'white';
            target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.backgroundColor = 'white';
            target.style.color = '#1976d2';
            target.style.transform = 'translateY(0)';
          }}
        >
          Try Free Demo
        </a>
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        marginBottom: '1.5rem',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        <span>🔒 Secure Payment</span>
        <span>🇹🇹 Trinidad & Tobago</span>
        <span>📚 SEA Aligned</span>
        <span>💰 30-Day Guarantee</span>
      </div>
      
      <p style={{ 
        color: '#666', 
        fontSize: '1rem',
        fontWeight: '500'
      }}>
        From TTD $50/month • 30-day money-back guarantee • Cancel anytime
      </p>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <LandingPage />
      <PricingCTASection />
    </div>
  );
}
