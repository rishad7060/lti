import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,59,1,0.1),transparent_50%)]"></div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 -z-20 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
          alt="Trading background"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-[10%] w-20 h-20 rounded-full bg-primary/10 animate-float"></div>
      <div
        className="absolute bottom-1/4 left-[10%] w-16 h-16 rounded-full bg-primary/10 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:py-48 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-black">
            The <span className="text-primary">Hybrid Solution</span> For Prop Traders
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-10">
            Make your deposit, trade live markets, and earn a funded account with industry-leading conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/challenges">
                Start Your Challenge Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:text-primary hover:bg-primary/10"
            >
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </div>
  )
}
