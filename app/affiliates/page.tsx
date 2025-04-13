import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, DollarSign, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Affiliates() {
  return (
    <div className="container mx-auto py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-4">Affiliate Program</h1>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Join our affiliate program and earn commissions by referring traders to LTIP
        </p>

        <div className="relative h-64 rounded-lg overflow-hidden my-8">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1500&auto=format&fit=crop"
            alt="Affiliate Partnership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <p className="text-white text-xl font-medium p-6">Partner with us and grow together</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900 border border-white/10 hover:border-primary/50 transition-all duration-300 hover-glow group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <DollarSign className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-white">
                Competitive Commissions
              </h3>
              <p className="text-gray-300">Earn generous commissions for each successful referral</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-white/10 hover:border-primary/50 transition-all duration-300 hover-glow group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-white">
                Easy Referral System
              </h3>
              <p className="text-gray-300">Track your referrals and earnings with our intuitive dashboard</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-white/10 hover:border-primary/50 transition-all duration-300 hover-glow group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-white">
                Growth Opportunities
              </h3>
              <p className="text-gray-300">Increase your earnings as you refer more traders</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            More information about our affiliate program will be available soon. Register your interest now to be the
            first to know.
          </p>

          <Button className="bg-primary hover:bg-primary/90 text-white">
            Register Interest <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
