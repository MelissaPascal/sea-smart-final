// app/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import './homepage.css';

export default function HomePage() {
  const handleQuestClick = (quest: string) => {
    alert(`🎉 Welcome to your ${quest}, Champion! Mojo is getting ready to meet you!`);
  };

  const handleTryNowClick = () => {
    window.location.href = '/chat';
  };

  return (
    <>
      {/* Confetti Animation */}
      {[...Array(9)].map((_, i) => (
        <div key={i} className="confetti" style={{
          left: `${(i + 1) * 10}%`,
          animationDelay: `${i * 0.3}s`,
          backgroundColor: ['#00bfff', '#ff1493', '#32cd32', '#ffd700', '#ff4500', '#9370db', '#ff69b4', '#00ced1', '#ffa500'][i]
        }} />
      ))}
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="steelpan-emoji">🥁🎭🌟</div>
        
        <h1 className="main-title">Hey Champion!</h1>
        
        <div className="mojo-container">
          <img 
            src="/images/mojo/steelpan-parrot.png" 
            alt="Mojo the Steelpan Parrot" 
            width={200}
            height={200}
            className="mojo-character"
          />
        </div>
        
        <div className="mojo-intro">
          <strong>🌈 Mojo here!</strong> Your very own Quest guide and SEA sidekick!<br/>
          I&apos;ve got a bag full of badges, jokes, and quests to help you <strong>WIN</strong> at school — AND have fun doing it!
        </div>
        
        <div className="quest-buttons">
          <button className="quest-btn math-btn" onClick={() => handleQuestClick('Maths Quest')}>
            🍎 Start Maths Quest
          </button>
          <button className="quest-btn reading-btn" onClick={() => handleQuestClick('Reading Adventure')}>
            📖 Reading Adventure
          </button>
          <button className="quest-btn science-btn" onClick={() => handleQuestClick('Science Explorer')}>
            🧪 Science Explorer
          </button>
        </div>
      </section>
      
      {/* Badges Section */}
      <section className="badges-section">
        <h2 className="section-title">🏅 Collect Amazing Badges!</h2>
        <div className="badges-grid">
          <div className="badge-card">
            <img 
              src="https://i.imgur.com/CEYgdFb.png" 
              alt="Confidence Climber Badge" 
              width={150}
              height={150}
              className="badge-image"
            />
            <div className="badge-name">🌱 Confidence Climber</div>
            <div className="badge-description">When you show effort and keep trying!</div>
          </div>
          
          <div className="badge-card">
            <img 
              src="https://i.imgur.com/uZ5LZSl.png" 
              alt="Buccoo Reef Explorer" 
              width={150}
              height={150}
              className="badge-image"
            />
            <div className="badge-name">🐠 Buccoo Reef Explorer</div>
            <div className="badge-description">When you get 3 answers right in a row!</div>
          </div>
          
          <div className="badge-card">
            <img 
              src="https://i.imgur.com/4nvyKrR.png" 
              alt="SEA Champion Badge" 
              width={150}
              height={150}
              className="badge-image"
            />
            <div className="badge-name">🌳 SEA Champion</div>
            <div className="badge-description">When you feel super confident!</div>
          </div>
          
          <div className="badge-card">
            <img 
              src="https://i.imgur.com/ogz8p3K.png" 
              alt="Pitch Lake Champion" 
              width={150}
              height={150}
              className="badge-image"
            />
            <div className="badge-name">🌊 Pitch Lake Champion</div>
            <div className="badge-description">When you keep trying, even if it&apos;s hard!</div>
          </div>
        </div>
      </section>

      {/* Boss Level Preview */}
      <section className="boss-section">
        <h2 className="section-title">🎯 Become a BOSS!</h2>
        <div className="boss-preview">
          <img 
            src="/images/boss-levels/boss-celebration.png" 
            alt="You Are A Boss!" 
            width={300}
            height={400}
            className="boss-image"
          />
          <div className="boss-text">
            <h3>Complete Challenges & Win Big!</h3>
            <p>Master fractions, writing, and more to unlock your &quot;YOU ARE A BOSS!&quot; celebration!</p>
          </div>
        </div>
      </section>
      
      {/* Caribbean Cards Section */}
      <section className="caribbean-section">
        <h2 className="section-title">🇹🇹 Discover Trinidad & Tobago!</h2>
        <div className="cards-grid">
          <div className="caribbean-card">
            <img 
              src="/images/cards/coral-reef.png" 
              alt="Coral Reef Card" 
              width={250}
              height={350}
              className="card-image"
            />
          </div>
          <div className="caribbean-card">
            <img 
              src="/images/cards/mountain.png" 
              alt="Mountain Card" 
              width={250}
              height={350}
              className="card-image"
            />
          </div>
          <div className="caribbean-card">
            <img 
              src="/images/cards/lake.png" 
              alt="Pitch Lake Card" 
              width={250}
              height={350}
              className="card-image"
            />
          </div>
        </div>
      </section>
      
      {/* Try Now Section */}
      <section className="try-now-section">
        <h2 className="section-title">Ready for Your Quest, Champion?</h2>
        <p className="try-description">
          Start your magical learning journey with Mojo right now!
        </p>
        <button className="big-try-button" onClick={handleTryNowClick}>
          🚀 START MY ADVENTURE!
        </button>
        <p className="try-subtext">
          No downloads needed - start earning badges in 30 seconds!
        </p>
      </section>
      
      {/* Parent Info Section */}
      <section className="parent-info">
        <h3 className="parent-title">📋 Parents: Here&apos;s How It Works</h3>
        <div className="parent-details">
          <p>While your child has fun with Mojo and collects badges, they&apos;re actually mastering SEA exam content through our culturally-aware, trauma-informed approach.</p>
          
          <div className="price-highlight">
            💫 12 Months of Fun Learning: $600 TTD<br/>
            (That&apos;s just $50/month - less than one tutoring session!)
          </div>
          
          <div className="features-list">
            <p>✅ Ministry validated curriculum<br/>
            ✅ 200+ families already trust us<br/>
            ✅ Proven score improvements<br/>
            ✅ Safe, encouraging environment</p>
          </div>
          
          <button className="parent-cta-btn">
            💳 Pay $600 TTD with WiPay
          </button>
        </div>
      </section>
    </>
  );
}
