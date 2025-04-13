"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const accountSizes = [
  { id: "10k", label: "$10k", value: 10000 },
  { id: "25k", label: "$25k", value: 25000 },
  { id: "50k", label: "$50k", value: 50000 },
  { id: "100k", label: "$100k", value: 100000 },
]

export default function AccountSelector() {
  const [selectedAccount, setSelectedAccount] = useState(accountSizes[0])

  const calculatePercentage = (percentage: number) => {
    return ((selectedAccount.value * percentage) / 100).toFixed(0)
  }

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Choose Your Account Size</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Select the account size that best fits your trading strategy and goals
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {accountSizes.map((account) => (
            <Button
              key={account.id}
              variant={selectedAccount.id === account.id ? "default" : "outline"}
              className={
                selectedAccount.id === account.id
                  ? "bg-primary hover:bg-primary/90 text-white font-medium min-w-[80px]"
                  : "border-gray-300 hover:border-primary hover:text-primary text-black font-medium min-w-[80px]"
              }
              onClick={() => setSelectedAccount(account)}
            >
              {account.label}
            </Button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left bg-white text-black"></th>
                  <th className="py-4 px-6 text-center bg-gray-50 border-b border-gray-200 text-primary font-bold">
                    Phase 1
                  </th>
                  <th className="py-4 px-6 text-center bg-gray-50 border-b border-gray-200 text-primary font-bold">
                    Phase 2
                  </th>
                  <th className="py-4 px-6 text-center bg-gray-50 border-b border-gray-200 text-primary font-bold">
                    LTIP Trader
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 font-medium border-b border-gray-200 text-black">Profit Target</td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">10%</span> (${calculatePercentage(10)})
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">5%</span> (${calculatePercentage(5)})
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <X className="h-5 w-5 mx-auto text-gray-400" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium border-b border-gray-200 text-black">Minimum Trading Days</td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">5</span> Days
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">5</span> Days
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <X className="h-5 w-5 mx-auto text-gray-400" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium border-b border-gray-200 text-black">Time</td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">Unlimited</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">Unlimited</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">Unlimited</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium border-b border-gray-200 text-black">Daily Loss</td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">5%</span> (${calculatePercentage(5)})
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">5%</span> (${calculatePercentage(5)})
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">5%</span> (${calculatePercentage(5)})
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium border-b border-gray-200 text-black">Max Loss</td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">10%</span> (${calculatePercentage(10)})
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">10%</span> (${calculatePercentage(10)})
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">10%</span> (${calculatePercentage(10)})
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium border-b border-gray-200 text-black">Drawdown Type</td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">Balance Based</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">Balance Based</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">Balance Based</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium border-b border-gray-200 text-black">Profit Split</td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <X className="h-5 w-5 mx-auto text-gray-400" />
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <X className="h-5 w-5 mx-auto text-gray-400" />
                  </td>
                  <td className="py-4 px-6 text-center bg-white border-b border-gray-200">
                    <span className="text-primary font-bold">75/25</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-black">Payout Cycle</td>
                  <td className="py-4 px-6 text-center bg-white">
                    <X className="h-5 w-5 mx-auto text-gray-400" />
                  </td>
                  <td className="py-4 px-6 text-center bg-white">
                    <X className="h-5 w-5 mx-auto text-gray-400" />
                  </td>
                  <td className="py-4 px-6 text-center bg-white">
                    <span className="text-primary font-bold">Every 14 days</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
            Start Your Challenge Today
          </Button>
        </div>
      </div>
    </div>
  )
}
