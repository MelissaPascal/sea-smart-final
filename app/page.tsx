// app/chat/demo/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  badge?: string;
}

const demoConversation: Message[] = [
  {
    role: 'assistant',
    content: '🎭🥁🌟 *Loud steelpan music and confetti everywhere!* 🌟🥁🎭\n\n🌈 **Mojo here!** Your very own Quest guide and SEA sidekick!\n\nI\'ve got a bag full of badges 🏅, jokes, and quests to help you win at school — AND have fun doing it!\n\nWhat\'s your name, Champion?',
    timestamp: new Date(),
  },
  {
    role: 'user',
    content: 'Hi Mojo! My name is Sarah',
    timestamp: new Date(),
  },
  {
    role: 'assistant',
    content: '🎉 Sarah the Champion! Perfect name for a SEA superstar!\n\nNow Sarah, when you hear the word *fractions*, do you feel:\n😃 Excited\n😐 Not sure  \n😟 A little worried',
    timestamp: new Date(),
  },
  {
    role: 'user',
    content: 'I feel a little worried 😟',
    timestamp: new Date(),
  },
  {
    role: 'assistant',
    content: 'I\'m really glad you told me that, Sarah 🌈. We\'ll go slow and make sure you feel safe and supported the whole way.\n\nLet\'s start super easy! If I have a pizza with 4 slices and I eat 1 slice, what fraction did I eat?\n\nTake your time - there\'s no rush! 🍕',
    timestamp: new Date(),
  }
];

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < demoConversation.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, demoConversation[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
        
        if (currentIndex === demoConversation.length - 1) {
          setTimeout(() => setShowUpgrade(true), 2000);
        }
      }, currentIndex === 0 ? 500 : 2000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleContinueDemo = () => {
    setShowUpgrade(false);
    const newMessage: Message = {
      role: 'user',
      content: '1/4',
      timestamp: new Date()
    };
    
    const mojoResponse: Message = {
      role: 'assistant',
      content: '🎉 EXACTLY RIGHT, Sarah! You just earned your first badge!\n\n🌱 **Confidence Climber Badge Unlocked!** 🌱\n\nYou showed courage by trying, even when fractions felt scary. That\'s what real champions do!',
      timestamp: new Date(),
      badge: '🌱 Confidence Climber'
    };

    setMessages(prev => [...prev, newMessage, mojoResponse]);
    setTimeout(() => setShowUpgrade(true), 3000);
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Comic Sans MS, cursive'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(45deg, #5B8DEF, #FECF3A)',
        color: 'white',
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>🎭 Chat with Mojo! 🎭</h2>
        <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
          DEMO MODE - See how Mojo helps kids learn
        </p>
      </div>

      {/* Messages Container */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        paddingBottom: '100px'
      }}>
        {messages.map((message, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
            marginBottom: '15px'
          }}>
            <div style={{
              maxWidth: '80%',
              padding: '12px 16px',
              borderRadius: message.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              background: message.role === 'user' 
                ? 'linear-gradient(45deg, #4CAF50, #45a049)' 
                : 'white',
              color: message.role === 'user' ? 'white' : '#333',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              position: 'relative'
            }}>
              {message.role === 'assistant' && (
                <img 
                  src="https://i.imgur.com/Xdt38x1.png"
                  alt="Mojo"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '-10px',
                    left: '-15px',
                    border: '3px solid #FECF3A'
                  }}
                />
              )}
              
              <div style={{
                whiteSpace: 'pre-wrap',
                lineHeight: '1.4',
                fontSize: message.role === 'assistant' ? '1rem' : '0.95rem'
              }}>
                {message.content}
              </div>

              {message.badge && (
                <div style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                  color: '#8B4513',
                  padding: '15px',
                  borderRadius: '15px',
                  marginTop: '15px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  boxShadow: '0 8px 20px rgba(255,215,0,0.4)'
                }}>
                  <img 
                    src="https://i.imgur.com/CEYgdFb.png"
                    alt="Confidence Climber Badge"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '10px',
                      marginBottom: '8px',
                      display: 'block',
                      margin: '0 auto 8px auto'
                    }}
                  />
                  <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                    🏅 {message.badge} 🏅
                  </div>
                  <div style={{ fontSize: '0.9rem', marginTop: '5px', opacity: 0.8 }}>
                    Badge Unlocked!
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Demo Controls */}
      {showUpgrade && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.3)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Want to continue chatting with Mojo?</h3>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={handleContinueDemo}
              style={{
                background: 'white',
                color: '#FF6B35',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '25px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Continue Demo
            </button>
            <button
              onClick={() => window.location.href = '/chat'}
              style={{
                background: 'linear-gradient(45deg, #28a745, #20c997)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '25px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Get Full Access - $600/year
            </button>
            <button
              onClick={() => window.location.href = '/'}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid white',
                padding: '12px 20px',
                borderRadius: '25px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Back to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
