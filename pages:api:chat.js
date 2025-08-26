{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Update your existing chat component with this function\
const handleSendMessage = async (e) => \{\
  e.preventDefault();\
  if (!input.trim()) return;\
\
  const userMessage = input.trim();\
  setInput('');\
  \
  // Add user message to chat\
  setMessages(prev => [...prev, \{ text: userMessage, sender: 'user' \}]);\
  setIsLoading(true);\
\
  try \{\
    const response = await fetch('/api/chat', \{\
      method: 'POST',\
      headers: \{\
        'Content-Type': 'application/json',\
      \},\
      body: JSON.stringify(\{ message: userMessage \}),\
    \});\
\
    if (!response.ok) \{\
      throw new Error(`HTTP error! status: $\{response.status\}`);\
    \}\
\
    const data = await response.json();\
    \
    // Add AI response to chat\
    setMessages(prev => [...prev, \{ text: data.message, sender: 'ai' \}]);\
  \} catch (error) \{\
    console.error('Chat error:', error);\
    setMessages(prev => [...prev, \{ \
      text: 'Sorry, I encountered an error. Please try again.', \
      sender: 'ai' \
    \}]);\
  \} finally \{\
    setIsLoading(false);\
  \}\
\};}