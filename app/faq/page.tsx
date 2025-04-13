"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight, HelpCircle, FileText, Users, BarChart2, CreditCard, DollarSign } from "lucide-react"

// FAQ categories with their questions
const faqCategories = [
  {
    id: "getting-started",
    name: "Getting started",
    icon: HelpCircle,
    color: "text-primary",
    questions: [
      {
        id: "how-do-i-buy-an-account",
        question: "How do I buy an account?",
      },
      {
        id: "what-are-the-steps-after-an-account-purchase",
        question: "What are the steps after an account purchase?",
      },
      {
        id: "where-can-i-find-my-account-information",
        question: "Where can I find my account information?",
      },
      {
        id: "when-do-i-get-access-to-my-account",
        question: "When do I get access to my account?",
      },
      {
        id: "how-do-i-access-my-account",
        question: "How do I access my account?",
      },
    ],
  },
  {
    id: "general-questions",
    name: "General questions",
    icon: FileText,
    color: "text-primary",
    questions: [
      {
        id: "what-platforms-do-you-support",
        question: "What platforms do you support?",
      },
      {
        id: "can-i-trade-news",
        question: "Can I trade news?",
      },
      {
        id: "what-size-account-can-i-trade-with",
        question: "What size account can I trade with?",
      },
      {
        id: "do-i-trade-on-live-or-demo-servers",
        question: "Do I trade on live or demo servers?",
      },
      {
        id: "are-there-any-free-cfd-prop-firms",
        question: "Are there any free CFD prop firms?",
      },
    ],
  },
  {
    id: "about-us",
    name: "About us",
    icon: Users,
    color: "text-primary",
    questions: [
      {
        id: "who-can-join-the-ltip-programme",
        question: "Who can join the LTIP programme?",
      },
      {
        id: "which-broker-do-you-use",
        question: "Which broker do you use?",
      },
    ],
  },
  {
    id: "risk-management",
    name: "Risk management",
    icon: BarChart2,
    color: "text-primary",
    questions: [
      {
        id: "is-automated-trading-allowed",
        question: "Is automated trading allowed?",
      },
    ],
  },
  {
    id: "payments",
    name: "Payments",
    icon: CreditCard,
    color: "text-primary",
    questions: [
      {
        id: "do-i-receive-my-deposit-back",
        question: "Do I receive my deposit back?",
      },
    ],
  },
  {
    id: "payouts",
    name: "Payouts",
    icon: DollarSign,
    color: "text-primary",
    questions: [
      {
        id: "how-does-the-payout-work",
        question: "How does the payout work?",
      },
      {
        id: "do-i-pay-tax-on-my-trading-profits",
        question: "Do I pay tax on my trading profits?",
      },
      {
        id: "how-do-i-get-paid-as-a-trader",
        question: "How do I get paid as a trader?",
      },
    ],
  },
]

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  // Filter categories and questions based on search query
  const filteredCategories = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter((q) => q.question.toLowerCase().includes(searchQuery.toLowerCase())),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories

  const handleCategoryClick = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  return (
    <div className="container mx-auto py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-black">Frequently Asked Questions</h1>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="text-xl text-center text-gray-600 mb-12">
          Find answers to common questions about London Trading Index
        </p>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Ask a question"
              className="pl-10 bg-white border-gray-300 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories grid */}
        {!searchQuery && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {faqCategories.map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all hover-glow ${
                  expandedCategory === category.id
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
        )}

        {/* Questions list */}
        <div className="space-y-6">
          {(searchQuery
            ? filteredCategories
            : expandedCategory
              ? faqCategories.filter((c) => c.id === expandedCategory)
              : []
          ).map((category) => (
            <div key={category.id} className="mb-8">
              {searchQuery && <h2 className="text-xl font-semibold mb-4 text-black">{category.name}</h2>}
              <Card className="border-gray-200">
                <div className="divide-y divide-gray-200">
                  {category.questions.map((question) => (
                    <Link
                      key={question.id}
                      href={`/faq/${category.id}/${question.id}`}
                      className="flex items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <span className="text-gray-900">{question.question}</span>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* No results message */}
        {searchQuery && filteredCategories.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No questions found matching your search. Please try a different search term.
          </p>
        )}

        {/* Show message when no category is selected */}
        {!searchQuery && !expandedCategory && (
          <p className="text-center text-gray-500 py-8">Please select a category above to view related questions.</p>
        )}
      </div>
    </div>
  )
}
