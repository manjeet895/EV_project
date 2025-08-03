"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  quickReplies?: string[]
  actions?: Array<{
    label: string
    action: string
    url?: string
  }>
}

const predefinedResponses = {
  greeting: {
    content:
      "Hi there! 👋 I'm your EV BUDDY assistant. Your friendly companion for all EV needs! How can I help you today?",
    quickReplies: ["Book my buddy", "Check buddy pricing", "Track my buddy", "Emergency help"],
  },
  book_service: {
    content: "I'd love to help you book your EV BUDDY! What type of buddy service do you need?",
    quickReplies: ["Emergency charging", "Scheduled buddy visits", "Battery health check", "See all buddy services"],
    actions: [{ label: "Book Your Buddy Now", action: "redirect", url: "/book" }],
  },
  emergency: {
    content:
      "🚨 Need your EV BUDDY urgently? No worries! Call us directly at +91 89555 88287. Your emergency buddy is available 24/7!",
    actions: [
      { label: "Call Emergency Buddy", action: "call", url: "tel:+918955588287" },
      { label: "WhatsApp Buddy", action: "redirect", url: "https://wa.me/918955588287" },
    ],
  },
  pricing: {
    content:
      "Here are your EV BUDDY service prices:\n\n⚡ Emergency Buddy Rush: ₹299\n🏠 Scheduled Buddy Visits: ₹199\n🔧 EV Health Check: ₹499\n🔋 Battery Buddy Care: ₹399\n\nBuddy-friendly pricing with no hidden fees!",
    quickReplies: ["Book emergency buddy", "Schedule regular buddy", "More details"],
  },
  track_order: {
    content:
      "To track your buddy, I'll need your booking ID. It should look like 'BK123ABC456'. Do you have it with you?",
    quickReplies: ["Yes, I have it", "No, I don't have it", "Help me find it"],
  },
  scheduled_charging: {
    content: "Great choice! Scheduled buddy visits can save you up to 30%. What type of location?",
    quickReplies: ["Home", "Office", "Housing Society"],
    actions: [{ label: "Get Custom Buddy Plan", action: "redirect", url: "/scheduled-charging/contact" }],
  },
  coverage: {
    content:
      "We cover all major areas in Jaipur! 🏰\n\n📍 Popular areas:\n• Malviya Nagar\n• Vaishali Nagar\n• C-Scheme\n• Mansarovar\n• Jagatpura\n• And 25+ more!\n\nWhere do you need your buddy?",
    quickReplies: ["Check my area", "See all areas", "Book now"],
  },
  default: {
    content:
      "I'm here to help with your EV needs! 🚗⚡ You can ask me about:\n\n• Booking services\n• Pricing information\n• Tracking orders\n• Emergency help\n• Service areas\n\nWhat would you like to know?",
    quickReplies: ["Book service", "Check pricing", "Emergency help", "Service areas"],
  },
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: predefinedResponses.greeting.content,
      sender: "bot",
      timestamp: new Date(),
      quickReplies: predefinedResponses.greeting.quickReplies,
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase()
    let response = predefinedResponses.default

    if (lowerMessage.includes("book") || lowerMessage.includes("buddy")) {
      response = predefinedResponses.book_service
    } else if (lowerMessage.includes("emergency") || lowerMessage.includes("urgent")) {
      response = predefinedResponses.emergency
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("pricing")) {
      response = predefinedResponses.pricing
    } else if (lowerMessage.includes("track") || lowerMessage.includes("order") || lowerMessage.includes("booking")) {
      response = predefinedResponses.track_order
    } else if (lowerMessage.includes("schedule") || lowerMessage.includes("regular")) {
      response = predefinedResponses.scheduled_charging
    } else if (
      lowerMessage.includes("area") ||
      lowerMessage.includes("location") ||
      lowerMessage.includes("coverage")
    ) {
      response = predefinedResponses.coverage
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      response = predefinedResponses.greeting
    }

    return {
      id: Date.now().toString(),
      text: response.content,
      sender: "bot",
      timestamp: new Date(),
      quickReplies: response.quickReplies,
      actions: response.actions,
    }
  }

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateResponse(message)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleAction = (action: { label: string; action: string; url?: string }) => {
    if (action.action === "redirect" && action.url) {
      window.open(action.url, "_blank")
    } else if (action.action === "call" && action.url) {
      window.location.href = action.url
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 hover:from-blue-600 hover:via-purple-600 hover:to-green-600 text-white shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110"
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
        </Button>
        {!isOpen && (
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] z-50">
          <Card className="h-full flex flex-col shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            {/* Chat Header */}
            <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">EV BUDDY Assistant</h3>
                    <p className="text-sm text-blue-100">Online • Ready to help!</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>

            {/* Chat Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                    <div
                      className={`p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-2">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>

                    {/* Quick Replies */}
                    {message.quickReplies && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.quickReplies.map((reply, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickReply(reply)}
                            className="text-xs bg-white hover:bg-blue-50 border-blue-200"
                          >
                            {reply}
                          </Button>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    {message.actions && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.actions.map((action, index) => (
                          <Button
                            key={index}
                            size="sm"
                            onClick={() => handleAction(action)}
                            className="text-xs bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                          >
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "order-1 ml-2" : "order-2 mr-2"}`}
                  >
                    {message.sender === "user" ? (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
