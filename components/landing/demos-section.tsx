"use client"

import { useState } from "react"
import { Cloud, Briefcase, UserCircle, ShoppingCart, Building, Sparkles, PlayCircle, X } from "lucide-react"

const demos = [
  {
    icon: Cloud,
    title: "SaaS",
    description: "Demo: B2B SaaS lead qualification + Calendly booking",
    gradient: "from-primary to-blue-500",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    description: "Demo: Service discovery + project scoping",
    gradient: "from-accent to-orange-500",
  },
  {
    icon: UserCircle,
    title: "Consulting",
    description: "Demo: High-ticket qualification + ROI calculator",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Demo: Cart recovery + upsell automation",
    gradient: "from-red-500 to-accent",
  },
  {
    icon: Building,
    title: "Enterprise",
    description: "Demo: Account-based selling + RFP handling",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "Custom",
    description: "Build your own custom sales bot for any industry",
    gradient: "from-gray-500 to-gray-700",
  },
]

export function DemosSection() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  return (
    <section id="demos" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6 text-balance">
            Live Demos - Try Before You Buy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click any demo to test our AI chatbots in real-time. Built for your industry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <div
              key={demo.title}
              onClick={() => setActiveDemo(demo.title)}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${demo.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
              >
                <demo.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{demo.title}</h3>
              <p className="text-muted-foreground text-center mb-6">{demo.description}</p>
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <PlayCircle className="w-5 h-5" />
                <span>Live Demo</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      {activeDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{activeDemo} Demo</h3>
              <button
                onClick={() => setActiveDemo(null)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🤖</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {activeDemo} Sales Bot Demo
                </h4>
                <p className="text-muted-foreground mb-6">
                  Experience our AI-powered sales chatbot designed specifically for {activeDemo.toLowerCase()} businesses.
                </p>
                <div className="bg-white rounded-xl p-4 shadow-lg text-left space-y-3">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                    <p className="text-gray-800 text-sm">
                      {"Hi! I'm your "}{activeDemo}{" sales assistant. How can I help you today?"}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    This is a preview. Full demo available after sign up.
                  </p>
                </div>
                <button
                  onClick={() => setActiveDemo(null)}
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Start Free Trial to Access Full Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
