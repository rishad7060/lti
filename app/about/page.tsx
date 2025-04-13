import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-4">About LTI</h1>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground mb-4">
              At LTI, we pride ourselves on being a broker-first and prop-second institution. Established in 2019, we
              began as a trusted CFD broker, focusing on empowering traders with robust tools and exceptional support.
              In 2025, we expanded our offerings by launching our proprietary trading arm, combining years of expertise
              with a fresh perspective on the trading landscape.
            </p>

            <div className="relative h-64 rounded-lg overflow-hidden my-6">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                alt="Trading Journey"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">A New Approach to Prop Trading</h2>
            <p className="text-muted-foreground mb-4">
              We didn't want to bring just another prop model into the industry. Over the past 18 months, our team
              worked tirelessly to develop a hybrid model that redefines the customer experience.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Introducing a depositing system into the trading account where LTIP will credit the remaining balance.",
                "Requiring KYC prior to onboarding, ensuring a smooth and secure process.",
                "Offering the ability to fully customise trading terminals, giving traders the flexibility they need.",
                "Leveraging our reputation as an established broker to provide a seamless and trustworthy trading environment within our Web Trader or MetaTrader 5.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Global Presence</h2>
            <p className="text-muted-foreground mb-8">
              Our operations are supported by a highly skilled team based in London, Dubai, and Limassol, ensuring that
              we deliver local expertise with a global reach.
            </p>

            <div className="relative h-64 rounded-lg overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200&auto=format&fit=crop"
                alt="Global Presence"
                fill
                className="object-cover"
              />
            </div>

            <Card className="bg-gray-900 border border-white/10 hover:border-primary/50 transition-all duration-300 hover-glow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-white">Why LTI?</h3>
                <p className="text-gray-300 mb-6">
                  By combining our solid foundation as a broker with an innovative approach to prop trading, we offer a
                  unique opportunity for traders looking to grow with a company that values experience, transparency,
                  and innovation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-300">
                      Unlimited Trading Days: No pressure—achieve your targets at your own pace.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Transparent Payouts: Receive profits every 14 days, with no delays.</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-primary hover:bg-primary/90 text-white">Start Your Challenge Today</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
