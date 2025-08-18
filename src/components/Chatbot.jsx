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
      let botText = "";

      switch (message.trim().toLowerCase()) {
        case "/help":
          botText =
            `Write /courses for course details.\n` +
            `Write /contact to get in touch with us.\n` +
            `Write /enquiry for the enquiry form.\n` +
            `Write /about for details about us.`;
          break;

        case "/courses":
          botText = `Click here to get Course details👉 [All Courses](/courses)`;
          break;

        case "/contact":
          botText = `📞 Phone: +919641592339\n📧 Email: bibaswanedu@gmail.com`;
          break;

        case "/enquiry":
          botText = `📝 Please fill out the enquiry form here: [Enquiry Form](/enquiry)`;
          break;

        case "/about":
          botText = `ℹ️ The Bibaswan Educational Foundation stands as a beacon of success, year after year. With unwavering dedication, it paves the path for countless aspirants to reach their dreams. Through its holistic approach to education, the institute molds minds, nurtures talents and guides individuals towards their destinations. Bibaswan's legacy of achievement continues to shine brightly, illuminating the futures of those who dare to dream.`;
          break;

        default:
          botText = `❓ Sorry, I didn’t understand that. Please type /help to see what I can do.`;
      }

      const botMessage = { text: botText, sender: "bot" };
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
            <p>
              <strong>How can I help you today?</strong>
            </p>
            <p className="subtext">
              (Need help choosing the right course or preparing for exams? I'm
              here!)
            </p>
            <ul className="chatbot-list">
              <li>✅ Get course recommendations</li>
              <li>✅ Find upcoming exams and deadlines</li>
              <li>✅ Check admission details</li>
              <li>
                ✅ Type <code>/help</code> to see all commands you can use
              </li>
            </ul>

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-msg-wrapper ${
                  msg.sender === "user" ? "user-wrap" : "bot-wrap"
                }`}
              >
                {msg.sender === "bot" && <div className="chatbot-icon">🤖</div>}
                <div
                  className={`chatbot-msg ${
                    msg.sender === "user" ? "user-msg" : "bot-msg"
                  }`}
                >
                  {msg.text.split("\n").map((line, i) => {
                    const match = line.match(/\[(.*?)\]\((.*?)\)/);
                    if (match) {
                      const [fullMatch, label, href] = match;
                      const parts = line.split(fullMatch);
                      return (
                        <p key={i}>
                          {parts[0]}
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {label}
                          </a>
                          {parts[1]}
                        </p>
                      );
                    }
                    return <p key={i}>{line}</p>;
                  })}
                </div>
                {msg.sender === "user" && (
                  <div className="chatbot-icon">🧑</div>
                )}
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
