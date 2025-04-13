import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MetaTrader() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Professional Platform
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-black">
              Fully Licensed MetaTrader 5 Platform
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Trade on your favourite trading platform with LTIP by trading directly on our live servers at London
              Trading Index! It was a priority to ensure our established relationship with metaquotes was continued into
              our proprietary offering.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">Learn More About MT5</Button>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-gray-200 group hover:border-primary/50 transition-all duration-300 hover-glow">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-transparent to-primary/10 z-10 group-hover:opacity-70 transition-opacity"></div>
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
              alt="MetaTrader 5 Platform"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
