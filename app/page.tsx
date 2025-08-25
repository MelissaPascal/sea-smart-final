{currentView === 'analytics' && (  

  <div className="bg-white rounded-2xl shadow-xl p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Impact Dashboard 📊</h2>
    <button onClick={exportData} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 mb-6">
      <Download size={16} />
      <span>Export Impact Report</span>
    </button>

    {/* Key Impact Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <MetricCard title="Engagement Score" value={`${usageData.parentEngagementScore}/10`} color="blue" icon={<TrendingUp />} subtitle="Parent interaction level" />
      <MetricCard title="Confidence Level" value={`${usageData.studentConfidenceLevel}/10`} color="green" icon={<Star />} subtitle="Student emotional state" />
      <MetricCard title="Cultural Relevance" value={userData.culturalEngagement.localReferences} color="purple" icon={<Target />} subtitle="Local references used" />
      <MetricCard title="Time Invested" value={formatTime(usageData.timeSpent)} color="orange" icon={<Clock />} subtitle="Active learning time" />
    </div>

    {/* Academic Progress Section */}
    <AcademicSection usageData={usageData} />

    {/* Cultural Impact */}
    <CulturalImpactSection userData={userData} usageData={usageData} />

    {/* Impact Summary for Investors */}
    <InvestorImpactSummary usageData={usageData} userData={userData} impactMetrics={impactMetrics} />
  </div>
)}

// Components used:

const MetricCard = ({ title, value, color, icon, subtitle }) => (
  <div className={`bg-gradient-to-r from-${color}-50 to-${color}-100 p-4 rounded-xl border border-${color}-200`}>
    <div className="flex items-center justify-between">
      <div>
        <p className={`text-${color}-800 font-semibold`}>{title}</p>
        <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
      </div>
      {React.cloneElement(icon, { className: `text-${color}-500`, size: 24 })}
    </div>
    <p className={`text-xs text-${color}-600 mt-1`}>{subtitle}</p>
  </div>
);

const AcademicSection = ({ usageData }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <div className="bg-gray-50 p-4 rounded-xl">
      <h3 className="font-semibold text-gray-800 mb-4">Academic Engagement</h3>
      <StatRow label="Resources Generated" value={usageData.resourcesGenerated} />
      <StatRow label="Subjects Explored" value={Array.from(usageData.subjectsStudied).length} />
      <StatRow label="Messages Exchanged" value={usageData.messagesExchanged} />
      <StatRow label="Wellness Support Used" value={usageData.wellnessCheckins} />
    </div>

    <div className="bg-gray-50 p-4 rounded-xl">
      <h3 className="font-semibold text-gray-800 mb-4">Value Delivered</h3>
      <StatRow label="Est. Traditional Cost" value="TT$350/month" valueClass="text-red-600" />
      <StatRow label="SEA Smart Cost" value="TT$50/month" valueClass="text-green-600" />
      <StatRow label="Monthly Savings" value="TT$300" valueClass="text-blue-600" />
      <StatRow label="Accessibility Gain" value="24/7 Available" valueClass="text-purple-600" />
    </div>
  </div>
);

const CulturalImpactSection = ({ userData, usageData }) => (
  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl border border-teal-200 mb-6">
    <h3 className="font-semibold text-teal-800 mb-3">🇹🇹 Cultural Authenticity Score</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CenterStat value={userData.culturalEngagement.localReferences} label="Caribbean References" />
      <CenterStat value={((userData.culturalEngagement.localReferences / Math.max(1, usageData.messagesExchanged)) * 10).toFixed(1)} label="Cultural Relevance Score" />
      <CenterStat value={userData.culturalEngagement.culturalContentUsed.length} label="Local Context Examples" />
    </div>
  </div>
);

const InvestorImpactSummary = ({ usageData, userData, impactMetrics }) => (
  <div className="bg-gray-50 p-4 rounded-xl">
    <h3 className="font-semibold text-gray-800 mb-4">📈 Investor Impact Summary</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
      <div className="space-y-2">
        <p><strong>Problem-Solution Fit:</strong> ✅ Validated</p>
        <p><strong>User Retention:</strong> {usageData.sessions > 5 ? '🟢 Excellent' : usageData.sessions > 2 ? '🟡 Good' : '🔴 Early Stage'}</p>
        <p><strong>Market Accessibility:</strong> 🟢 High (70% cost reduction)</p>
        <p><strong>Cultural Fit:</strong> {userData.culturalEngagement.localReferences > 0 ? '🟢 Strong' : '🟡 Developing'}</p>
      </div>
      <div className="space-y-2">
        <p><strong>Scalability:</strong> 🟢 Excellent (digital platform)</p>
        <p><strong>Value Creation:</strong> TT$300+ savings per family</p>
        <p><strong>Engagement Depth:</strong> {(usageData.messagesExchanged / Math.max(1, usageData.sessions)).toFixed(1)} interactions/session</p>
        <p><strong>Support Utilization:</strong> {((usageData.wellnessCheckins / Math.max(1, usageData.sessions)) * 100).toFixed(0)}% use wellness features</p>
      </div>
    </div>

    <div className="mt-4 p-3 bg-green-50 rounded-lg text-xs text-green-700">
      <h4 className="font-medium text-green-800 mb-2">Key Success Indicators:</h4>
      <p>
        • High engagement: {usageData.messagesExchanged} interactions<br/>
        • Emotional support utilized: {usageData.wellnessCheckins} check-ins<br/>
        • Cultural relevance: {userData.culturalEngagement.localReferences} local references<br/>
        • Value delivery: {usageData.resourcesGenerated} resources<br/>
        • Cost efficiency: 86% savings vs traditional tutoring
      </p>
    </div>
  </div>
);

const StatRow = ({ label, value, valueClass = 'text-gray-800' }) => (
  <div className="flex justify-between">
    <span className="text-gray-600">{label}:</span>
    <span className={`font-bold ${valueClass}`}>{value}</span>
  </div>
);

const CenterStat = ({ value, label }) => (
  <div className="text-center">
    <p className="text-2xl font-bold text-teal-600">{value}</p>
    <p className="text-xs text-teal-700">{label}</p>
  </div>
);
