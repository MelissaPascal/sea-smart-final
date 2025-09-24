// app/page.tsx
'use client';

import React from 'react';
import './homepage.css';

export default function HomePage() {
  const handleDownloadFree = () => {
    // Link to your Week 1 pack download
    window.open('/downloads/SEA_Smart_Week_1_FREE.zip', '_blank');
  };

  const handleWhatsAppContact = (tier: string) => {
    window.open(`https://wa.me/18683101226?text=${message}`, '_blank');
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
        
        <h1 className="main-title">Try Week 1 FREE!</h1>
        
        <div className="mojo-container">
          <img 
            src="https://i.imgur.com/Xdt38x1.png" 
            alt="Mojo the Steelpan Parrot" 
            width={200}
            height={200}
            className="mojo-character"
          />
        </div>
        
        <div className="mojo-intro">
          <strong>Meet Mojo!</strong> Your child's fun SEA prep companion<br/>
          Get 5 Math Quest sheets + answer key - <strong>No payment needed!</strong>
        </div>
        
        <button className="big-download-button" onClick={handleDownloadFree}>
          📥 Download FREE Week 1 Pack
        </button>
        
        <p className="hero-subtext">
          Instant PDF download • Works on any device • No signup required
        </p>
      </section>

      {/* Sample Worksheets Preview */}
      <section className="sample-preview-section">
        <h2 className="section-title">What's Inside Week 1?</h2>
        <div className="sample-grid">
          <div className="sample-card">
            <div className="sample-badge">Sheet 1</div>
            <h3>🍕 Fractions Explorer</h3>
            <p>Pizza slice challenges with Mojo</p>
          </div>
          <div className="sample-card">
            <div className="sample-badge">Sheet 2</div>
            <h3>🥷 Number Ninja</h3>
            <p>Market math adventures</p>
          </div>
          <div className="sample-card">
            <div className="sample-badge">Sheet 3</div>
            <h3>📏 Measurement Maestro</h3>
            <p>Build a treehouse with area & perimeter</p>
          </div>
          <div className="sample-card">
            <div className="sample-badge">Sheet 4</div>
            <h3>🔺 Geometry Genius</h3>
            <p>Shape safari challenge</p>
          </div>
          <div className="sample-card">
            <div className="sample-badge">Sheet 5</div>
            <h3>🥞 Fraction Quest Part 2</h3>
            <p>Pancake party math</p>
          </div>
          <div className="sample-card">
            <div className="sample-badge">Bonus</div>
            <h3>🔐 Answer Key</h3>
            <p>For parents only - with teaching tips!</p>
          </div>
        </div>
      </section>
      
      {/* Badges Section */}
      <section className="badges-section">
        <h2 className="section-title">Kids Love Earning Badges!</h2>
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
            <div className="badge-description">When you keep trying, even if it's hard!</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="pricing-grid">
          
          <div className="pricing-card free-card">
            <div className="price-badge">FREE</div>
            <h3>Week 1 Starter</h3>
            <div className="price">$0 TTD</div>
            <ul className="features-list">
              <li>✅ 5 Math Quest worksheets</li>
              <li>✅ Complete answer key</li>
              <li>✅ Meet Mojo & earn badges</li>
              <li>✅ Instant PDF download</li>
            </ul>
            <button className="pricing-button free-button" onClick={handleDownloadFree}>
              Download Now
            </button>
          </div>

          <div className="pricing-card bundle-card">
            <div className="price-badge">POPULAR</div>
            <h3>12-Week Bundle</h3>
            <div className="price">$75 <span className="price-period">TTD</span></div>
            <ul className="features-list">
              <li>✅ 60 themed worksheets</li>
              <li>✅ Math, Reading & Science</li>
              <li>✅ All answer keys included</li>
              <li>✅ WhatsApp delivery weekly</li>
              <li>✅ Mojo badge collection</li>
            </ul>
            <button className="pricing-button bundle-button" onClick={() => handleWhatsAppContact('12-Week Bundle - $75')}>
              Buy Now - WhatsApp
            </button>
          </div>

          <div className="pricing-card premium-card">
            <div className="price-badge premium-badge">PREMIUM</div>
            <h3>Annual Access</h3>
            <div className="price">$600 <span className="price-period">TTD/year</span></div>
            <ul className="features-list">
              <li>✅ 52 weeks of worksheet packs</li>
              <li>✅ <strong>Live Mojo GPT Tutor</strong></li>
              <li>✅ Chat with Mojo anytime 24/7</li>
              <li>✅ Progress tracking dashboard</li>
              <li>✅ All subjects covered</li>
              <li>✅ Priority support</li>
            </ul>
            <button className="pricing-button premium-button" onClick={() => handleWhatsAppContact('Premium Annual Access - $600')}>
              Upgrade to Premium
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Download Free Pack</h3>
            <p>Get Week 1 instantly - no payment, no signup. Just value.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Try With Your Child</h3>
            <p>10 minutes a day. Watch them have fun with Mojo while learning!</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>See Results</h3>
            <p>Kids love the badges. Parents see improvement. Everyone wins.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Upgrade When Ready</h3>
            <p>Get 12 weeks or unlock live Mojo GPT tutor for real-time help!</p>
          </div>
        </div>
      </section>

      {/* Quest Map */}
      <section className="quest-map-section">
        <h2 className="section-title">Your Learning Journey</h2>
        <div className="quest-map-container">
          <img 
            src="https://i.imgur.com/PZACMz6.png" 
            alt="SEA Smart Quest Map" 
            width={600}
            height={400}
            className="quest-map-image"
          />
        </div>
      </section>

      {/* Parent Testimonial / Social Proof */}
      <section className="social-proof-section">
        <h2 className="section-title">Why Parents Choose SEA Smart</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🇹🇹</div>
            <h3>Culturally Relevant</h3>
            <p>Trini examples kids relate to - mangoes, doubles, Carnival!</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📚</div>
            <h3>Ministry Aligned</h3>
            <p>Based on 10 years of SEA curriculum data</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Makes Learning Fun</h3>
            <p>Not boring past papers - kids actually want to do these!</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💪</div>
            <h3>Builds Confidence</h3>
            <p>Emotional support + academic skills = SEA success</p>
          </div>
        </div>
      </section>
      
      {/* WhatsApp CTA */}
      <section className="whatsapp-cta-section">
        <h2 className="section-title">Questions? We're Here to Help!</h2>
        <p className="whatsapp-text">Message us on WhatsApp - we respond within 1 hour</p>
       <button className="whatsapp-button" onClick={() => window.open('https://wa.me/18683101226', '_blank')}>
          💬 Chat on WhatsApp
        </button>
        <p className="payment-info">
          Payment via WiPay: <a href="https://tt.wipayfinancial.com/to_me/pascals_bakery_limited" target="_blank" rel="noopener">tt.wipayfinancial.com/to_me/pascals_bakery_limited</a>
        </p>
      </section>

      {/* Footer */}
      <section className="footer-section">
        <p>SEA Smart™ © 2025 | Helping Trini Kids Win at SEA</p>
        <p>Join our parent community WhatsApp group for tips & support</p>
      </section>
    </>
  );
}
