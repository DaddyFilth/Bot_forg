"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Bot } from "lucide-react"

const initialMessages = [
  {
    role: "bot" as const,
    content: "Hi! 👋 I'm the BotForge AI assistant. How can I help you today?",
  },
]

const quickReplies = [
  "Tell me about pricing",
  "How does it work?",
  "See a demo",
  "Talk to sales",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { role: "user" as const, content: input }])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      let response = "Thanks for your message! Our team will get back to you soon. In the meantime, feel free to explore our features or start a free trial."
      
      if (input.toLowerCase().includes("pricing")) {
        response = "We have 3 plans: Starter ($97/mo), Professional ($297/mo), and Enterprise ($797/mo). All include a 14-day free trial. Would you like me to help you choose the right plan?"
      } else if (input.toLowerCase().includes("demo")) {
        response = "Great choice! You can try our live demos in the Demos section above, or I can book you a personalized demo with our team. Which would you prefer?"
      } else if (input.toLowerCase().includes("work") || input.toLowerCase().includes("how")) {
        response = "BotForge AI lets you create AI sales chatbots in 60 seconds. Just connect your website, customize your bot, and start qualifying leads 24/7. No coding required!"
      }

      setMessages((prev) => [...prev, { role: "bot" as const, content: response }])
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    setInput(reply)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "user" as const, content: reply }])
      setInput("")

      setTimeout(() => {
        let response = "Thanks for your interest!"
        
        if (reply.includes("pricing")) {
          response = "We have 3 plans: Starter ($97/mo), Professional ($297/mo), and Enterprise ($797/mo). All include a 14-day free trial. Would you like me to help you choose the right plan?"
        } else if (reply.includes("demo")) {
          response = "Great choice! You can try our live demos in the Demos section above, or I can book you a personalized demo with our team. Which would you prefer?"
        } else if (reply.includes("work")) {
          response = "BotForge AI lets you create AI sales chatbots in 60 seconds. Just connect your website, customize your bot, and start qualifying leads 24/7. No coding required!"
        } else if (reply.includes("sales")) {
          response = "I'd be happy to connect you with our sales team! Please share your email and we'll reach out within 24 hours, or scroll down to start a free trial."
        }

        setMessages((prev) => [...prev, { role: "bot" as const, content: response }])
      }, 1000)
    }, 100)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-[10px] font-bold">1</span>
        </span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">BotForge Assistant</p>
              <p className="text-xs text-white/80">Online • Responds instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-primary to-accent text-white rounded-tr-none"
                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
