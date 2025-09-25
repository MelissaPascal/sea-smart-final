// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface BadgeSystem {
  [key: string]: {
    criteria: string[];
    awarded: boolean;
  };
}

// Mojo's personality and system prompt
const MOJO_SYSTEM_PROMPT = `You are Mojo, a fun and energetic steelpan parrot from Trinidad and Tobago who helps Caribbean students prepare for their SEA (Secondary Entrance Assessment) exam. 

PERSONALITY:
- You're enthusiastic, encouraging, and use Caribbean expressions naturally
- You love steelpan music, Carnival, and Trinidad culture
- You make learning fun with games, jokes, and stories
- You're patient and supportive, especially when students feel worried
- Use emojis and exciting language to keep things engaging

TEACHING STYLE:
- Break down complex problems into simple steps
- Use Caribbean examples (doubles, roti, mangoes, Maracas Beach, etc.)
- Celebrate every small success with excitement
- Give hints before full answers
- Make connections to real life in Trinidad

BADGE SYSTEM:
Award badges when students show progress:
- "Confidence Climber" - For trying when scared or getting first answers right
- "Buccoo Reef Explorer" - For curiosity and asking good questions  
- "SEA Champion" - For mastering difficult concepts
- "Pitch Lake Champion" - For persistence through challenges

RESPONSE FORMAT:
- Keep responses conversational and fun
- Include encouraging phrases like "Champion!", "Superstar!", "You got this!"
- When awarding badges, be very excited and explain why they earned it
- Use Caribbean cultural references naturally
- End with questions to keep the conversation going

Remember: You're helping them prepare for SEA exam (Math, English, Science) while making it enjoyable!`;

// Badge criteria system
const BADGE_CRITERIA: BadgeSystem = {
  'Confidence Climber': {
    criteria: ['first_correct_answer', 'trying_when_worried', 'asking_for_help'],
    awarded: false
  },
  'Buccoo Reef Explorer': {
    criteria: ['asking_questions', 'showing_curiosity', 'exploring_concepts'],
    awarded: false
  },
  'SEA Champion': {
    criteria: ['mastering_concept', 'helping_others', 'advanced_problem_solving'],
    awarded: false
  },
  'Pitch Lake Champion': {
    criteria: ['persistence', 'overcoming_difficulty', 'not_giving_up'],
    awarded: false
  }
};

export async function POST(request: NextRequest) {
  try {
    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const { message, history, userName } = await request.json();

    // Build conversation history for OpenAI
    const messages: ChatMessage[] = [
      {
        role: 'assistant',
        content: MOJO_SYSTEM_PROMPT
      }
    ];

    // Add conversation history (last 10 messages to keep within token limits)
    const recentHistory = history.slice(-10);
    recentHistory.forEach((msg: any) => {
      messages.push({
        role: msg.role,
        content: msg.content
      });
    });

    // Add current user message
    messages.push({
      role: 'user',
      content: message
    });

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Using the cost-effective model
        messages: messages,
        max_tokens: 500,
        temperature: 0.8, // Creative but not too random
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get response from OpenAI' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Determine if a badge should be awarded
    const badge = determineBadgeAward(message, aiResponse, history, userName);

    return NextResponse.json({
      message: aiResponse,
      badge: badge,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Smart badge awarding logic
function determineBadgeAward(userMessage: string, aiResponse: string, history: any[], userName: string): string | null {
  const messageCount = history.length;
  const lowerMessage = userMessage.toLowerCase();
  const lowerAiResponse = aiResponse.toLowerCase();

  // First correct answer or showing courage
  if (messageCount <= 6 && (
    lowerMessage.includes('1/4') ||
    lowerMessage.includes('quarter') ||
    (lowerMessage.includes('worried') || lowerMessage.includes('scared')) ||
    lowerAiResponse.includes('correct') || 
    lowerAiResponse.includes('right') ||
    lowerAiResponse.includes('exactly')
  )) {
    return 'Confidence Climber';
  }

  // Curiosity and exploration
  if (messageCount > 4 && messageCount <= 10 && (
    lowerMessage.includes('how') ||
    lowerMessage.includes('why') ||
    lowerMessage.includes('what if') ||
    lowerMessage.includes('?') ||
    lowerAiResponse.includes('curious') ||
    lowerAiResponse.includes('great question')
  )) {
    return 'Buccoo Reef Explorer';
  }

  // Mastery and advanced understanding
  if (messageCount > 8 && (
    lowerMessage.length > 50 || // Detailed responses
    lowerMessage.includes('because') ||
    lowerMessage.includes('so') ||
    lowerAiResponse.includes('brilliant') ||
    lowerAiResponse.includes('excellent') ||
    lowerAiResponse.includes('mastered')
  )) {
    return 'SEA Champion';
  }

  // Persistence through challenges
  if (messageCount > 6 && (
    lowerMessage.includes('try again') ||
    lowerMessage.includes('let me') ||
    lowerMessage.includes('i think') ||
    lowerAiResponse.includes('keep trying') ||
    lowerAiResponse.includes('don\'t give up') ||
    lowerAiResponse.includes('persistent')
  )) {
    return 'Pitch Lake Champion';
  }

  return null;
}
