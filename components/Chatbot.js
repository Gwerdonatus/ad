"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, MessageCircle } from "lucide-react";
import responses from "./chatbotResponses";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Hi — I’m Gwer Dev’s assistant. I help explain services, pricing, portfolio, and starting a project. What would you like to know?",
      suggestions: ["What services do you offer?", "How much do you charge?", "Show me your portfolio"],
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const messagesEndRef = useRef(null);

  // Service options used for the "services" list buttons
  const servicesOptions = [
    { label: "1) Landing Page / Portfolio Site", value: "1" },
    { label: "2) Business Website (multi-page)", value: "2" },
    { label: "3) E-commerce / Marketplace", value: "2" }, // maps to '2' response
    { label: "4) Vendor Booking / Booking Platform", value: "3" },
    { label: "5) Dashboards & Admin Panels", value: "4" },
    { label: "6) API Integrations (Paystack, WhatsApp, SMS, custom)", value: "7" },
    { label: "7) Custom Django Apps & Features", value: "11" },
  ];

  const getLastUserMessage = () => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].sender === "user") return messages[i].text;
    }
    return "";
  };

  // THEME: Only follow explicit site theme toggles by checking <html>.classList ('.dark')
  useEffect(() => {
    const doc = typeof document !== "undefined" ? document.documentElement : null;
    if (!doc) return;

    setIsDark(doc.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(doc.classList.contains("dark"));
    });
    observer.observe(doc, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Lookup in responses: returns string or object
  function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    for (const key in responses) {
      if (msg.includes(key)) {
        return responses[key];
      }
    }
    if (responses[userMessage]) return responses[userMessage];
    return responses["default"];
  }

  const handleSend = (text) => {
    if (!text || !text.trim()) return;

    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);
    setTimeout(() => {
      const resp = getBotResponse(text);

      let botMessage;
      if (typeof resp === "string") {
        botMessage = { sender: "bot", text: resp };
      } else if (resp && typeof resp === "object") {
        botMessage = { sender: "bot", text: resp.text, suggestions: resp.suggestions || [] };
      } else {
        botMessage = { sender: "bot", text: responses["default"] };
      }

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 700);
  };

  // CTA helpers
  const openWhatsApp = (message) => {
    const phone = "+2348116276112";
    const text = message || `Hi Donatus, I'm interested in your services. My question: ${getLastUserMessage() || "..."}`;
    const url = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const openEmailForInvoice = (projectName = "", amount = "") => {
    const to = "donatusgwer@gmail.com";
    const subject = `Invoice request${projectName ? ` — ${projectName}` : ""}`;
    const body = `Hi Donatus,\n\nI want an invoice to pay a deposit for my project.\n\nProject: ${projectName || "[describe project]"}\nAmount: ${amount || "[amount]"}\nContact / WhatsApp: ${getLastUserMessage() || ""}\n\nPlease send payment details.\n\nThanks.`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleGetQuote = () => handleSend("i want a quote");
  const handleBookDemo = () => {
    const prefill = `Hi Donatus, I'd like to book a demo. Preferred date/time: [your date/time]. My service interest: ${getLastUserMessage() || ""}`;
    openWhatsApp(prefill);
  };

  // Decide CTAs per bot message content
  const getCTAsForBotMessage = (msg) => {
    if (!msg || typeof msg.text !== "string") return [];
    const text = msg.text.toLowerCase();
    const suggestions = Array.isArray(msg.suggestions) ? msg.suggestions.map((s) => s.toString().toLowerCase()) : [];

    const ctas = [];

    if (text.includes("how does payment") || text.includes("how payments work") || suggestions.some((s) => s.includes("payment"))) {
      ctas.push({ key: "pay", label: "How do I pay?", onClick: () => handleSend("how do i pay") });
      ctas.push({ key: "invoice", label: "Get Invoice", onClick: () => openEmailForInvoice() });
    }

    if (suggestions.some((s) => s.includes("invoice") || s.includes("payment link") || s.includes("send invoice"))) {
      ctas.push({ key: "invoice2", label: "Get Invoice", onClick: () => openEmailForInvoice() });
      ctas.push({ key: "pay2", label: "Pay deposit", onClick: () => handleSend("how do i pay") });
    }

    if (text.includes("contact") || suggestions.some((s) => s.includes("contact"))) {
      ctas.push({
        key: "contact",
        label: "Contact via WhatsApp",
        onClick: () => openWhatsApp(`Hi Donatus, I'm contacting about: ${getLastUserMessage() || "a project inquiry"}`),
      });
      ctas.push({ key: "email", label: "Send email", onClick: () => openEmailForInvoice() });
    }

    if (text.includes("want a quote") || suggestions.some((s) => s.includes("i want a quote") || s.includes("get a quote"))) {
      ctas.push({ key: "quote", label: "Get Quote", onClick: handleGetQuote });
    }

    if (text.includes("booking") || suggestions.some((s) => s.includes("book"))) {
      ctas.push({ key: "book", label: "Book Demo / Setup", onClick: handleBookDemo });
    }

    if (text.includes("whatsapp") && text.includes("payment")) {
      ctas.push({
        key: "whatsapp-pay",
        label: "Send payment via WhatsApp",
        onClick: () =>
          openWhatsApp(`Hi Donatus, I'd like to pay via WhatsApp. My project: ${getLastUserMessage() || "[brief]"}. Please send payment link.`),
      });
    }

    if (ctas.length === 0) {
      ctas.push({
        key: "contact-fallback",
        label: "Contact Gwer",
        onClick: () => openWhatsApp(`Hi Donatus, I'm interested in your services. My question: ${getLastUserMessage() || "[brief]"}.`),
      });
    }

    // unique by key
    const unique = [];
    const seen = new Set();
    for (const c of ctas) {
      if (!seen.has(c.key)) {
        unique.push(c);
        seen.add(c.key);
      }
    }
    return unique;
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const cleanSuggestionLabel = (s) => s.replace(/^\s*\d+\)\s*/, "").trim();

  // Tailwind classes depend on isDark
  const panelBg = isDark ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-900";
  const botBubbleBg = isDark ? "bg-gray-900" : "bg-gray-100";
  const userBubbleBg = isDark ? "bg-blue-600 text-white" : "bg-brand text-white";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Floating bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          className={`p-4 rounded-full shadow-xl transition-transform ${isDark ? "bg-brand/95 text-white" : "bg-brand text-white"}`}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className={`flex flex-col w-80 rounded-2xl shadow-2xl overflow-hidden transition-all border ${panelBg}`}>
          {/* ---------- Styled header with curve (NEW) ---------- */}
          <div className="relative">
            {/* header content */}
            <div
              className={`rounded-t-2xl px-4 pt-4 pb-6 flex items-start justify-between gap-2 ${
                isDark ? "bg-gradient-to-r from-indigo-700 to-brand text-white" : "bg-gradient-to-r from-brand to-indigo-500 text-white"
              }`}
              style={{ overflow: "visible" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Chat with Gwer Dev</h3>
                  <p className="text-xs opacity-90">Gwer Dev’s assistant — ask about services, pricing, or quotes</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const resp = responses["suggest questions"];
                    if (resp && typeof resp === "object") {
                      setMessages((prev) => [...prev, { sender: "bot", text: resp.text, suggestions: resp.suggestions }]);
                    } else {
                      setMessages((prev) => [...prev, { sender: "bot", text: resp }]);
                    }
                  }}
                  title="Quick help"
                  className="text-white text-sm px-2 py-1 rounded hover:bg-white/10"
                >
                  ?
                </button>

                <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-white font-bold px-2 py-1 rounded">
                  ✕
                </button>
              </div>
            </div>

            {/* SVG curve that overlaps the header bottom to create the curved top effect */}
            <div className="-mt-1">
              <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-5 block">
                <path
                  d="M0 40 C 100 0 300 0 400 40 L400 40 L0 40 Z"
                  fill={isDark ? "#0f172a" : "#ffffff"}
                />
              </svg>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm max-h-96">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-start gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                {msg.sender === "bot" && (
                  <div className={`${botBubbleBg} p-2 rounded-lg flex flex-col gap-2 max-w-[85%]`}>
                    <div className="flex gap-2 items-start">
                      <Bot className={`w-4 h-4 ${isDark ? "text-brand" : "text-brand"}`} />
                      <div className="whitespace-pre-wrap text-sm">{msg.text}</div>
                    </div>

                    {/* show service buttons when assistant lists services (Chatbot.js logic checks for this substring) */}
                    {typeof msg.text === "string" && msg.text.toLowerCase().includes("services (pick one") && (
                      <div className="flex flex-col gap-2 mt-2">
                        {servicesOptions.map((opt) => (
                          <button
                            key={opt.value + opt.label}
                            onClick={() => handleSend(opt.value)}
                            className={`text-left ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border px-3 py-1 rounded-lg text-sm hover:shadow transition flex items-center justify-between`}
                          >
                            <span>{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* CTAs */}
                    {getCTAsForBotMessage(msg).length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {getCTAsForBotMessage(msg).map((cta) => (
                          <button key={cta.key} onClick={cta.onClick} className="bg-brand text-white text-xs px-3 py-1 rounded-lg hover:bg-brand/90 transition">
                            {cta.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* suggestion chips */}
                    {msg.suggestions && Array.isArray(msg.suggestions) && msg.suggestions.length > 0 && !isTyping && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {msg.suggestions.map((s, idx) => {
                          const label = cleanSuggestionLabel(s.toString());
                          return (
                            <button key={idx} onClick={() => handleSend(label)} className="bg-brand text-white text-xs px-2 py-1 rounded-lg hover:bg-brand/90 transition">
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {msg.sender === "user" && (
                  <div className={`${userBubbleBg} p-2 rounded-lg flex gap-2 max-w-[75%]`}>
                    <span className="text-sm">{msg.text}</span>
                    <User className="w-4 h-4 shrink-0" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start gap-2 justify-start">
                <div className={`${botBubbleBg} p-2 rounded-lg flex gap-2 max-w-[50%] animate-pulse`}>
                  <Bot className="w-4 h-4 text-brand shrink-0" />
                  <span>Typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`border-t p-2 flex items-center gap-2 ${isDark ? "border-gray-700" : "border-gray-200"}`}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Type your question..."
              className={`flex-1 px-3 py-2 rounded-lg ${isDark ? "bg-gray-700 text-gray-100 border-gray-600" : "bg-white text-gray-900 border-gray-300"} focus:ring-2 focus:ring-brand outline-none text-sm`}
              aria-label="Chat input"
            />
            <button onClick={() => handleSend(input)} aria-label="Send" className="bg-brand text-white p-2 rounded-lg hover:bg-brand/90 transition">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
