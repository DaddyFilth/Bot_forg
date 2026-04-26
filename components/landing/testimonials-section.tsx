import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Sales, TechFlow SaaS",
    content:
      "BotForge AI increased our qualified leads by 340% in the first month. The bot handles objections better than most of our SDRs!",
    rating: 5,
    avatar: "SC",
    metric: "+340% leads",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, GrowthAgency",
    content:
      "We went from 20 manual discovery calls to 60+ automated qualifications per week. Game changer for our agency.",
    rating: 5,
    avatar: "MJ",
    metric: "3x productivity",
  },
  {
    name: "Emily Rodriguez",
    role: "CMO, ConsultPro",
    content:
      "The ROI calculator bot alone closed $150k in consulting contracts. Worth every penny of the Professional plan.",
    rating: 5,
    avatar: "ER",
    metric: "$150k closed",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Trusted by 1,200+ B2B Teams
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our customers are saying about their results
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-white font-bold text-xl">TechFlow</div>
          <div className="text-white font-bold text-xl">GrowthAgency</div>
          <div className="text-white font-bold text-xl">ConsultPro</div>
          <div className="text-white font-bold text-xl">ScaleUp Inc</div>
          <div className="text-white font-bold text-xl">CloudFirst</div>
        </div>
      </div>
    </section>
  )
}
