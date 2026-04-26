"use client"

import { useState } from "react"
import { Rocket, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OnboardSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="onboard" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                    <Rocket className="w-4 h-4" />
                    Start Your 14-Day Free Trial
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
                    Get Your AI Sales Bot Live in 60 Seconds
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    No credit card required. Cancel anytime.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Acme Inc"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="https://acme.com"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-bold bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating Your Bot...
                      </>
                    ) : (
                      <>
                        Start Free Trial
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      No credit card
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      14-day free trial
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Cancel anytime
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {"You're In! 🎉"}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Check your email for next steps. Your AI sales bot is being created right now.
                </p>
                <p className="text-sm text-muted-foreground">
                  {"Didn't receive an email? Check your spam folder or contact support@botforge.ai"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
