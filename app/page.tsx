/* app/homepage.css */

* {
  box-sizing: border-box;
}

/* Confetti Animation */
.confetti {
  position: fixed;
  width: 10px;
  height: 10px;
  animation: confetti-fall 3s infinite;
  z-index: 1;
}

@keyframes confetti-fall {
  0% { transform: translateY(-100vh) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(360deg); }
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #ff6b35, #f7931e, #ffd700);
  padding: 20px;
  position: relative;
  z-index: 2;
}

.steelpan-emoji {
  font-size: 3rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}

.main-title {
  font-size: 4rem;
  font-weight: 900;
  color: #2c3e50;
  text-shadow: 3px 3px 0px #fff, 6px 6px 0px #34495e;
  margin: 20px 0;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.mojo-container {
  margin: 30px 0;
}

.mojo-character {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  animation: wiggle 3s infinite;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

.mojo-intro {
  font-size: 1.5rem;
  color: #2c3e50;
  max-width: 600px;
  margin: 20px auto;
  line-height: 1.6;
  background: rgba(255,255,255,0.9);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.quest-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0;
}

.quest-btn {
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255,107,53,0.3);
}

.quest-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(255,107,53,0.5);
}

.math-btn { background: linear-gradient(45deg, #e74c3c, #c0392b); }
.reading-btn { background: linear-gradient(45deg, #3498db, #2980b9); }
.science-btn { background: linear-gradient(45deg, #2ecc71, #27ae60); }

/* Badges Section */
.badges-section {
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 80px 20px;
  text-align: center;
}

.section-title {
  font-size: 3rem;
  color: white;
  margin-bottom: 50px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.badge-card {
  background: white;
  border-radius: 20px;
  padding: 30px 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.badge-card:hover {
  transform: translateY(-10px);
}

.badge-image {
  border-radius: 15px;
  margin-bottom: 15px;
}

.badge-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
}

.badge-description {
  color: #7f8c8d;
  line-height: 1.4;
  font-size: 1rem;
}

/* Boss Section */
.boss-section {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  padding: 80px 20px;
  text-align: center;
}

.boss-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.boss-image {
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

.boss-text {
  color: white;
  text-align: left;
  max-width: 400px;
}

.boss-text h3 {
  font-size: 2rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.boss-text p {
  font-size: 1.2rem;
  line-height: 1.5;
}

/* Caribbean Cards Section */
.caribbean-section {
  background: linear-gradient(135deg, #11998e, #38ef7d);
  padding: 80px 20px;
  text-align: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 40px auto;
}

.caribbean-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}

.caribbean-card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Try Now Section */
.try-now-section {
  background: linear-gradient(135deg, #ff9a9e, #fecfef);
  padding: 80px 20px;
  text-align: center;
}

.try-description {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.big-try-button {
  background: linear-gradient(45deg, #28a745, #20c997);
  color: white;
  border: none;
  padding: 25px 50px;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  margin: 30px 0;
  box-shadow: 0 15px 40px rgba(40,167,69,0.4);
  transition: all 0.3s ease;
}

.big-try-button:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(40,167,69,0.6);
}

.try-subtext {
  font-size: 1rem;
  color: #7f8c8d;
}

/* Parent Info Section */
.parent-info {
  background: #34495e;
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.parent-title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #ecf0f1;
}

.parent-details {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

.price-highlight {
  background: linear-gradient(45deg, #f39c12, #e67e22);
  color: white;
  padding: 20px;
  border-radius: 15px;
  margin: 30px 0;
  font-size: 1.3rem;
  font-weight: bold;
}

.features-list {
  margin: 20px 0;
}

.parent-cta-btn {
  background: linear-gradient(45deg, #5B8DEF, #4A7FDB);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.parent-cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(91,141,239,0.4);
}

/* Quest Map Section */
.quest-map-section {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  padding: 80px 20px;
  text-align: center;
}

.quest-map-container {
  max-width: 800px;
  margin: 0 auto;
}

.quest-map-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

/* Celebration Section */
.celebration-section {
  background: linear-gradient(135deg, #fa709a, #fee140);
  padding: 80px 20px;
  text-align: center;
}

.celebration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 900px;
  margin: 40px auto;
}

.celebration-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.celebration-card:hover {
  transform: scale(1.05);
}

.celebration-image {
  margin-bottom: 20px;
  border-radius: 15px;
}

.celebration-text {
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 600;
  line-height: 1.5;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .main-title { 
    font-size: 2.5rem; 
  }
  
  .quest-buttons { 
    flex-direction: column; 
    align-items: center; 
  }
  
  .section-title { 
    font-size: 2rem; 
  }
  
  .badges-grid { 
    grid-template-columns: 1fr; 
  }
  
  .celebration-grid {
    grid-template-columns: 1fr;
  }
  
  .quest-map-image {
    width: 100%;
  }
}
