"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, FileText, Users, BarChart2, CreditCard, DollarSign } from "lucide-react"

const categories = [
  {
    id: "getting-started",
    name: "Getting started",
    icon: HelpCircle,
    color: "text-primary",
  },
  {
    id: "general-questions",
    name: "General questions",
    icon: FileText,
    color: "text-primary",
  },
  {
    id: "about-us",
    name: "About us",
    icon: Users,
    color: "text-primary",
  },
  {
    id: "risk-management",
    name: "Risk management",
    icon: BarChart2,
    color: "text-primary",
  },
  {
    id: "payments",
    name: "Payments",
    icon: CreditCard,
    color: "text-primary",
  },
  {
    id: "payouts",
    name: "Payouts",
    icon: DollarSign,
    color: "text-primary",
  },
]

export function FaqCategories({ onCategoryChange }: { onCategoryChange: (category: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("getting-started")

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange(categoryId)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
      {categories.map((category) => (
        <Card
          key={category.id}
          className={`cursor-pointer transition-all hover-glow ${
            activeCategory === category.id
              ? "bg-white border-primary glow"
              : "bg-white border-gray-200 hover:border-primary/50"
          }`}
          onClick={() => handleCategoryClick(category.id)}
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <category.icon className={`h-8 w-8 mb-2 ${category.color}`} />
            <h3 className="font-medium text-black">{category.name}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
