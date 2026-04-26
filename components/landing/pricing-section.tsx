"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: 97,
    description: "Perfect for small businesses getting started",
    features: [
      "1 AI Sales Chatbot",
      "Up to 1,000 conversations/mo",
      "Basic lead qualification",
      "Email notifications",
      "Calendly integration",
      "Email support",
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: 297,
    description: "For growing teams that need more power",
    features: [
      "3 AI Sales Chatbots",
      "Up to 5,000 conversations/mo",
      "Advanced lead scoring",
      "CRM integrations (HubSpot, Salesforce)",
      "Custom branding",
      "A/B testing",
      "Priority support",
      "Analytics dashboard",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: 797,
    description: "For large organizations with custom needs",
    features: [
      "Unlimited AI Chatbots",
      "Unlimited conversations",
      "White-label solution",
      "Custom AI training",
      "API access",
      "Dedicated account manager",
      "SLA guarantee",
      "SOC2 & HIPAA compliance",
      "Custom integrations",
    ],
    popular: false,
    cta: "Contact Sales",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-primary to-accent text-white shadow-2xl scale-105 z-10"
                  : "bg-white border border-gray-200 shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    ${plan.price}
                  </span>
                  <span className={plan.popular ? "text-white/80" : "text-muted-foreground"}>/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-green-300" : "text-green-500"}`} />
                    <span className={plan.popular ? "text-white/90" : "text-gray-700"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-6 text-lg font-semibold rounded-xl transition-all ${
                  plan.popular
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All plans include: SSL encryption, 99.9% uptime guarantee, and GDPR compliance
          </p>
        </div>
      </div>
    </section>
  )
}
