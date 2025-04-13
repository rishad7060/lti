import Hero from "@/components/hero"
import Features from "@/components/features"
import MetaTrader from "@/components/meta-trader"
import AccountSelector from "@/components/account-selector"
import WebTrader from "@/components/web-trader"
import HowItWorks from "@/components/how-it-works"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <MetaTrader />
      <AccountSelector />
      <WebTrader />
      <HowItWorks />
      <CallToAction />
    </div>
  )
}
