'use client';

export default function UpgradePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f8ff',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '1rem',
        padding: '3rem',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎭</div>
        
        <h1 style={{ color: '#1976d2', marginBottom: '1rem' }}>
          Meet Mojo - Your AI Learning Companion
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
          You're currently on the Basic Plan. Upgrade to Premium to unlock Mojo's full experience!
        </p>

        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <h3 style={{ color: '#1976d2', marginTop: 0 }}>Premium Plan Includes:</h3>
          <ul style={{ color: '#333', lineHeight: '1.6' }}>
            <li>Direct chat with Mojo AI companion</li>
            <li>Personalized learning quests</li>
            <li>Badge collection & gamification</li>
            <li>Trinidad cultural learning context</li>
            <li>Progress tracking & parent dashboard</li>
            <li>Everything from Basic Plan</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff3e0',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          border: '2px solid #ff9800'
        }}>
          <h3 style={{ color: '#f57c00', marginTop: 0 }}>Special Launch Price</h3>
          <p style={{ margin: 0, fontSize: '1.1rem' }}>
            <strong>TTD $600/year</strong> (Only TTD $50/month) - Save TTD $360!
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a
            href="/pricing"
            style={{
              backgroundColor: '#1976d2',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Upgrade to Premium
          </a>
          
          <a
            href="/worksheets"
            style={{
              backgroundColor: '#f5f5f5',
              color: '#666',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}
          >
            Continue with Basic
          </a>
        </div>

        <p style={{
          fontSize: '0.9rem',
          color: '#666',
          marginTop: '1.5rem'
        }}>
          30-day money-back guarantee • Cancel anytime
        </p>
      </div>
    </div>
  );
}
