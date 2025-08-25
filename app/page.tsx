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
      "inline-flex items-center gap-2 rounded-lg bg-blue-600
