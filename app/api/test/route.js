// app/api/test/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if API key exists
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'OPENAI_API_KEY not found in environment variables',
        hasKey: false 
      }, { status: 500 });
    }

    if (!apiKey.startsWith('sk-')) {
      return NextResponse.json({ 
        error: 'Invalid API key format',
        keyFormat: apiKey.substring(0, 10) + '...',
        hasKey: true 
      }, { status: 500 });
    }

    // Test simple OpenAI API call
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hello' }],
        max_tokens: 5,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ 
        error: `OpenAI API error: ${response.status} ${response.statusText}`,
        details: errorText,
        hasKey: true 
      }, { status: 500 });
    }

    const data = await response.json();
    
    return NextResponse.json({ 
      success: true, 
      message: 'API key works!',
      response: data.choices[0].message.content,
      hasKey: true 
    });

  } catch (error) {
    return NextResponse.json({ 
      error: error.message,
      stack: error.stack,
      hasKey: !!process.env.OPENAI_API_KEY 
    }, { status: 500 });
  }
}
