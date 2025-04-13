import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <div className="bg-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-black">
          Ready to Start Your <span className="text-primary">Trading Journey?</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Take the challenge and join LTIP today. Make your deposit, trade live markets, and earn a funded account with
          industry-leading conditions.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow animated-gradient">
          <Link href="/challenges">
            Take the Challenge – Join LTIP Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
