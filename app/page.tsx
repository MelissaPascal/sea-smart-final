// Force redeploy
"use client";

// sea-smart-app.jsx

import React, { useState, useRef, useEffect } from 'react';
import {
  Send, BookOpen, Heart, BarChart3, Download,
  User, Users, GraduationCap, TrendingUp,
  Star, Clock, Target
} from 'lucide-react';

const SEASmartApp = () => {
  const [userRole, setUserRole] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState('chat');

  const [userData, setUserData] = useState({
    userId: `user_${Date.now()}`,
    sessionId: `session_${Date.now()}`,
    startTime: new Date(),
    childName: '',
    childGrade: '',
    location: '',
    previousSEAScore: '',
    currentSEAScore: '',
    emotionalState: { initial: '', current: '', improvements: [] },
    culturalEngagement: { localReferences: 0, culturalContentUsed: [], languagePreference: 'english' }
  });

  const [usageData, setUsageData] = useState({
    sessions: 1,
    messagesExchanged: 0,
    resourcesGenerated: 0,
    wellnessCheckins: 0,
    timeSpent: 0,
    subjectsStudied: new Set(),
    difficultyAreasIdentified: new Set(),
    improvementAreas: new Set(),
    parentEngagementScore: 0,
    studentConfidenceLevel: 5,
    culturalContentViews: 0
  });

  const [impactMetrics, setImpactMetrics] = useState({
    learningGoalsSet: 0,
    goalsAchieved: 0,
    weaknessesToStrengths: [],
    parentConfidenceIncrease: 0,
    studyTimeOptimization: 0,
    stressReduction: 0,
    engagementScore: 0
  });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const startTime = useRef(Date.now());

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsageData(prev => ({
        ...prev,
        timeSpent: Math.floor((Date.now() - startTime.current) / 1000)
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRoleSelection = (role) => {
    setUserRole(role);
    const roleMessages = {
      Parent: `Welcome to SEA Smart™! I'm here to help with your child's SEA preparation.`,
      Teacher: `Welcome to SEA Smart™! I'm your educational assistant for SEA exam prep.`,
      Tutor: `Welcome to SEA Smart™! I'm here to support your tutoring sessions.`
    };
    setMessages([{ id: Date.now(), type: 'assistant', content: roleMessages[role], timestamp: new Date().toLocaleTimeString() }]);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    const userMsg = { id: Date.now(), type: 'user', content: inputMessage, timestamp: new Date().toLocaleTimeString() };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);
    setUsageData(prev => ({
      ...prev,
      messagesExchanged: prev.messagesExchanged + 1,
      parentEngagementScore: prev.parentEngagementScore + 1
    }));
    try {
      const response = `This is a placeholder response to: ${inputMessage}`;
      const assistantMsg = { id: Date.now() + 1, type: 'assistant', content: response, timestamp: new Date().toLocaleTimeString() };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'assistant', content: 'Error generating response.', timestamp: new Date().toLocaleTimeString() }]);
    }
    setIsLoading(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const MetricCard = ({ title, value, color, icon, subtitle }) => (
    <div className={`bg-gradient-to-r from-${color}-50 to-${color}-100 p-4 rounded-xl border border-${color}-200`}>
      <p className={`text-${color}-800 font-semibold`}>{title}</p>
      <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
      {React.cloneElement(icon, { className: `text-${color}-500`, size: 24 })}
      <p className={`text-xs text-${color}-600 mt-1`}>{subtitle}</p>
    </div>
  );

  const AcademicSection = ({ usageData }) => (
    <div className="bg-gray-50 p-4 rounded-xl mb-6">
      <h3 className="font-semibold text-gray-800 mb-4">Value Delivered</h3>
      <StatRow label="Est. Traditional Cost" value="TT$350/month" valueClass="text-red-600" />
      <StatRow label="SEA Smart Cost" value="TT$50/month" valueClass="text-green-600" />
      <StatRow label="Monthly Savings" value="TT$300" valueClass="text-blue-600" />
      <StatRow label="Accessibility Gain" value="24/7 Available" valueClass="text-purple-600" />
    </div>
  );

  const CulturalImpactSection = ({ userData, usageData }) => (
    <div className="bg-white p-4 rounded-xl mb-6">
      <h3 className="font-semibold text-gray-800 mb-2">🇹🇹 Cultural Authenticity Score</h3>
      <CenterStat value={((userData.culturalEngagement.localReferences / Math.max(1, usageData.messagesExchanged)) * 10).toFixed(1)} label="Cultural Relevance Score" />
    </div>
  );

  const InvestorImpactSummary = ({ usageData, userData }) => (
    <div className="bg-green-50 p-4 rounded-xl">
      <h3 className="font-semibold text-green-800 mb-2">📈 Investor Impact Summary</h3>
      <p className="text-sm">
        <strong>Problem-Solution Fit:</strong> ✅ Validated<br />
        <strong>User Retention:</strong> {usageData.sessions > 5 ? '🟢 Excellent' : usageData.sessions > 2 ? '🟡 Good' : '🔴 Early Stage'}<br />
        <strong>Market Accessibility:</strong> 🟢 High (70% cost reduction)<br />
        <strong>Cultural Fit:</strong> {userData.culturalEngagement.localReferences > 0 ? '🟢 Strong' : '🟡 Developing'}<br />
        <strong>Scalability:</strong> 🟢 Excellent (digital platform)<br />
        <strong>Value Creation:</strong> TT$300+ savings per family<br />
        <strong>Engagement Depth:</strong> {(usageData.messagesExchanged / Math.max(1, usageData.sessions)).toFixed(1)} interactions/session<br />
        <strong>Support Utilization:</strong> {((usageData.wellnessCheckins / Math.max(1, usageData.sessions)) * 100).toFixed(0)}% use wellness features
      </p>
    </div>
  );

  const StatRow = ({ label, value, valueClass }) => (
    <p className="text-sm">
      {label}: <span className={`font-bold ${valueClass}`}>{value}</span>
    </p>
  );

  const CenterStat = ({ value, label }) => (
    <div className="text-center">
      <p className="text-3xl font-bold text-purple-700">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );

  if (!userRole) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">SEA Smart™ Caribbean Education Assistant</h1>
        <p className="mt-4">Who are you?</p>
        <div className="space-y-4 mt-6">
          <button onClick={() => handleRoleSelection('Parent')} className="btn-blue flex items-center gap-2"><User /> Parent</button>
          <button onClick={() => handleRoleSelection('Teacher')} className="btn-green flex items-center gap-2"><Users /> Teacher</button>
          <button onClick={() => handleRoleSelection('Tutor')} className="btn-purple flex items-center gap-2"><GraduationCap /> Tutor</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex space-x-2 mb-4">
        <button onClick={() => setCurrentView('chat')} className={currentView === 'chat' ? 'btn-active' : 'btn'}><BookOpen /></button>
        <button onClick={() => setCurrentView('wellness')} className={currentView === 'wellness' ? 'btn-active' : 'btn'}><Heart /></button>
        <button onClick={() => setCurrentView('analytics')} className={currentView === 'analytics' ? 'btn-active' : 'btn'}><BarChart3 /></button>
      </div>

      {currentView === 'chat' && (
        <div className="chat-window">
          <div className="messages space-y-2">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.type} p-2 rounded ${msg.type === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>{msg.content}
                <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
              </div>
            ))}
            {isLoading && <div className="message assistant">Thinking...</div>}
            <div ref={chatEndRef} />
          </div>
          <div className="input-bar mt-4 flex gap-2">
            <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} placeholder="Ask for help..." className="flex-1 p-2 border border-gray-300 rounded" />
            <button onClick={sendMessage} disabled={isLoading} className="p-2 bg-blue-600 text-white rounded"><Send /></button>
          </div>
        </div>
      )}

      {currentView === 'wellness' && (
        <div className="bg-blue-50 p-6 rounded-xl text-center text-blue-800">💙 Wellness Center Coming Soon</div>
      )}

      {currentView === 'analytics' && (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Impact Dashboard 📊</h2>
          <button className="flex items-center gap-2 mb-6 text-sm bg-green-200 text-green-800 px-4 py-2 rounded"><Download /> Export Impact Report</button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard title="Engagement Score" value={`${usageData.parentEngagementScore}/10`} color="blue" icon={<TrendingUp />} subtitle="Parent interaction level" />
            <MetricCard title="Confidence Level" value={`${usageData.studentConfidenceLevel}/10`} color="green" icon={<Star />} subtitle="Student emotional state" />
            <MetricCard title="Cultural Relevance" value={userData.culturalEngagement.localReferences} color="purple" icon={<Target />} subtitle="Local references used" />
            <MetricCard title="Time Invested" value={formatTime(usageData.timeSpent)} color="orange" icon={<Clock />} subtitle="Active learning time" />
          </div>
          <AcademicSection usageData={usageData} />
          <CulturalImpactSection userData={userData} usageData={usageData} />
          <InvestorImpactSummary usageData={usageData} userData={userData} />
        </>
      )}
    </div>
  );
};

export default SEASmartApp;
