"use client"

import { Rocket, Play, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToOnboard = () => {
    document.getElementById("onboard")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/30">
              🚀 No-Code AI Sales Chatbots - Built with Voiceflow
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
              <span>AI Chatbots That</span>{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Book 3x More Leads
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-lg leading-relaxed">
              Deploy enterprise-grade sales chatbots in 60 seconds. Perfect B2B lead qualification, 
              meeting booking, and 24/7 sales automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToOnboard}
                size="lg"
                className="px-8 py-6 bg-white text-gray-900 font-bold text-lg rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-3"
              >
                <Rocket className="w-5 h-5" />
                <span>Start Free Trial - 14 Days</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 border-2 border-white/50 text-white font-semibold text-lg rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo (1:23)</span>
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span>Trusted by 1,200+ B2B teams</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>PayPal Secure Payments</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative z-10 w-full max-w-md mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🤖</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">BotForge Assistant</p>
                    <p className="text-xs text-gray-500">Online • Responds instantly</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                    <p className="text-gray-800 text-sm">
                      {"Hi! 👋 I'm here to help you book more leads. What's your biggest sales challenge right now?"}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-primary to-accent rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto">
                    <p className="text-white text-sm">
                      We need help qualifying leads faster
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                    <p className="text-gray-800 text-sm">
                      {"Perfect! Our AI can qualify leads 24/7 and book meetings automatically. Would you like to see a demo?"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 px-4 py-2 bg-gray-100 rounded-xl text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                    <span className="text-white">→</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-green-400 text-gray-900 px-4 py-2 rounded-tl-2xl font-bold text-sm z-20">
              +347% Lead Conversion
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
