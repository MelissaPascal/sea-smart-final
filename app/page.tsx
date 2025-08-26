// Enhanced message rendering function to add to your page.tsx
const formatMessage = (text: string) => {
  return text
    // Bold headers that start with ** and end with **
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-900 font-semibold">$1</strong>')
    // File tags in colored badges
    .replace(/\[FILE_TAG: ([^\]]+)\]/g, '<span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mx-1">[FILE_TAG: $1]</span>')
    // Bullet points with better spacing
    .replace(/^- (.*$)/gm, '<div class="ml-4 mb-1">• $1</div>')
    // Numbered lists
    .replace(/^(\d+)\. (.*$)/gm, '<div class="ml-4 mb-2"><span class="font-semibold text-blue-600">$1.</span> $2</div>')
    // Line breaks for better spacing
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
};

// Update your message display in the JSX:
{messages.map((message, index) => (
  <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
      message.sender === 'user' 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-100 text-gray-800 border border-gray-200'
    }`}>
      {message.sender === 'ai' ? (
        <div 
          className="whitespace-pre-wrap leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: formatMessage(message.text) 
          }}
        />
      ) : (
        <div className="whitespace-pre-wrap">{message.text}</div>
      )}
    </div>
  </div>
))}
