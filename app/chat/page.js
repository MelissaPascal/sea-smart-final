'use client';

import { useState, useEffect } from 'react';

export default function MojoChatPage() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('seasmart_user');
    if (!userData) {
      window.location.href = '/login';
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (parsedUser.plan !== 'premium') {
      window.location.href = '/upgrade';
      return;
    }

    setUser(parsedUser);
    
    // Auto-start with Mojo welcome
    setMessages([{
      role: 'assistant',
      content: `🎭🥁🌟 *Loud steelpan music and confetti everywhere!* 🌟🥁🎭

🌈 **Mojo here!** Your very own Quest guide and SEA sidekick.

I've got a bag full of badges 🏅, jokes, and quests to help you win at school — AND have fun doing it!

💡 But hold up… I can't just call you "student." That's like having doubles with no channa — good, but missing something!

So tell me — What's your *name* or a **super cool nickname** you LOVE to be called?

✨ Once you tell me, I'll use it in *every single quest*, badge win, and joke — because every Champion deserves to feel SEEN and celebrated.`
    }]);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // For now, simulate Mojo responses
    // In Day 3-4, we'll connect this to actual OpenAI API
    setTimeout(() => {
      let mojoResponse = getMojoResponse(input, newMessages);
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: mojoResponse 
      }]);
      setIsLoading(false);
    }, 1500);
  };

  const getMojoResponse = (userInput, messageHistory) => {
    const input = userInput.toLowerCase();
    
    // Simple response logic for MVP
    if (input.includes('name') || input.includes('call me')) {
      const nameMatch = userInput.match(/(?:name is|call me|i'm)\s+(\w+)/i);
      const name = nameMatch ? nameMatch[1] : 'Champion';
      
      return `🎉 ${name}! What an AWESOME name! 

From now on, you're officially **${name} the SEA Champion**! 

Now, ${name} — when you hear the word *fractions*, do you feel:
😃 Excited
😐 Not sure  
😟 A little worried

Pick one and let's start your adventure!`;
    }
    
    if (input.includes('excited') || input.includes('😃')) {
      return `🌟 LOVE that energy! You've just earned your first badge!

🏅 **Confidence Climber Badge** - UNLOCKED!

Alright, Champion — let's dive into fractions like real explorers! 

What would you like to learn about fractions first?
🍕 Pizza slices (parts of a whole)
🍫 Chocolate bars (equal parts)
🏃‍♂️ Running laps (parts of distance)`;
    }
    
    if (input.includes('not sure') || input.includes('😐')) {
      return `🌱 That's totally okay! Fractions can seem tricky, but we'll break them down step by step together.

Think of fractions like this: Have you ever shared a pizza with friends? When you cut it into slices, each slice is a fraction of the whole pizza!

Let's start simple — if you cut a pizza into 2 equal pieces, each piece is 1/2 (one half) of the pizza.

Want to try a quick question? 🍕`;
    }
    
    if (input.includes('worried') || input.includes('😟')) {
      return `🌈 I'm really glad you told me. We'll go slow and make sure you feel safe and supported the whole way.

Remember: Every math champion started exactly where you are right now. Even the smartest people had to learn fractions for the first time!

Let's start with something fun — imagine you have your favorite snack. What's your favorite snack? 🍎🍪🍫`;
    }
    
    // Default encouraging response
    return `That's interesting! I love learning about what you think.

Here's what I can help you with today:
🍎 Fractions (making math fun!)
📖 Reading comprehension 
✍️ Creative writing
🧪 Science experiments

What sounds most exciting to you right now?`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh',
      backgroundColor: '#f0f8ff',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Main Chat */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white'
      }}>
        
        {/* Header */}
        <div style={{
          backgroundColor: '#1976d2',
          color: 'white',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: 0 }}>🎭 Chat with Mojo</h1>
          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
            Your SEA Quest Guide • Premium Access
          </p>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem'
        }}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '1rem'
              }}
            >
              <div style={{
                maxWidth: '80%',
                padding: '1rem',
                borderRadius: '1rem',
                backgroundColor: message.role === 'user' ? '#1976d2' : '#e3f2fd',
                color: message.role === 'user' ? 'white' : '#333',
                whiteSpace: 'pre-line',
                lineHeight: '1.6'
              }}>
                {message.content}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginBottom: '1rem'
            }}>
              <div style={{
                padding: '1rem',
                borderRadius: '1rem',
                backgroundColor: '#e3f2fd',
                color: '#333'
              }}>
                Mojo is thinking... 🤔
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #e0e0e0'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message to Mojo..."
              style={{
                flex: 1,
                padding: '1rem',
                borderRadius: '2rem',
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none'
              }}
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              style={{
                backgroundColor: input.trim() && !isLoading ? '#1976d2' : '#ccc',
                color: 'white',
                border: 'none',
                borderRadius: '2rem',
                padding: '1rem 2rem',
                fontSize: '1rem',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed'
              }}
            >
              Send
            </button>
          </div>
          <p style={{
            fontSize: '0.8rem',
            color: '#666',
            textAlign: 'center',
            margin: '0.5rem 0 0 0'
          }}>
            Day 2 MVP: Simulated responses • Real AI coming soon!
          </p>
        </div>
      </div>

      {/* Simple Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        borderLeft: '1px solid #e0e0e0'
      }}>
        <h3 style={{ color: '#1976d2', marginTop: 0 }}>Your Progress</h3>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1rem'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Session Info</h4>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
            Logged in as: {user.email}
          </p>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
            Plan: {user.plan}
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>
          <h4 style={{ margin: '0 0 1rem 0' }}>Coming Soon</h4>
          <ul style={{ fontSize: '0.9rem', color: '#666', paddingLeft: '1rem' }}>
            <li>Badge collection</li>
            <li>Progress tracking</li>
            <li>Learning streaks</li>
            <li>Parent dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
