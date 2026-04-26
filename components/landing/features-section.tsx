import { Zap, CalendarCheck, Brain, TrendingUp, Shield, Headphones } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "60-Second Setup",
    description: "Connect your site, customize your bot, go live. No coding required.",
    gradient: "from-blue-500 to-primary",
    bg: "from-white to-blue-50",
  },
  {
    icon: CalendarCheck,
    title: "Auto Booking",
    description: "Qualifies leads + books meetings directly in Calendly, HubSpot, or your CRM.",
    gradient: "from-green-500 to-emerald-600",
    bg: "from-white to-green-50",
  },
  {
    icon: Brain,
    title: "AI Powered",
    description: "Voiceflow + GPT-4o trained on your ICP. Handles objections automatically.",
    gradient: "from-primary to-accent",
    bg: "from-white to-purple-50",
  },
  {
    icon: TrendingUp,
    title: "3x ROI",
    description: "Clients see 200-400% increase in qualified leads within first month.",
    gradient: "from-orange-500 to-red-600",
    bg: "from-white to-orange-50",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC2, GDPR, HIPAA compliant. Your data stays yours forever.",
    gradient: "from-indigo-500 to-blue-600",
    bg: "from-white to-indigo-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Unlimited support + custom bot deployment. We handle everything.",
    gradient: "from-accent to-rose-600",
    bg: "from-white to-pink-50",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6 text-balance">
            Everything You Need to Close More Deals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No developers. No integrations. Just plug & play AI sales automation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100 bg-gradient-to-br ${feature.bg}`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
