import { Card, CardContent } from "@/components/ui/card"
import { Server, BarChart3, FileText, Calendar, Zap, History } from "lucide-react"

const features = [
  {
    name: "Live Trading Servers",
    description: "All challenges conducted on live servers for an authentic trading experience.",
    icon: Server,
  },
  {
    name: "Trade on MT5",
    description: "Trade on the market leading trading platform at LTIP.",
    icon: BarChart3,
  },
  {
    name: "Transparent Rules",
    description: "Simple and clear parameters to succeed.",
    icon: FileText,
  },
  {
    name: "Established Since 2019",
    description: "Trust a broker with years of proven market expertise.",
    icon: Calendar,
  },
  {
    name: "Unique Approach",
    description: "Experience a never seen before approach to the proprietary market.",
    icon: Zap,
  },
  {
    name: "Unlimited Trading Days",
    description: "Take your time to achieve your targets without pressure.",
    icon: History,
  },
]

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Key Features</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Experience the LTIP difference with our industry-leading features
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2">
            {features.map((feature) => (
              <Card
                key={feature.name}
                className="bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-black group-hover:text-primary transition-colors">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
