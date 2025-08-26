'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const formatMessage = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-900 font-semibold block mb-2">$1</strong>')
    .replace(/\[FILE_TAG: ([^\]]+)\]/g, '<span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mx-1">[FILE_TAG: $1]</span>')
    .replace(/^- (.*$)/gm, '<div class="ml-4 mb-1 flex items-start"><span class="mr-2">•</span><span>$1</span></div>')
    .replace(/^(\d+)\. (.*$)/gm, '<div class="ml-4 mb-2"><span class="font-semibold text-blue-600">$1.</span> $2</div>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
};

// SVG Logo Component
const SEASmartLogo = () => (
  <div className="flex items-center space-x-3">
    <div className="relative">
      <svg width="48" height="48" viewBox="0 0 48 48" className="drop-shadow-md">
        {/* Ocean wave background */}
        <circle cx="24" cy="24" r="24" fill="url(#oceanGradient)" />
        {/* Wave pattern */}
        <path d="M8 24 Q16 16 24 24 T40 24" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
        <path d="M8 28 Q16 20 24 28 T40 28" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
        {/* Book/education symbol */}
        <rect x="18" y="18" width="12" height="8" rx="1" fill="white" opacity="0.9" />
        <line x1="20" y1="21" x2="28" y2="21" stroke="#1e40af" strokeWidth="1" />
        <line x1="20" y1="23" x2="26" y2="23" stroke="#1e40af" strokeWidth="1" />
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent">
        SEA Smart™
      </h1>
      <div className="flex items-center space-x-2 mt-1">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-gray-600 font-medium">Caribbean SEA Prep Co-pilot</span>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.message, sender: 'ai' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        text: 'Sorry, I encountered an error. Please try again.', 
        sender: 'ai' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Enhanced Header with Logo */}
      <div className="bg-white shadow-lg border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <SEASmartLogo />
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Trinidad & Tobago
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Culturally Rooted
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                AI-Powered
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Supporting educators & families
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Chat Container */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          
          {/* Messages Area with improved styling */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white min-h-[500px] max-h-[600px]">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                    <path d="M12 2L13.09 8.26L19 7L14.74 12.26L21 12L13.09 15.74L15 22L12 18.74L9 22L10.91 15.74L3 12L9.26 12.26L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Welcome to SEA Smart™!</h3>
                <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                  Start a conversation to get personalized SEA prep help designed specifically for Caribbean students, teachers, and parents.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <button className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-sm font-medium transition-colors">
                    Get Study Plan
                  </button>
                  <button className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg text-sm font-medium transition-colors">
                    Need Worksheet
                  </button>
                  <button className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg text-sm font-medium transition-colors">
                    Emotional Support
                  </button>
                </div>
              </div>
            )}
            
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}>
                  {message.sender === 'ai' && (
                    <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-gray-100">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <span className="text-xs font-medium text-gray-500">SEA Smart™</span>
                    </div>
                  )}
                  {message.sender === 'ai' ? (
                    <div 
                      className="leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: formatMessage(message.text) 
                      }}
                    />
                  ) : (
                    <div className="whitespace-pre-wrap">{message.text}</div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm">
                  <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-gray-100">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="text-xs font-medium text-gray-500">SEA Smart™</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input Form */}
          <div className="border-t bg-gray-50 p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask SEA Smart™ for help with worksheets, study plans, or emotional support..."
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                  disabled={isLoading}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xs">💬</span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="text-center py-8 px-4">
        <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
          <span>Made with</span>
          <span className="text-red-500">❤️</span>
          <span>for Caribbean education</span>
        </div>
        <p className="mt-2 text-xs text-gray-400">SEA Smart™ - Empowering students, supporting families</p>
      </div>
    </div>
  );
}
