import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: portfolioData.chatAssistant.welcomeMessage }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [topicCounts, setTopicCounts] = useState({});
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text, forcedTopic = null) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: 'user', text }];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let foundTopic = forcedTopic;

      // Intent detection: if asking 'how', 'why', or 'explain', prioritize matching a topic
      const isProbing = lowerText.includes('how') || lowerText.includes('why') || lowerText.includes('explain');

      if (!foundTopic) {
        for (const suggestion of portfolioData.chatAssistant.suggestions) {
          if (suggestion.keywords.some(key => lowerText.includes(key))) {
            foundTopic = suggestion.topic;
            break;
          }
        }
      }

      // If probing but no specific topic found, default to 'ekalgo' (flagship) instead of fallback
      if (isProbing && !foundTopic) {
        foundTopic = 'ekalgo';
      }

      if (foundTopic && portfolioData.chatAssistant.responses[foundTopic]) {
        const count = topicCounts[foundTopic] || 0;
        const responseArray = portfolioData.chatAssistant.responses[foundTopic];
        
        // Cycle through levels 0, 1, 2. If it exceeds 2, stay at the most detailed/insightful level (2)
        const level = Math.min(count, responseArray.length - 1);
        
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: responseArray[level] 
        }]);

        setTopicCounts(prev => ({ ...prev, [foundTopic]: count + 1 }));
      } else {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: portfolioData.chatAssistant.responses.fallback 
        }]);
      }
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-white border border-border-light p-4 rounded-full shadow-lg hover:shadow-xl hover:border-primary transition-all duration-300 animate-fade-in"
        >
          <div className="bg-primary text-white p-2 rounded-full group-hover:scale-110 transition-transform">
            <MessageSquare size={20} />
          </div>
          <span className="text-sm font-medium text-text-primary pr-2">
            Ask me about my projects — I'll keep it short, or go deep.
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] md:w-[420px] h-[550px] bg-white border border-border-light rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold">Rohit's Assistant</div>
                <div className="text-[10px] opacity-80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online & Responsive
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Message List */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-5 bg-cream/30"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none shadow-md' 
                    : 'bg-white border border-border-light text-text-secondary rounded-tl-none shadow-sm font-light'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-border-light p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1 h-1 bg-text-muted rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-text-muted rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1 h-1 bg-text-muted rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions & Input */}
          <div className="p-4 border-t border-border-light bg-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {portfolioData.chatAssistant.suggestions.map(s => (
                <button
                  key={s.id}
                  onClick={() => handleSend(s.question, s.topic)}
                  className="text-[10px] bg-secondary text-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all font-medium border border-primary/10 tracking-tight"
                >
                  {s.question}
                </button>
              ))}
            </div>
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-grow text-sm bg-bg-base border border-border-light rounded-full px-5 py-2.5 focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-primary text-white p-2.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-hover transition-colors shadow-sm"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
