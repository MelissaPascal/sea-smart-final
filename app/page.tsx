"use client";

import React, { useState, useRef } from "react";

type ChatMsg = { id: string; who: "user" | "ai"; text: string; ts: number };

const roles = ["Teacher", "Parent", "Tutor"] as const;
const goals = [
  "Build a long-term SEA Prep Plan",
  "Get a worksheet/quiz right now",
  "Track progress and emotions",
  "Just explore resources",
] as const;

// 🔹 Formatter function for messages
const formatMessage = (text: string) => {
  return text
    // Bold headers that start and end with **
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-blue-900 font-semibold block mb-2">$1</strong>'
    )
    // File tags in colored badges
    .replace(
      /\[FILE_TAG: ([^\]]+)\]/g,
      '<span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mx-1">[FILE_TAG: $1]</span>'
    )
    // Bullet points
    .replace(
      /^- (.*$)/gm,
      '<div class="ml-4 mb-1 flex items-start"><span class="mr-2">•</span><span>$1</span></div>'
    )
    // Numbered lists
    .replace(
      /^(\d+)\. (.*$)/gm,
      '<div class="ml-4 mb-2"><span class="font-semibold text-blue-600">$1.</span> $2</div>'
    )
    // Line breaks for spacing
    .replace(/\n\n/g, "<br><br>")
    .replace(/\n/g, "<br>");
};

export default function SeaSmartChat() {
  const [role, setRole] = useState<(typeof roles)[number] | "">("");
  const [goal, setGoal] = useState<(typeof goals)[number] | "">("");
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [msgs, setMsgs] = useState<ChatMsg[]>([
    {
      id: crypto.randomUUID(),
      who: "ai",
      ts: Date.now(),
      text:
        `**Welcome to SEA Smart™!** Who are you today—**Teacher, Parent, or Tutor**?\n\n` +
        `**CHOOSE YOUR PATH:**\n` +
        `1. Build a long-term SEA Prep Plan\n` +
        `2. Get a worksheet/quiz right now\n` +
        `3. Track progress and emotions\n` +
        `4. Just explore resources\n\n` +
        `Let me know how I can assist you today!`,
    },
  ]);

  const listRef = useRef<HTMLDivElement>(null);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");

    const userMsg: ChatMsg = {
      id: crypto.randomUUID(),
      who: "user",
      ts: Date.now(),
      text,
    };
    setMsgs((m) => [...m, userMsg]);
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, role, goal }),
      });
      const data = await res.json();
      const aiText = data?.message ?? "Hmm, I didn't get a response.";
      const aiMsg: ChatMsg = {
        id: crypto.randomUUID(),
        who: "ai",
        ts: Date.now(),
        text: aiText,
      };
      setMsgs((m) => [...m, aiMsg]);
    } catch (err) {
      setMsgs((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          who: "ai",
          ts: Date.now(),
          text: "Sorry, something went wrong contacting the AI.",
        },
      ]);
    } finally {
      setBusy(false);
      setTimeout(() => {
        listRef.current?.scrollTo({
          top: listRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 50);
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-4 md:p-6">
      {/* Role + Goal selectors */}
      <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-semibold">SEA Smart™ Assistant</h1>
            <p className="text-sm text-gray-600">
              Culturally rooted • Emotionally safe • Goal-driven
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {/* Role buttons */}
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setRole((v) => (v === r ? "" : r))}
                className={`rounded-full px-3 py-1 text-sm border transition ${
                  role === r
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {/* Goal buttons */}
            {goals.map((g) => (
              <button
                key={g}
                onClick={() => setGoal((v) => (v === g ? "" : g))}
                className={`rounded-full px-3 py-1 text-sm border transition ${
                  goal === g
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat window */}
      <div
        ref={listRef}
        className="h-[56vh] w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
      >
        <div className="flex flex-col gap-4">
          {msgs.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.who === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.who === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800 border border-gray-200"
                }`}
              >
                {message.who === "ai" ? (
                  <div
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: formatMessage(message.text),
                    }}
                  />
                ) : (
                  <div className="whitespace-pre-wrap">{message.text}</div>
                )}
              </div>
            </div>
          ))}
          {busy && (
            <div className="self-start rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-600 shadow-sm">
              Typing…
            </div>
          )}
        </div>
      </div>

      {/* Composer */}
      <form onSubmit={sendMessage} className="mt-4 flex items-end gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message…"
          className="min-h-[48px] flex-1 rounded-xl border border-gray-300 p-3 text-sm outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="rounded-xl bg-black px-4 py-3 text-sm font-medium text-white shadow-sm disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
