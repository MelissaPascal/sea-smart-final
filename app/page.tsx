"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Send,
  BookOpen,
  Heart,
  BarChart3,
  Download,
  User,
  Users,
  GraduationCap,
  TrendingUp,
  Star,
  Clock,
  Target,
} from "lucide-react";

/* ====== Types ====== */
type Role = "Parent" | "Teacher" | "Tutor";

interface Message {
  id: number;
  type: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface UserData {
  userId: string;
  sessionId: string;
  startTime: Date;
  childName: string;
  childGrade: string;
  location: string;
  previousSEAScore: string;
  currentSEAScore: string;
  emotionalState: { initial: string; current: string; improvements: string[] };
  culturalEngagement: {
    localReferences: number;
    culturalContentUsed: string[];
    languagePreference: string;
  };
}

interface UsageData {
  sessions: number;
  messagesExchanged: number;
  resourcesGenerated: number;
  wellnessCheckins: number;
  timeSpent: number; // seconds
  subjectsStudied: string[];
  difficultyAreasIdentified: string[];
  improvementAreas: string[];
  parentEngagementScore: number; // 0–10
  studentConfidenceLevel: number; // 0–10
  culturalContentViews: number;
}

/* ====== Helpers ====== */
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}m ${secs}s`;
};

/** Static Tailwind class maps to avoid dynamic class issues */
const metricColorClasses = {
  blue: {
    wrap: "from-blue-50 to-blue-100 border-blue-200",
    title: "text-blue-800",
    value: "text-blue-600",
    icon: "text-blue-500",
    subtitle: "text-blue-600",
  },
  green: {
    wrap: "from-green-50 to-green-100 border-green-200",
    title: "text-green-800",
    value: "text-green-600",
    icon: "text-green-500",
    subtitle: "text-green-600",
  },
  purple: {
    wrap: "from-purple-50 to-purple-100 border-purple-200",
    title: "text-purple-800",
    value: "text-purple-600",
    icon: "text-purple-500",
    subtitle: "text-purple-600",
  },
  orange: {
    wrap: "from-orange-50 to-orange-100 border-orange-200",
    title: "text-orange-800",
    value: "text-orange-600",
    icon: "text-orange-500",
    subtitle: "text-orange-600",
  },
};

type MetricColor = keyof typeof metricColorClasses;

/* ====== UI Bits ====== */
const TabButton = ({
  active,
  onClick,
  children,
  ariaLabel,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel: string;
}) => (
  <button
    aria-label={ariaLabel}
    onClick={onClick}
    className={[
      "inline-flex items-center justify-center rounded-lg border px-3 py-2 transition",
      active
        ? "bg-blue-600 text-white border-blue-600 shadow"
        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50",
    ].join(" ")}
  >
    {children}
  </button>
);

const PrimaryButton = ({
  children,
  onClick,
  disabled,
  className = "",
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={[
      "inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "hover:bg-blue-700",
      className,
    ].join(" ")}
  >
    {children}
  </button>
);

const RoleButton = ({
  onClick,
  icon,
  label,
  color,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  color: "blue" | "green" | "purple";
}) => {
  const colorMap = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
  } as const;

  return (
    <button
      onClick={onClick}
      className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-white transition ${colorMap[color]}`}
    >
      {icon}
      <span className="font-semibold">{label}</span>
    </button>
  );
};

const StatRow = ({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass: string;
}) => (
  <p className="text-sm">
    {label}: <span className={`font-bold ${valueClass}`}>{value}</span>
  </p>
);

const CenterStat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-3xl font-bold text-purple-700">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const MetricCard = ({
  title,
  value,
  color,
  icon,
  subtitle,
}: {
  title: string;
  value: string | number;
  color: MetricColor;
  icon: React.ReactElement;
  subtitle: string;
}) => {
  const cls = metricColorClasses[color];
  return (
    <div
      className={`bg-gradient-to-r ${cls.wrap} p-4 rounded-xl border flex flex-col gap-1`}
    >
      <p className={`${cls.title} font-semibold`}>{title}</p>
      <p className={`text-2xl font-bold ${cls.value}`}>{value}</p>
      {React.cloneElement(icon, { className: cls.icon, size: 24 })}
      <p className={`text-xs mt-1 ${cls.subtitle}`}>{subtitle}</p>
    </div>
  );
};

/* ====== Sections ====== */
const AcademicSection = ({ usageData }: { usageData: UsageData }) => (
  <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-200">
    <h3 className="font-semibold text-gray-800 mb-4">Value Delivered</h3>
    <StatRow label="Est. Traditional Cost" value="TT$350/month" valueClass="text-red-600" />
    <StatRow label="SEA Smart Cost" value="TT$50/month" valueClass="text-green-600" />
    <StatRow label="Monthly Savings" value="TT$300" valueClass="text-blue-600" />
    <StatRow label="Accessibility Gain" value="24/7 Available" valueClass="text-purple-600" />
  </div>
);

const CulturalImpactSection = ({
  userData,
  usageData,
}: {
  userData: UserData;
  usageData: UsageData;
}) => {
  const score = (
    (userData.culturalEngagement.localReferences /
      Math.max(1, usageData.messagesExchanged)) *
    10
  ).toFixed(1);

  return (
    <div className="bg-white p-4 rounded-xl mb-6 border border-gray-200">
      <h3 className="font-semibold text-gray-800 mb-2">
        🇹🇹 Cultural Authenticity Score
      </h3>
      <CenterStat value={score} label="Cultural Relevance Score" />
    </div>
  );
};

const InvestorImpactSummary = ({
  usageData,
  userData,
}: {
  usageData: UsageData;
  userData: UserData;
}) => {
  const interactionsPerSession = (
    usageData.messagesExchanged / Math.max(1, usageData.sessions)
  ).toFixed(1);
  const wellnessUse = (
    (usageData.wellnessCheckins / Math.max(1, usageData.sessions)) *
    100
  ).toFixed(0);

  return (
    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
      <h3 className="font-semibold text-green-800 mb-2">
        📈 Investor Impact Summary
      </h3>
      <p className="text-sm text-green-900">
        <strong>Problem-Solution Fit:</strong> ✅ Validated
        <br />
        <strong>User Retention:</strong>{" "}
        {usageData.sessions > 5 ? "🟢 Excellent" : usageData.sessions > 2 ? "🟡 Good" : "🔴 Early Stage"}
        <br />
        <strong>Market Accessibility:</strong> 🟢 High (70% cost reduction)
        <br />
        <strong>Cultural Fit:</strong>{" "}
        {userData.culturalEngagement.localReferences > 0 ? "🟢 Strong" : "🟡 Developing"}
        <br />
        <strong>Scalability:</strong> 🟢 Excellent (digital platform)
        <br />
        <strong>Value Creation:</strong> TT$300+ savings per family
        <br />
        <strong>Engagement Depth:</strong> {interactionsPerSession} interactions/session
        <br />
        <strong>Support Utilization:</strong> {wellnessUse}% use wellness features
      </p>
    </div>
  );
};

/* ====== Page Component ====== */
export default function Page() {
  const [userRole, setUserRole] = useState<Role | "">("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<"chat" | "wellness" | "analytics">("chat");

  const [userData] = useState<UserData>({
    userId: `user_${Date.now()}`,
    sessionId: `session_${Date.now()}`,
    startTime: new Date(),
    childName: "",
    childGrade: "",
    location: "",
    previousSEAScore: "",
    currentSEAScore: "",
    emotionalState: { initial: "", current: "", improvements: [] },
    culturalEngagement: {
      localReferences: 0,
      culturalContentUsed: [],
      languagePreference: "english",
    },
  });

  const [usageData, setUsageData] = useState<UsageData>({
    sessions: 1,
    messagesExchanged: 0,
    resourcesGenerated: 0,
    wellnessCheckins: 0,
    timeSpent: 0,
    subjectsStudied: [],
    difficultyAreasIdentified: [],
    improvementAreas: [],
    parentEngagementScore: 0,
    studentConfidenceLevel: 5,
    culturalContentViews: 0,
  });

  // (Optional) Reserved for future use
  // const [impactMetrics, setImpactMetrics] = useState({
  //   learningGoalsSet: 0,
  //   goalsAchieved: 0,
  //   weaknessesToStrengths: [] as string[],
  //   parentConfidenceIncrease: 0,
  //   studyTimeOptimization: 0,
  //   stressReduction: 0,
  //   engagementScore: 0,
  // });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const startTime = useRef<number>(Date.now());

  // Scroll chat to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Increment time spent every second
  useEffect(() => {
    const interval = setInterval(() => {
      setUsageData((prev) => ({
        ...prev,
        timeSpent: Math.floor((Date.now() - startTime.current) / 1000),
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRoleSelection = (role: Role) => {
    setUserRole(role);
    const roleMessages: Record<Role, string> = {
      Parent: `Welcome to SEA Smart™! I'm here to help with your child's SEA preparation.`,
      Teacher: `Welcome to SEA Smart™! I'm your educational assistant for SEA exam prep.`,
      Tutor: `Welcome to SEA Smart™! I'm here to support your tutoring sessions.`,
    };
    setMessages([
      {
        id: Date.now(),
        type: "assistant",
        content: roleMessages[role],
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const sendMessage = async () => {
    const trimmed = inputMessage.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      id: Date.now(),
      type: "user",
      content: trimmed,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);
    setUsageData((prev) => ({
      ...prev,
      messagesExchanged: prev.messagesExchanged + 1,
      parentEngagementScore: Math.min(10, prev.parentEngagementScore + 1),
    }));

    try {
      // Placeholder: replace with your API call to your chat backend / OpenAI
      const response = `This is a placeholder response to: ${trimmed}`;
      const assistantMsg: Message = {
        id: Date.now() + 1,
        type: "assistant",
        content: response,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "assistant",
          content: "Error generating response.",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!userRole) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-xl p-6 text-center">
          <h1 className="text-2xl font-bold">SEA Smart™ Caribbean Education Assistant</h1>
          <p className="mt-4 text-gray-700">Who are you?</p>
          <div className="mt-6 space-y-4">
            <RoleButton
              onClick={() => handleRoleSelection("Parent")}
              icon={<User size={18} />}
              label="Parent"
              color="blue"
            />
            <RoleButton
              onClick={() => handleRoleSelection("Teacher")}
              icon={<Users size={18} />}
              label="Teacher"
              color="green"
            />
            <RoleButton
              onClick={() => handleRoleSelection("Tutor")}
              icon={<GraduationCap size={18} />}
              label="Tutor"
              color="purple"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-4xl p-4">
      {/* Tabs */}
      <div className="mb-4 flex items-center gap-2">
        <TabButton
          active={currentView === "chat"}
          onClick={() => setCurrentView("chat")}
          ariaLabel="Chat"
        >
          <BookOpen />
        </TabButton>
        <TabButton
          active={currentView === "wellness"}
          onClick={() => setCurrentView("wellness")}
          ariaLabel="Wellness"
        >
          <Heart />
        </TabButton>
        <TabButton
          active={currentView === "analytics"}
          onClick={() => setCurrentView("analytics")}
          ariaLabel="Analytics"
        >
          <BarChart3 />
        </TabButton>
      </div>

      {/* Chat View */}
      {currentView === "chat" && (
        <section className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="space-y-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={[
                  "p-3 rounded-lg max-w-[85%]",
                  msg.type === "user"
                    ? "ml-auto bg-blue-50 border border-blue-100 text-right"
                    : "mr-auto bg-gray-50 border border-gray-100 text-left",
                ].join(" ")}
              >
                <div className="whitespace-pre-wrap text-sm text-gray-800">
                  {msg.content}
                </div>
                <div className="mt-1 text-xs text-gray-500">{msg.timestamp}</div>
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto max-w-[85%] rounded-lg border border-gray-100 bg-gray-50 p-3 text-left text-sm text-gray-600">
                Thinking…
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              id="message-input"
              name="message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask for help..."
              autoComplete="off"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <PrimaryButton type="submit" disabled={isLoading}>
              <Send size={16} />
              Send
            </PrimaryButton>
          </form>
        </section>
      )}

      {/* Wellness View */}
      {currentView === "wellness" && (
        <section className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-center text-blue-800">
          💙 Wellness Center Coming Soon
        </section>
      )}

      {/* Analytics View */}
      {currentView === "analytics" && (
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Impact Dashboard 📊
          </h2>
          <button
            className="mb-6 inline-flex items-center gap-2 rounded-lg bg-green-200 px-4 py-2 text-sm text-green-800 hover:bg-green-300"
            onClick={() => {
              // hook up your export logic here
              // e.g., generate CSV / PDF on client or call an API route
              alert("Export coming soon");
            }}
          >
            <Download size={16} /> Export Impact Report
          </button>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Engagement Score"
              value={`${usageData.parentEngagementScore}/10`}
              color="blue"
              icon={<TrendingUp />}
              subtitle="Parent interaction level"
            />
            <MetricCard
              title="Confidence Level"
              value={`${usageData.studentConfidenceLevel}/10`}
              color="green"
              icon={<Star />}
              subtitle="Student emotional state"
            />
            <MetricCard
              title="Cultural Relevance"
              value={userData.culturalEngagement.localReferences}
              color="purple"
              icon={<Target />}
              subtitle="Local references used"
            />
            <MetricCard
              title="Time Invested"
              value={formatTime(usageData.timeSpent)}
              color="orange"
              icon={<Clock />}
              subtitle="Active learning time"
            />
          </div>

          <AcademicSection usageData={usageData} />
          <CulturalImpactSection userData={userData} usageData={usageData} />
          <InvestorImpactSummary usageData={usageData} userData={userData} />
        </section>
      )}
    </main>
  );
}
