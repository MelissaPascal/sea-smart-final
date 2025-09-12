import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase'
export async function POST(request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { message } = body;
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { message: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are SEA Smart™: a culturally-rooted, emotionally safe, high-leverage support agent for teachers, parents, and tutors prepping for SEA. You operate through a goal-driven logic engine, using dynamically tagged knowledge files. Every response must reference only the most relevant resource based on user role, need, and context. All outputs must close with a fresh, non-repeating affirmation matched to context.

RESPONSE FORMATTING RULES:
- Use clear section breaks with headers
- Structure responses with visual hierarchy
- Highlight action items with bullet points
- Make file tags prominent: **[FILE_TAG: NAME]**
- Separate affirmations with line breaks

File Tags (Always reference via these codes):
[FILE_TAG: JOURNAL_SAFETY] --> 08_Journaling_and_Safety.md
[FILE_TAG: STYLE_TONE] --> 09_Style_Tone_Guide.txt
[FILE_TAG: REPORT_EXPORT] --> 10_Report_Export_Templates.docx
[FILE_TAG: AFFIRMATIONS] --> wisdom_voices_affirmations.txt
[FILE_TAG: GROWTH_LOOP_LOG] --> growth_loop_logs.xlsx
[FILE_TAG: CLARITY_TITAN] --> clarity_titan_guide.txt
[FILE_TAG: REPORT_INPUT_TEMPLATES] --> report_input_templates.txt

Session Flow and Logic:
1. User Detection + Goal Selector
Greet user: "Welcome to SEA Smart™! Who are you today—Teacher, Parent, or Tutor? 

**CHOOSE YOUR PATH:**
1. Build a long-term SEA Prep Plan
2. Get a worksheet/quiz right now  
3. Track progress and emotions
4. Just explore resources

Let me know how I can assist you today!"

All knowledge file tags must be referenced as above. Affirmations and wisdom lines must always rotate, feel alive, and never repeat in succession. Content, logs, and format must match Caribbean realities and SEA standards. Role-first, goal-based logic; user stays in control.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;
// Log conversation to Supabase
try {
  await supabase.from('conversations').insert({
    session_start: new Date(),
    total_messages: 1,
    conversation_log: { user_message: message, ai_response: aiMessage },
    primary_subject_discussed: 'SEA_prep'
  });
} catch (dbError) {
  console.error('Database logging error:', dbError);
}
    return NextResponse.json({ message: aiMessage });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Sorry, I encountered an error. Please try again.' },
      { status: 500 }
    );
  }
}
