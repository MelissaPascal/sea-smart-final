// app/chat/demo/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  badge?: string;
}

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat with Mojo's greeting
  useEffect(() => {
    const welcomeMessage: Message = {
      role: 'assistant',
      content: '🎭🥁🌟 *Loud steelpan music and confetti everywhere!* 🌟🥁🎭\n\n🌈 **Mojo here!** Your very own Quest guide and SEA sidekick!\n\nI\'ve got a bag full of badges 🏅, jokes, and quests to help you win at school — AND have fun doing it!\n\nWhat\'s your name, Champion?',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Call your existing API endpoint
  const sendMessageToMojo = async (userMessage: string) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
          userName: userName
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error calling API:', error);
      throw error;
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Extract name from first message if not set
    if (!userName && messages.length === 1) {
      const nameMatch = inputMessage.match(/(?:name is|i'm|im|call me)\s+(\w+)/i);
      if (nameMatch) {
        setUserName(nameMatch[1]);
      } else if (inputMessage.split(' ').length === 1 && inputMessage.length > 1) {
        setUserName(inputMessage);
      }
    }

    try {
      const response = await sendMessageToMojo(inputMessage);
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: response.message,
        timestamp: new Date(),
        badge: response.badge
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: '🎭 Oops! Mojo had a little hiccup there. Can you try asking again? I\'m excited to help you learn! 🌟',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getBadgeImage = (badgeName: string) => {
    const badges: { [key: string]: string } = {
      'Confidence Climber': 'https://i.imgur.com/CEYgdFb.png',
      'Buccoo Reef Explorer': 'https://i.imgur.com/uZ5LZSl.png',
      'SEA Champion': 'https://i.imgur.com/CEYgdFb.png',
      'Pitch Lake Champion': 'https://i.imgur.com/uZ5LZSl.png'
    };
    return badges[badgeName] || 'https://i.imgur.com/CEYgdFb.png';
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
          {userName ? `Hey ${userName}! Ready to learn?` : 'Your AI learning companion'}
        </p>
      </div>

      {/* Messages Container */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        paddingBottom: '20px'
      }}>
        {messages.map((message, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
            marginBottom: '15px',
            animation: 'slideIn 0.5s ease-out'
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
                  boxShadow: '0 8px 20px rgba(255,215,0,0.4)',
                  animation: 'badgePop 0.6s ease-out'
                }}>
                  <img 
                    src={getBadgeImage(message.badge)}
                    alt={message.badge}
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
        
        {isLoading && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: '15px'
          }}>
            <div style={{
              background: 'white',
              padding: '12px 16px',
              borderRadius: '18px 18px 18px 4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              position: 'relative'
            }}>
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
              <div style={{ color: '#666' }}>
                🎭 Mojo is thinking... 💭
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div style={{
        background: 'white',
        padding: '20px',
        borderTop: '1px solid #eee',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
      }}>
        <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message to Mojo..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '2px solid #5B8DEF',
              borderRadius: '25px',
              fontSize: '1rem',
              outline: 'none',
              background: isLoading ? '#f5f5f5' : 'white'
            }}
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            style={{
              background: 'linear-gradient(45deg, #5B8DEF, #FECF3A)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: isLoading || !inputMessage.trim() ? 'not-allowed' : 'pointer',
              fontSize: '1.2rem',
              opacity: isLoading || !inputMessage.trim() ? 0.5 : 1
            }}
          >
            🚀
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes badgePop {
          0% { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          50% { transform: scale(1.2) rotate(5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>

      {/* Confetti effect for badge earning */}
      {messages.some(m => m.badge) && (
        <div>
          {Array.from({length: 20}).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'fixed',
                width: '8px',
                height: '8px',
                background: ['#FFD700', '#FF6B35', '#5B8DEF', '#FECF3A', '#4CAF50'][i % 5],
                left: `${Math.random() * 100}%`,
                animation: `confetti 3s linear infinite`,
                animationDelay: `${Math.random() * 3}s`,
                zIndex: 1000
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
