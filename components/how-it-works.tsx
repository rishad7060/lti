import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const steps = [
  {
    number: 1,
    title: "Sign Up",
    description: "Register your account and create an LTIP profile",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: 2,
    title: "Verification (KYC)",
    description: "Complete KYC verification for account activation.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: 3,
    title: "Deposit",
    description: "Select your challenge account and make the necessary deposit into the account.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b2d44b?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: 4,
    title: "Credited",
    description:
      "We will now credit the remaining of your funded balance into your trading account where you can now look to start your LTIP challenge.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: 5,
    title: "Stage 1",
    description: "Achieve 10% whilst not breaking the drawdown rules to progress to Stage 2.",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: 6,
    title: "Stage 2",
    description: "Achieve 5% with the same drawdown rules to unlock your funded account.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: 7,
    title: "Trade and Earn",
    description: "Keep 75% of your profits, with payouts every 14 days and unlimited trading days.",
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?q=80&w=600&auto=format&fit=crop",
  },
]

export function HowItWorks() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="relative">
        {/* Connecting line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block"
          style={{ transform: "translateX(-50%)" }}
        ></div>

        <div className="space-y-16 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 flex justify-center">
                <Card className="bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 hover-glow w-full max-w-md group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>

                    <div className="mt-4 relative h-40 rounded-md overflow-hidden">
                      <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HowItWorks
