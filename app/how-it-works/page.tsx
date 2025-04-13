import { HowItWorks } from "@/components/how-it-works"
import { Button } from "@/components/ui/button"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-4">How It Works</h1>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Our unique model comes with 7 steps for every trader
        </p>

        <HowItWorks />

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 glow">
            Start Your Challenge Today
          </Button>
        </div>
      </div>
    </div>
  )
}
