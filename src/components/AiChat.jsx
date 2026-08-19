import { useEffect, useRef, useState } from "react";

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello and welcome to Waje Hotel ✦",
    },
    {
      id: 2,
      sender: "ai",
      text: "I'm your AI Concierge. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const getAIResponse = (message) => {
    const text = message.toLowerCase();

    if (
      text.includes("room") ||
      text.includes("rooms") ||
      text.includes("stay")
    ) {
      return "I'd be happy to help you find the right room. Are you looking for something luxurious, quiet, spacious, or budget-friendly?";
    }

    if (
      text.includes("book") ||
      text.includes("booking") ||
      text.includes("reserve")
    ) {
      return "Absolutely. I can help you plan your booking. You can tell me your preferred check-in date, check-out date, and number of guests.";
    }

    if (
      text.includes("price") ||
      text.includes("cost") ||
      text.includes("rate")
    ) {
      return "I can help you find the right room and rate. Tell me your preferred dates and how many guests will be staying.";
    }

    if (
      text.includes("location") ||
      text.includes("where") ||
      text.includes("address")
    ) {
      return "I'd be happy to help with directions and information about Waje Hotel's location.";
    }

    if (
      text.includes("amenities") ||
      text.includes("facilities") ||
      text.includes("wifi")
    ) {
      return "Waje Hotel offers a comfortable stay with thoughtful amenities designed to make your visit easy and relaxing.";
    }

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hello! ✦ It's lovely to have you here. How can I help you with your stay?";
    }

    return "I'd be happy to help with that. You can ask me about rooms, bookings, prices, amenities, or planning your stay.";
  };

  const handleSend = () => {
    const trimmedMessage = input.trim();

    if (!trimmedMessage || isTyping) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedMessage,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(trimmedMessage);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: response,
        },
      ]);

      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <style>{`
        .ai-floating-button {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 9998;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px 12px 13px;
          border: 1px solid var(--accent);
          border-radius: 999px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.20);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .ai-floating-button:hover {
          transform: translateY(-3px);
          background: var(--accent);
          color: #ffffff;
          box-shadow: 0 14px 40px rgba(201, 168, 76, 0.30);
        }

        .ai-floating-icon {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--accent);
          color: #ffffff;
          font-size: 17px;
        }

        .ai-chat-window {
          position: fixed;
          right: 28px;
          bottom: 90px;
          z-index: 9999;
          width: 380px;
          max-width: calc(100vw - 32px);
          height: 540px;
          max-height: calc(100vh - 120px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.30);
          animation: aiChatOpen 0.25s ease;
        }

        @keyframes aiChatOpen {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .ai-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px;
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .ai-chat-header-left {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .ai-chat-avatar {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--accent);
          color: #ffffff;
          font-size: 18px;
        }

        .ai-chat-name {
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 600;
        }

        .ai-chat-status {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 3px;
          color: var(--text-secondary);
          font-size: 10px;
        }

        .ai-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4caf50;
        }

        .ai-chat-close {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 18px;
          transition: all 0.2s ease;
        }

        .ai-chat-close:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .ai-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 18px;
          background: var(--bg-primary);
        }

        .ai-message-row {
          display: flex;
          margin-bottom: 12px;
        }

        .ai-message-row.user {
          justify-content: flex-end;
        }

        .ai-message {
          max-width: 82%;
          padding: 11px 13px;
          border-radius: 12px;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          font-size: 12px;
          line-height: 1.65;
        }

        .ai-message-row.user .ai-message {
          color: var(--text-primary);
          background: var(--hover-bg);
          border-color: transparent;
        }

        .ai-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          width: fit-content;
          padding: 11px 13px;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          background: var(--bg-secondary);
        }

        .ai-typing span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--text-secondary);
          animation: aiTyping 1.2s infinite ease-in-out;
        }

        .ai-typing span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .ai-typing span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes aiTyping {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }

          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }

        .ai-chat-input-area {
          display: flex;
          gap: 8px;
          padding: 13px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .ai-chat-input {
          flex: 1;
          min-width: 0;
          padding: 11px 13px;
          border: 1px solid var(--border-color);
          border-radius: 9px;
          outline: none;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 12px;
          font-family: inherit;
        }

        .ai-chat-input:focus {
          border-color: var(--accent);
        }

        .ai-chat-input::placeholder {
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .ai-send-button {
          width: 42px;
          flex-shrink: 0;
          border: 1px solid var(--accent);
          border-radius: 9px;
          background: var(--accent);
          color: #ffffff;
          cursor: pointer;
          font-size: 17px;
          transition: all 0.2s ease;
        }

        .ai-send-button:hover {
          background: var(--accent-hover);
        }

        .ai-send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 600px) {
          .ai-floating-button {
            right: 16px;
            bottom: 18px;
            padding: 10px 14px 10px 10px;
          }

          .ai-floating-button span:last-child {
            font-size: 12px;
          }

          .ai-floating-icon {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }

          .ai-chat-window {
            right: 12px;
            bottom: 75px;
            width: calc(100vw - 24px);
            height: min(560px, calc(100vh - 100px));
            max-height: none;
            border-radius: 16px;
          }
        }
      `}</style>

      {/* CHAT WINDOW */}

      {isOpen && (
        <div className="ai-chat-window">
          {/* HEADER */}

          <div className="ai-chat-header">
            <div className="ai-chat-header-left">
              <div className="ai-chat-avatar">✦</div>

              <div>
                <div className="ai-chat-name">
                  Waje AI Concierge
                </div>

                <div className="ai-chat-status">
                  <span className="ai-status-dot" />
                  Ready to assist
                </div>
              </div>
            </div>

            <button
              className="ai-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Concierge"
            >
              ×
            </button>
          </div>

          {/* MESSAGES */}

          <div className="ai-chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`ai-message-row ${message.sender}`}
              >
                <div className="ai-message">
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ai-message-row ai">
                <div className="ai-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}

          <div className="ai-chat-input-area">
            <input
              className="ai-chat-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              disabled={isTyping}
            />

            <button
              className="ai-send-button"
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* FLOATING CTA */}

      {!isOpen && (
        <button
          className="ai-floating-button"
          onClick={() => setIsOpen(true)}
        >
          <span className="ai-floating-icon">✦</span>

          <span>Ask AI Concierge</span>
        </button>
      )}
    </>
  );
};

export default AIChat;