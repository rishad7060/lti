"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What happens if I fail the challenge?",
    answer: "Unfortunately, no refunds are provided. However, you can rejoin and start again.",
    category: "getting-started",
  },
  {
    question: "How does the payout work?",
    answer: "Payouts are processed every 14 days. Traders keep 75% of the profits.",
    category: "payouts",
  },
  {
    question: "What platforms do you support?",
    answer: "We offer trading on MT5 or our LTIP Web Trader.",
    category: "general-questions",
  },
  {
    question: "How do I become an LTIP Trader?",
    answer: "To become an LTIP Trader, you must pass both stage 1 and stage 2 of the LTIP Challenge.",
    category: "getting-started",
  },
  {
    question: "Can I trade news?",
    answer: "Tech Dependant - TBC",
    category: "general-questions",
  },
  {
    question: "How do I start a LTIP Challenge?",
    answer:
      "To start your LTIP challenge, register your profile and complete your KYC by submitting your documents. Once your account is verified you can select your challenge and make the necessary deposit into the funded account, LTIP will then credit the remaining balance to take it up to your funded account balance.",
    category: "getting-started",
  },
  {
    question: "Who can join the LTIP programme?",
    answer: "We welcome all traders above the age of 18 from our permitted countries to become an LTIP trader.",
    category: "about-us",
  },
  {
    question: "How fast can I become an LTIP trader?",
    answer:
      "At LTIP both stage 1 and 2 require a minimum 5 trading days (non consecutive), once the minimum trading days have been achieved alongside the other objectives you may progress to the next stage.",
    category: "getting-started",
  },
  {
    question: "Do I have to complete my KYC before I start trading?",
    answer: "Yes, all KYC needs to be completed prior to any trading activity commences.",
    category: "getting-started",
  },
  {
    question: "Can I custom build my trading terminal and also use MT5?",
    answer:
      "No, you will have to select which trading platform you wish to become an LTIP trader with and proceed with your challenge throughout on the chosen platform.",
    category: "general-questions",
  },
  {
    question: "What size account can I trade with?",
    answer:
      "At LTIP you can start your challenge on either a $10k, $25k, $50k and $100k account. Select your account and away you go!",
    category: "general-questions",
  },
  {
    question: "Do I trade on live or demo servers?",
    answer: "All traders whether on stage 1, stage 2 or funded execute all their positions on a live server.",
    category: "general-questions",
  },
  {
    question: "Do I pay tax on my trading profits?",
    answer:
      "Please note we are not liable for assisting you with your tax. As a LTIP trader, you are solely responsible and if you are unsure should discuss with a professional.",
    category: "payouts",
  },
  {
    question: "Do I receive my deposit back?",
    answer: "You do not receive your deposit back, it acts as a fee for your funded account challenge.",
    category: "payments",
  },
  {
    question: "Is automated trading allowed?",
    answer:
      "Yes, we do allow EAs on all stages of LTIP. However, HFT, arbitrage or any other prohibited methods are strictly forbidden.",
    category: "risk-management",
  },
  {
    question: "Which broker do you use?",
    answer: "We use our own broker and own servers at London Trading Index (LTI)",
    category: "about-us",
  },
  {
    question: "Are there any free CFD prop firms?",
    answer:
      "It is unlikely that prop firms are offering their challenges for free due to the high cost of operating a prop firm and therefore would most likely charge for the product.",
    category: "general-questions",
  },
  {
    question: "How do I get paid as a trader?",
    answer:
      "Once you have met the conditions on the live account, you will be able to submit a withdrawal request within your dashboard.",
    category: "payouts",
  },
]

export function FaqAccordion({
  category = "getting-started",
  searchQuery = "",
}: { category?: string; searchQuery?: string }) {
  const [filteredItems, setFilteredItems] = useState(faqItems)

  useEffect(() => {
    let items = faqItems

    // Filter by search query if provided
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      items = items.filter(
        (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query),
      )
    }
    // Filter by category if no search query and category is provided
    else if (category) {
      items = items.filter((item) => item.category === category)
    }

    setFilteredItems(items)
  }, [category, searchQuery])

  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
            <AccordionTrigger className="text-left hover:text-primary text-black">{item.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
          </AccordionItem>
        ))
      ) : (
        <div className="text-center py-8 text-gray-500">
          No FAQ items match your criteria. Please try a different category or search term.
        </div>
      )}
    </Accordion>
  )
}
