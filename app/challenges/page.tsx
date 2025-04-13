import AccountSelector from "@/components/account-selector"
import { Button } from "@/components/ui/button"

export default function Challenges() {
  return (
    <div className="container mx-auto py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-4">LTIP Challenges</h1>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Make your deposit, trade live markets, and earn a funded account with industry-leading conditions.
        </p>

        <AccountSelector />
        
      </div>
    </div>
  )
}
