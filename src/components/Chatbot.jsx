import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);

  const messageEndRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = () => {
    if (message.trim() === "") return;

    const userMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setBotTyping(true);

    setTimeout(() => {
      const botMessage = {
        text: "Thanks for your message! I'm still learning and will be able to help you soon. Stay tuned! 🤖",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
      setBotTyping(false);
    }, 1000);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping]);

  return (
    <>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>🤖 AI Assistant</span>
            <button className="chatbot-close" onClick={toggleChatbot}>
              ×
            </button>
          </div>

          <div className="chatbot-body">
            <p><strong>How can I help you today?</strong></p>
            <p className="subtext">
              (Need help choosing the right course or preparing for exams? I'm here!)
            </p>
            <ul className="chatbot-list">
              <li>✅ Get course recommendations</li>
              <li>✅ Find upcoming exams and deadlines</li>
              <li>✅ Check admission details</li>
            </ul>

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-msg-wrapper ${msg.sender === "user" ? "user-wrap" : "bot-wrap"}`}
              >
                {msg.sender === "bot" && <div className="chatbot-icon">🤖</div>}
                <div className={`chatbot-msg ${msg.sender === "user" ? "user-msg" : "bot-msg"}`}>
                  {msg.text}
                </div>
                {msg.sender === "user" && <div className="chatbot-icon">🧑</div>}
              </div>
            ))}

            {botTyping && (
              <div className="chatbot-msg-wrapper bot-wrap">
                <div className="chatbot-icon">🤖</div>
                <div className="chatbot-msg bot-msg typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}

            <div ref={messageEndRef} />
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      <button className="chatbot-toggle" onClick={toggleChatbot}>
        💬
      </button>
    </>
  );
};

export default Chatbot;
