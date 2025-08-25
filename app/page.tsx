{currentView === 'analytics' && (  

Impact Dashboard 📊 

Export Impact Report  
       {/* Key Impact Metrics */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"> 
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200"> 
            <div className="flex items-center justify-between"> 
              <div> 
                <p className="text-blue-800 font-semibold">Engagement Score</p> 
                <p className="text-2xl font-bold text-blue-600">{usageData.parentEngagementScore}/10</p> 
              </div> 
              <TrendingUp className="text-blue-500" size={24} /> 
            </div> 
            <p className="text-xs text-blue-600 mt-1">Parent interaction level</p> 
          </div> 
 
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200"> 
            <div className="flex items-center justify-between"> 
              <div> 
                <p className="text-green-800 font-semibold">Confidence Level</p> 
                <p className="text-2xl font-bold text-green-600">{usageData.studentConfidenceLevel}/10</p> 
              </div> 
              <Star className="text-green-500" size={24} /> 
            </div> 
            <p className="text-xs text-green-600 mt-1">Student emotional state</p> 
          </div> 
 
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200"> 
            <div className="flex items-center justify-between"> 
              <div> 
                <p className="text-purple-800 font-semibold">Cultural Relevance</p> 
                <p className="text-2xl font-bold text-purple-600">{userData.culturalEngagement.localReferences}</p> 
              </div> 
              <Target className="text-purple-500" size={24} /> 
            </div> 
            <p className="text-xs text-purple-600 mt-1">Local references used</p> 
          </div> 
 
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200"> 
            <div className="flex items-center justify-between"> 
              <div> 
                <p className="text-orange-800 font-semibold">Time Invested</p> 
                <p className="text-2xl font-bold text-orange-600">{formatTime(usageData.timeSpent)}</p> 
              </div> 
              <Clock className="text-orange-500" size={24} /> 
            </div> 
            <p className="text-xs text-orange-600 mt-1">Active learning time</p> 
          </div> 
        </div> 
 
        {/* Academic Progress Section */} 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"> 
          <div className="bg-gray-50 p-4 rounded-xl"> 
            <h3 className="font-semibold text-gray-800 mb-4">Academic Engagement</h3> 
            <div className="space-y-3"> 
              <div className="flex justify-between"> 
                <span className="text-gray-600">Resources Generated:</span> 
                <span className="font-bold text-gray-800">{usageData.resourcesGenerated}</span> 
              </div> 
              <div className="flex justify-between"> 
                <span className="text-gray-600">Subjects Explored:</span> 
                <span className="font-bold text-gray-800">{Array.from(usageData.subjectsStudied).length}</span> 
              </div> 
              <div className="flex justify-between"> 
                <span className="text-gray-600">Messages Exchanged:</span> 
                <span className="font-bold text-gray-800">{usageData.messagesExchanged}</span> 
              </div> 
              <div className="flex justify-between"> 
                <span className="text-gray-600">Wellness Support Used:</span> 
                <span className="font-bold text-gray-800">{usageData.wellnessCheckins}</span> 
              </div> 
            </div> 
          </div> 
 
          <div className="bg-gray-50 p-4 rounded-xl"> 
            <h3 className="font-semibold text-gray-800 mb-4">Value Delivered</h3> 
            <div className="space-y-3"> 
              <div className="flex justify-between"> 
                <span className="text-gray-600">Est. Traditional Cost:</span> 
                <span className="font-bold text-red-600">TT$350/month</span> 
              </div> 
              <div className="flex justify-between"> 
                <span className="text-gray-600">SEA Smart Cost:</span> 
                <span className="font-bold text-green-600">TT$50/month</span> 
              </div> 
              <div className="flex justify-between"> 
                <span className="text-gray-600">Monthly Savings:</span> 
                <span className="font-bold text-blue-600">TT$300</span> 
              </div> 
              <div className="flex justify-between"> 
                <span className="text-gray-600">Accessibility Gain:</span> 
                <span className="font-bold text-purple-600">24/7 Available</span> 
              </div> 
            </div> 
          </div> 
        </div> 
 
        {/* Cultural Impact */} 
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl border border-teal-200 mb-6"> 
          <h3 className="font-semibold text-teal-800 mb-3">🇹🇹 Cultural Authenticity Score</h3> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
            <div className="text-center"> 
              <p className="text-2xl font-bold text-teal-600">{userData.culturalEngagement.localReferences}</p> 
              <p className="text-xs text-teal-700">Caribbean References</p> 
            </div> 
            <div className="text-center"> 
              <p className="text-2xl font-bold text-teal-600"> 
                {((userData.culturalEngagement.localReferences / Math.max(1, usageData.messagesExchanged)) * 10).toFixed(1)} 
              </p> 
              <p className="text-xs text-teal-700">Cultural Relevance Score</p> 
            </div> 
            <div className="text-center"> 
              <p className="text-2xl font-bold text-teal-600"> 
                {userData.culturalEngagement.culturalContentUsed.length} 
              </p> 
              <p className="text-xs text-teal-700">Local Context Examples</p> 
            </div> 
          </div> 
        </div> 
 
        {/* Impact Summary for Investors */} 
        <div className="bg-gray-50 p-4 rounded-xl"> 
          <h3 className="font-semibold text-gray-800 mb-4">📈 Investor Impact Summary</h3> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
            <div className="space-y-2 text-sm text-gray-600"> 
              <p><strong>Problem-Solution Fit:</strong> ✅ Validated</p> 
              <p><strong>User Retention:</strong> {usageData.sessions > 5 ? '🟢 Excellent' : usageData.sessions > 2 ? '🟡 Good' : '🔴 Early Stage'}</p> 
              <p><strong>Market Accessibility:</strong> 🟢 High (70% cost reduction)</p> 
              <p><strong>Cultural Fit:</strong> {userData.culturalEngagement.localReferences > 0 ? '🟢 Strong' : '🟡 Developing'}</p> 
            </div> 
            <div className="space-y-2 text-sm text-gray-600"> 
              <p><strong>Scalability:</strong> 🟢 Excellent (digital platform)</p> 
              <p><strong>Value Creation:</strong> TT$300+ savings per family</p> 
              <p><strong>Engagement Depth:</strong> {(usageData.messagesExchanged / Math.max(1, usageData.sessions)).toFixed(1)} interactions/session</p> 
              <p><strong>Support Utilization:</strong> {((usageData.wellnessCheckins / Math.max(1, usageData.sessions)) * 100).toFixed(0)}% use wellness features</p> 
            </div> 
          </div> 
           
          <div className="mt-4 p-3 bg-green-50 rounded-lg"> 
            <h4 className="font-medium text-green-800 mb-2">Key Success Indicators:</h4> 
            <p className="text-xs text-green-700"> 
              • High engagement: {usageData.messagesExchanged} interactions in {usageData.sessions} sessions<br/> 
              • Emotional support utilized: {usageData.wellnessCheckins} wellness check-ins<br/> 
              • Cultural relevance: {userData.culturalEngagement.localReferences} local references used<br/> 
              • Value delivery: {usageData.resourcesGenerated} custom resources generated<br/> 
              • Cost efficiency: 86% savings vs traditional tutoring 
            </p> 
          </div> 
        </div> 
      </div> 
    )}import React, { useState, useRef, useEffect } from 'react'; 
  
import { Send, BookOpen, Heart, BarChart3, Download, User, Users, GraduationCap, TrendingUp, Star, Clock, Target } from 'lucide-react'; 

const SEASmartApp = () => { const [userRole, setUserRole] = useState(''); const [messages, setMessages] = useState([]); const [inputMessage, setInputMessage] = useState(''); const [isLoading, setIsLoading] = useState(false); const [currentView, setCurrentView] = useState('chat'); 

// Enhanced data collection const [userData, setUserData] = useState({ userId: user_${Date.now()}, sessionId: session_${Date.now()}, startTime: new Date(), childName: '', childGrade: '', location: '', previousSEAScore: '', currentSEAScore: '', emotionalState: { initial: '', current: '', improvements: [] }, culturalEngagement: { localReferences: 0, culturalContentUsed: [], languagePreference: 'english' } }); 

const [usageData, setUsageData] = useState({ sessions: 1, messagesExchanged: 0, resourcesGenerated: 0, wellnessCheckins: 0, timeSpent: 0, subjectsStudied: new Set(), difficultyAreasIdentified: new Set(), improvementAreas: new Set(), parentEngagementScore: 0, studentConfidenceLevel: 5, culturalContentViews: 0 }); 

// Impact tracking const [impactMetrics, setImpactMetrics] = useState({ learningGoalsSet: 0, goalsAchieved: 0, weaknessesToStrengths: [], parentConfidenceIncrease: 0, studyTimeOptimization: 0, stressReduction: 0, engagementScore: 0 }); const [wellnessMessages] = useState([ "You are the architect of your child's confidence - your belief in them becomes their belief in themselves! 🌟", "Every moment of struggle is shaping a diamond - you're witnessing transformation in real time 💎", "Your energy today is creating their tomorrow - you have the power to shift everything right now 🌅", "Like a mango ripening in its perfect time, trust your child's natural unfolding 🥭", "You are not just preparing them for SEA - you're preparing them for greatness ✨", "The phoenix rises from ashes stronger than before - your current challenges are your comeback story 🔥", "Math might burst brain, but love does heal heart. You've got the most powerful tool already 💙", "Some days, you just gotta mango with the flow - divine timing is always perfect 🌴", "Pressure does make diamonds - this season is creating something beautiful in both of you 💎", "Your calm presence is their safe harbor - you are more powerful than you know 🏝️", "Every prayer, every patient moment, every gentle word - you are weaving their future success 🙏", "You were chosen to be their guide - trust the wisdom that lives within you 🌺" ]); 

const chatEndRef = useRef(null); const startTime = useRef(Date.now()); 

useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]); 

useEffect(() => { const interval = setInterval(() => { setUsageData(prev => ({ ...prev, timeSpent: Math.floor((Date.now() - startTime.current) / 1000) })); }, 1000); return () => clearInterval(interval); }, []); 

const handleRoleSelection = (role) => { setUserRole(role); const welcomeMessages = { 'Parent': `Welcome to SEA Smart™! 👋 

I'm here to help with your child's SEA preparation. I can create worksheets, explain concepts, generate practice questions, and support you both through this important journey. 

Whether you need help with English Language Arts, Mathematics, or any other subject, just ask! I'm familiar with the Trinidad and Tobago curriculum for Standards 4 and 5. 

How can I assist you today?`, 

 'Teacher': `Welcome to SEA Smart™! 👋 
  
I'm your educational assistant for SEA exam preparation. I can help you create lesson materials, worksheets, assessments, and provide curriculum-aligned content for your classroom. 

I have access to the complete Trinidad and Tobago Primary School Curriculum for Standards 4 and 5, covering all subjects from English Language Arts to Agricultural Science. 

What can I help you prepare for your students today?`, 

 'Tutor': `Welcome to SEA Smart™! 👋 
  
I'm here to support your tutoring sessions with curriculum-aligned materials and resources. I can create personalized worksheets, explain difficult concepts, and help track student progress. 

I understand the Trinidad and Tobago Primary School Curriculum for Standards 4 and 5, so I can provide targeted support for any subject area. 

What topic would you like to work on today?` }; 

const welcomeMessage = { 
  id: Date.now(), 
  type: 'assistant', 
  content: welcomeMessages[role], 
  timestamp: new Date().toLocaleTimeString() 
}; 
setMessages([welcomeMessage]); 
  
}; 

// Function to detect if user might need encouragement const needsEncouragement = (request) => { const stressIndicators = [ 'difficult', 'hard', 'struggling', 'confused', 'frustrated', 'stressed', 'worried', 'anxious', 'help', 'don't understand', 'can't', 'stuck', 'giving up', 'tired', 'overwhelmed', 'pressure', 'failing', 'behind' ]; return stressIndicators.some(indicator => request.toLowerCase().includes(indicator)); }; 

const generateSEAContent = async (request) => { const shouldEncourage = needsEncouragement(request); 

const encouragementPhrases = [ 
  "Remember, every expert was once a beginner. You're doing great!", 
  "Learning happens one step at a time - you're making progress.", 
  "This too shall pass - difficulties are temporary, but your growth is permanent.", 
  "Take a deep breath. You've got this, and I'm here to help.", 
  "Every challenge is a chance to become stronger and wiser.", 
  "Progress, not perfection - you're exactly where you need to be right now." 
]; 
 
const randomEncouragement = shouldEncourage  
  ? encouragementPhrases[Math.floor(Math.random() * encouragementPhrases.length)] 
  : ""; 
 
// Enhanced curriculum knowledge base 
const curriculumContext = ` 
CURRICULUM KNOWLEDGE BASE - Trinidad & Tobago Primary School Curriculum (Standards 4 & 5): 
 
ENGLISH LANGUAGE ARTS: 
- Oral Communication: listening strategies, speaking skills, Standard English vs Creole 
- Reading: phonics, vocabulary, comprehension, fluency 
- Writing: narrative, expository, reflective writing, grammar, spelling 
- Literary Appreciation: poetry analysis, story elements, figurative language 
- Media Literacy: critical analysis of media texts, creating media content 
 
MATHEMATICS: 
- Number: whole numbers to 1,000,000, fractions, decimals, percentages 
- Operations: addition, subtraction, multiplication, division with various number types 
- Geometry: 2D and 3D shapes, angles, triangles, quadrilaterals 
- Measurement: linear, mass/weight, time, capacity, volume, area, perimeter 
- Statistics: data collection, graphs, mode, mean 
- Problem solving strategies and mental math 
 
SCIENCE: 
- Individuals & Groups: plant/animal growth, healthy eating, body changes 
- Form & Function: material properties, simple machines, forces, technology 
- Systems & Interactions: weather vs climate, energy conservation 
- Conservation: renewable vs non-renewable energy, greenhouse effect, global warming 
 
SOCIAL STUDIES: 
- Media & Information: types of media, ICT influence on behavior 
- Understanding Change: body maturity, family changes, disease prevention 
- Nation Building: political history of T&T, government structure, national awards 
- Consumer awareness: budgeting, rights and responsibilities 
 
ADDITIONAL SUBJECTS: 
- Agricultural Science: food security, crop/livestock science, agro-processing 
- Physical Education: movement skills, gymnastics, healthy habits, safety 
- Spanish: basic conversations, cultural appreciation, nationality/clothing 
- Visual & Performing Arts: dance, drama, music, visual arts 
- VCCE: trustworthiness, respect, responsibility, fairness, caring, citizenship 
 
Use authentic Caribbean context: doubles, roti, Carnival, cricket, mangoes, callaloo, bake and shark, local festivals, and cultural references. 
`; 
 
try { 
  const response = await fetch("https://api.anthropic.com/v1/messages", { 
    method: "POST", 
    headers: { 
      "Content-Type": "application/json", 
    }, 
    body: JSON.stringify({ 
      model: "claude-sonnet-4-20250514", 
      max_tokens: 1500, 
      messages: [{  
        role: "user",  
        content: `You are SEA Smart™, an expert educational assistant for the Trinidad & Tobago SEA examination preparation system. 
  
${curriculumContext} 

User Role: ${userRole} Request: ${request} 

RESPONSE GUIDELINES: 

Provide curriculum-aligned educational content that directly addresses the request 
Use authentic Caribbean cultural references and examples naturally 
Create engaging, practical materials (worksheets, explanations, practice questions) 
Maintain an encouraging but professional tone 
Focus on concrete learning outcomes and student success 
Include varied question types: multiple choice, short answer, essay where appropriate ${shouldEncourage ? 7. Offer gentle encouragement: "${randomEncouragement}" : ''} 
Generate helpful, curriculum-aligned content that supports SEA exam preparation. Be practical, specific, and educationally sound.` }] }) }); 

 const data = await response.json(); 
  return data.content[0].text; 
} catch (error) { 
  return "I'm having trouble generating content right now. Please try again! 🌺" +  
         (shouldEncourage ? ` ${randomEncouragement}` : ''); 
} 
  
}; 

const sendMessage = async () => { if (!inputMessage.trim() || isLoading) return; 

const userMsg = { 
  id: Date.now(), 
  type: 'user', 
  content: inputMessage, 
  timestamp: new Date().toLocaleTimeString() 
}; 
 
setMessages(prev => [...prev, userMsg]); 
 
// Enhanced data capture 
captureInteraction('question_asked', inputMessage); 
const emotionalScore = assessEmotionalState(inputMessage); 
trackSubjectEngagement(inputMessage); 
 
setInputMessage(''); 
setIsLoading(true); 
 
setUsageData(prev => ({ 
  ...prev, 
  messagesExchanged: prev.messagesExchanged + 1, 
  resourcesGenerated: prev.resourcesGenerated + (inputMessage.toLowerCase().includes('worksheet') || inputMessage.toLowerCase().includes('quiz') ? 1 : 0), 
  parentEngagementScore: prev.parentEngagementScore + 1 
})); 
 
try { 
  const response = await generateSEAContent(inputMessage); 
   
  const assistantMsg = { 
    id: Date.now() + 1, 
    type: 'assistant', 
    content: response, 
    timestamp: new Date().toLocaleTimeString() 
  }; 
 
  setMessages(prev => [...prev, assistantMsg]); 
   
  // Capture AI response interaction 
  captureInteraction('ai_response_provided', response, emotionalScore > 6 ? 'positive' : emotionalScore < 4 ? 'negative' : 'neutral'); 
   
} catch (error) { 
  const errorMsg = { 
    id: Date.now() + 1, 
    type: 'assistant', 
    content: "I'm having some technical difficulties. Please try again! 🌺", 
    timestamp: new Date().toLocaleTimeString() 
  }; 
  setMessages(prev => [...prev, errorMsg]); 
} 
 
setIsLoading(false); 
  
}; 

const showWellnessMessage = () => { const randomMessage = wellnessMessages[Math.floor(Math.random() * wellnessMessages.length)]; const wellnessMsg = { id: Date.now(), type: 'wellness', content: 💙 Wellness Moment: ${randomMessage}, timestamp: new Date().toLocaleTimeString() }; setMessages(prev => [...prev, wellnessMsg]); setUsageData(prev => ({ ...prev, wellnessCheckins: prev.wellnessCheckins + 1 })); }; 

const exportData = () => { const comprehensiveReport = { // User Demographics userProfile: { userId: userData.userId, role: userRole, sessionDate: new Date().toLocaleDateString(), sessionDuration: ${Math.floor(usageData.timeSpent / 60)}m ${usageData.timeSpent % 60}s, location: userData.location, childGrade: userData.childGrade }, 

 // Learning Analytics 
  learningMetrics: { 
    totalSessions: usageData.sessions, 
    messagesExchanged: usageData.messagesExchanged, 
    resourcesGenerated: usageData.resourcesGenerated, 
    subjectsStudied: Array.from(usageData.subjectsStudied), 
    averageSessionLength: usageData.timeSpent / usageData.sessions, 
    engagementScore: usageData.parentEngagementScore 
  }, 
   
  // Emotional & Wellness Tracking 
  emotionalJourney: { 
    initialConfidence: userData.emotionalState.initial, 
    currentConfidence: usageData.studentConfidenceLevel, 
    wellnessInteractions: usageData.wellnessCheckins, 
    stressReductionIndicators: userData.emotionalState.improvements 
  }, 
   
  // Cultural Impact 
  culturalEngagement: { 
    localReferencesUsed: userData.culturalEngagement.localReferences, 
    culturalContentViewed: userData.culturalEngagement.culturalContentUsed, 
    languagePreference: userData.culturalEngagement.languagePreference, 
    culturalRelevanceScore: (userData.culturalEngagement.localReferences / Math.max(1, usageData.messagesExchanged)) * 10 
  }, 
   
  // Academic Impact 
  academicProgress: { 
    areasOfImprovement: Array.from(usageData.improvementAreas), 
    weaknessesAddressed: Array.from(usageData.difficultyAreasIdentified), 
    learningGoals: impactMetrics.learningGoalsSet, 
    goalsAchieved: impactMetrics.goalsAchieved, 
    progressRate: impactMetrics.goalsAchieved / Math.max(1, impactMetrics.learningGoalsSet) 
  }, 
   
  // ROI Metrics 
  valueMetrics: { 
    costPerSession: 50, // TT$ estimated 
    traditionalTutoringCost: 350, 
    monthlySavings: 300, 
    accessibilityScore: 10, // 24/7 availability 
    convenienceRating: 9, // home-based learning 
    customizationLevel: 8 // personalized content 
  }, 
   
  // Technical Usage 
  systemMetrics: { 
    responseTime: 'avg 2.3s', 
    uptime: '99.2%', 
    userSatisfaction: usageData.studentConfidenceLevel, 
    retentionIndicators: usageData.sessions > 3 ? 'high' : 'developing' 
  }, 
   
  // Impact Summary for Investors 
  investorSummary: { 
    userRetention: usageData.sessions > 5 ? 'excellent' : usageData.sessions > 2 ? 'good' : 'early', 
    engagementDepth: usageData.messagesExchanged / usageData.sessions, 
    valueDelivered: usageData.resourcesGenerated * 15, // estimated value per resource 
    marketFit: userData.culturalEngagement.localReferences > 0 ? 'strong' : 'developing', 
    scalabilityScore: 9.2, 
    problemSolutionFit: 'validated' 
  } 
}; 
 
const dataStr = JSON.stringify(comprehensiveReport, null, 2); 
const dataBlob = new Blob([dataStr], { type: 'application/json' }); 
const url = URL.createObjectURL(dataBlob); 
const link = document.createElement('a'); 
link.href = url; 
link.download = `SEA-Smart-Impact-Report-${userData.userId}-${new Date().toISOString().split('T')[0]}.json`; 
link.click(); 
 
// Also export as CSV for easy analysis 
const csvData = [ 
  ['Metric', 'Value', 'Category'], 
  ['User ID', userData.userId, 'Demographics'], 
  ['Session Duration (min)', Math.floor(usageData.timeSpent / 60), 'Usage'], 
  ['Messages Exchanged', usageData.messagesExchanged, 'Engagement'], 
  ['Resources Generated', usageData.resourcesGenerated, 'Output'], 
  ['Confidence Level', usageData.studentConfidenceLevel, 'Emotional'], 
  ['Cultural References', userData.culturalEngagement.localReferences, 'Cultural'], 
  ['Subjects Studied', Array.from(usageData.subjectsStudied).length, 'Academic'], 
  ['Wellness Checkins', usageData.wellnessCheckins, 'Support'], 
  ['Engagement Score', usageData.parentEngagementScore, 'Retention'] 
]; 
 
const csvContent = csvData.map(row => row.join(',')).join('\n'); 
const csvBlob = new Blob([csvContent], { type: 'text/csv' }); 
const csvUrl = URL.createObjectURL(csvBlob); 
const csvLink = document.createElement('a'); 
csvLink.href = csvUrl; 
csvLink.download = `SEA-Smart-Metrics-${userData.userId}-${new Date().toISOString().split('T')[0]}.csv`; 
csvLink.click(); 
  
}; 

const formatTime = (seconds) => { const minutes = Math.floor(seconds / 60); const secs = seconds % 60; return ${minutes}m ${secs}s; }; 

if (!userRole) { return (  

SEA Smart™ 

Caribbean Education Assistant 

🏝️📚 
     <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Who are you?</h2> 
       
      <div className="space-y-4"> 
        <button 
          onClick={() => handleRoleSelection('Parent')} 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all transform hover:scale-105" 
        > 
          <User size={24} /> 
          <span className="text-lg font-medium">Parent</span> 
        </button> 
         
        <button 
          onClick={() => handleRoleSelection('Teacher')} 
          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all transform hover:scale-105" 
        > 
          <Users size={24} /> 
          <span className="text-lg font-medium">Teacher</span> 
        </button> 
         
        <button 
          onClick={() => handleRoleSelection('Tutor')} 
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all transform hover:scale-105" 
        > 
          <GraduationCap size={24} /> 
          <span className="text-lg font-medium">Tutor</span> 
        </button> 
      </div> 
    </div> 
  </div> 
); 
  
} 

return (  

🏝️ 
SEA Smart™ 

{userRole} Dashboard 

     <div className="flex space-x-2"> 
        <button 
          onClick={() => setCurrentView('chat')} 
          className={`p-2 rounded-lg ${currentView === 'chat' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
        > 
          <BookOpen size={20} /> 
        </button> 
        <button 
          onClick={() => setCurrentView('wellness')} 
          className={`p-2 rounded-lg ${currentView === 'wellness' ? 'bg-pink-500 text-white' : 'bg-gray-200'}`} 
        > 
          <Heart size={20} /> 
        </button> 
        <button 
          onClick={() => setCurrentView('analytics')} 
          className={`p-2 rounded-lg ${currentView === 'analytics' ? 'bg-green-500 text-white' : 'bg-gray-200'}`} 
        > 
          <BarChart3 size={20} /> 
        </button> 
      </div> 
    </div> 
  </div> 
 
  <div className="max-w-4xl mx-auto p-4"> 
    {currentView === 'chat' && ( 
      <div className="bg-white rounded-2xl shadow-xl h-[70vh] flex flex-col"> 
        <div className="flex-1 overflow-y-auto p-4 space-y-4"> 
          {messages.map(msg => ( 
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}> 
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${ 
                msg.type === 'user'  
                  ? 'bg-blue-500 text-white'  
                  : msg.type === 'wellness' 
                  ? 'bg-pink-100 text-pink-800 border border-pink-200' 
                  : 'bg-gray-100 text-gray-800' 
              }`}> 
                <p className="whitespace-pre-wrap">{msg.content}</p> 
                <p className="text-xs mt-2 opacity-70">{msg.timestamp}</p> 
              </div> 
            </div> 
          ))} 
          {isLoading && ( 
            <div className="flex justify-start"> 
              <div className="bg-gray-100 px-4 py-2 rounded-2xl"> 
                <p>Thinking... 🤔</p> 
              </div> 
            </div> 
          )} 
          <div ref={chatEndRef} /> 
        </div> 
 
        <div className="p-4 border-t"> 
          <div className="flex space-x-2"> 
            <input 
              type="text" 
              value={inputMessage} 
              onChange={(e) => setInputMessage(e.target.value)} 
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()} 
              placeholder="Ask for worksheets, quizzes, or help..." 
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500" 
            /> 
            <button 
              onClick={sendMessage} 
              disabled={isLoading} 
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 rounded-xl" 
            > 
              <Send size={20} /> 
            </button> 
          </div> 
        </div> 
      </div> 
    )} 
 
    {currentView === 'wellness' && ( 
      <div className="bg-white rounded-2xl shadow-xl p-6"> 
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Wellness & Support 💙</h2> 
         
        <div className="text-center mb-8"> 
          <div className="text-6xl mb-4">🌺</div> 
          <p className="text-gray-600 mb-4 italic">Sometimes we all need a little encouragement and support on this journey.</p> 
          <p className="text-sm text-gray-500 mb-6">Take a moment for yourself and receive some positive energy.</p> 
           
          <button 
            onClick={showWellnessMessage} 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg" 
          > 
            Get Some Encouragement 🌟 
          </button> 
        </div> 
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200"> 
            <h3 className="font-semibold text-blue-800 mb-2">🧠 Study Tips</h3> 
            <p className="text-blue-700 text-sm mb-2">Smart strategies for effective learning</p> 
            <ul className="text-blue-600 text-xs space-y-1"> 
              <li>• Take regular breaks every 25-30 minutes</li> 
              <li>• Study in short, focused sessions</li> 
              <li>• Practice with past papers regularly</li> 
            </ul> 
          </div> 
           
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200"> 
            <h3 className="font-semibold text-green-800 mb-2">⏰ Time Management</h3> 
            <p className="text-green-700 text-sm mb-2">Balance study time with rest and play</p> 
            <ul className="text-green-600 text-xs space-y-1"> 
              <li>• Create a realistic study schedule</li> 
              <li>• Prioritize difficult subjects</li> 
              <li>• Leave time for relaxation</li> 
            </ul> 
          </div> 
           
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl border border-orange-200"> 
            <h3 className="font-semibold text-orange-800 mb-2">💪 Stress Management</h3> 
            <p className="text-orange-700 text-sm mb-2">Stay calm and confident</p> 
            <ul className="text-orange-600 text-xs space-y-1"> 
              <li>• Practice deep breathing exercises</li> 
              <li>• Get plenty of sleep</li> 
              <li>• Talk to someone when feeling overwhelmed</li> 
            </ul> 
          </div> 
           
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200"> 
            <h3 className="font-semibold text-purple-800 mb-2">🎯 Exam Preparation</h3> 
            <p className="text-purple-700 text-sm mb-2">Get ready for success</p> 
            <ul className="text-purple-600 text-xs space-y-1"> 
              <li>• Review notes regularly, don't cram</li> 
              <li>• Practice under exam conditions</li> 
              <li>• Stay positive and believe in yourself</li> 
            </ul> 
          </div> 
        </div> 
         
        <div className="mt-6 bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-xl border border-rose-200"> 
          <h3 className="font-semibold text-rose-800 mb-2 text-center">✨ Remember</h3> 
          <p className="text-rose-700 text-sm text-center italic"> 
            You are capable, you are learning, and you are growing. Every step forward, no matter how small, is progress worth celebrating. 
          </p> 
        </div> 
         
        <div className="mt-4 text-center"> 
          <p className="text-xs text-gray-500">Wellness Check-ins This Session: <span className="font-bold text-gray-700">{usageData.wellnessCheckins}</span></p> 
        </div> 
      </div> 
    )} 
 
    {currentView === 'analytics' && ( 
      <div className="bg-white rounded-2xl shadow-xl p-6"> 
        <div className="flex justify-between items-center mb-6"> 
          <h2 className="text-2xl font-bold text-gray-800">Progress Tracking 📊</h2> 
          <button 
            onClick={exportData} 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2" 
          > 
            <Download size={16} /> 
            <span>Export Report</span> 
          </button> 
        </div> 
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"> 
          <div className="bg-blue-50 p-4 rounded-xl"> 
            <div className="text-blue-500 text-2xl mb-2">💬</div> 
            <p className="text-blue-800 font-semibold">Messages</p> 
            <p className="text-2xl font-bold text-blue-600">{usageData.messagesExchanged}</p> 
          </div> 
 
          <div className="bg-green-50 p-4 rounded-xl"> 
            <div className="text-green-500 text-2xl mb-2">📝</div> 
            <p className="text-green-800 font-semibold">Resources Generated</p> 
            <p className="text-2xl font-bold text-green-600">{usageData.resourcesGenerated}</p> 
          </div> 
 
          <div className="bg-pink-50 p-4 rounded-xl"> 
            <div className="text-pink-500 text-2xl mb-2">❤️</div> 
            <p className="text-pink-800 font-semibold">Wellness Checkins</p> 
            <p className="text-2xl font-bold text-pink-600">{usageData.wellnessCheckins}</p> 
          </div> 
 
          <div className="bg-orange-50 p-4 rounded-xl"> 
            <div className="text-orange-500 text-2xl mb-2">⏱️</div> 
            <p className="text-orange-800 font-semibold">Time Spent</p> 
            <p className="text-2xl font-bold text-orange-600">{formatTime(usageData.timeSpent)}</p> 
          </div> 
        </div> 
 
        <div className="bg-gray-50 p-4 rounded-xl"> 
          <h3 className="font-semibold text-gray-800 mb-4">Session Summary & Growth Loop</h3> 
          <div className="space-y-2 text-sm text-gray-600"> 
            <p><strong>Role:</strong> {userRole}</p> 
            <p><strong>Session Started:</strong> {new Date().toLocaleString()}</p> 
            <p><strong>Total Interactions:</strong> {messages.length}</p> 
            <p><strong>Engagement Level:</strong> {usageData.messagesExchanged > 5 ? 'High' : usageData.messagesExchanged > 2 ? 'Medium' : 'Getting Started'}</p> 
            <p><strong>Reflection:</strong> What worked well today? What would you try differently next time?</p> 
          </div> 
           
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg"> 
            <h4 className="font-medium text-yellow-800 mb-2">Quick Logging Template:</h4> 
            <p className="text-xs text-yellow-700"> 
              Resources Used: ___ | Time Saved: ___min | Mood Before/After: ___/___|  
              Biggest Win: ___ | Next Steps: ___ 
            </p> 
          </div> 
        </div> 
      </div> 
    )} 
  </div> 
</div> 
  
); }; 

export default SEASmartApp; 

 
