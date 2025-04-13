import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WebTrader() {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -left-20 top-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-gray-200 group hover:border-primary/50 transition-all duration-300 hover-glow">
            <div className="absolute inset-0 bg-gradient-to-bl from-white/70 via-transparent to-primary/10 z-10 group-hover:opacity-70 transition-opacity"></div>
            <Image
              src="https://images.unsplash.com/photo-1642790551116-18e150f248e5?q=80&w=1200&auto=format&fit=crop"
              alt="Web Trader Platform"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Customizable Experience
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-black">
              Build Your Own <span className="text-primary">Trading Terminal!</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With LTIP's Web Trader, you have the power to custom-build your trading terminal, tailoring the layout and
              features to fit your unique trading style—ensuring a seamless and highly personalised trading experience.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Explore Web Trader <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
