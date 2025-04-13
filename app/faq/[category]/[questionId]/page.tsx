import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

// FAQ data with answers
const faqData = {
  "getting-started": {
    "how-do-i-buy-an-account": {
      question: "How do I buy an account?",
      answer:
        "Buying a Challenge account with London Trading Index is simple and straightforward! Choose your preferred currency (USD, GBP or EUR) and account size from $10,000 to $100,000. Pay easily via Credit/Debit Card, Crypto, or Fintech Pay balance, and you're all set!",
    },
    "what-are-the-steps-after-an-account-purchase": {
      question: "What are the steps after an account purchase?",
      answer:
        "After purchasing your account, you'll need to complete KYC verification by submitting your documents. Once verified, you can select your challenge and make the necessary deposit. LTIP will then credit the remaining balance to reach your funded account balance, and you can begin trading.",
    },
    "where-can-i-find-my-account-information": {
      question: "Where can I find my account information?",
      answer:
        "You can find all your account information in your LTIP dashboard. After logging in, navigate to the 'My Accounts' section where you'll see details about your challenge progress, account balance, trading parameters, and other important information.",
    },
    "when-do-i-get-access-to-my-account": {
      question: "When do I get access to my account?",
      answer:
        "You'll get access to your trading account immediately after completing the KYC verification process and making your initial deposit. The entire process typically takes less than 24 hours, depending on how quickly you complete the verification steps.",
    },
    "how-do-i-access-my-account": {
      question: "How do I access my account?",
      answer:
        "To access your account, log in to the LTIP Client Portal using your credentials. From there, you can access your trading platform (either MT5 or Web Trader) directly through the dashboard. You'll find login details for your trading platform in the 'My Accounts' section.",
    },
  },
  "general-questions": {
    "what-platforms-do-you-support": {
      question: "What platforms do you support?",
      answer:
        "We offer trading on MetaTrader 5 (MT5) or our custom LTIP Web Trader platform. You'll need to select which platform you wish to use when starting your challenge, and you'll need to continue with that platform throughout your journey.",
    },
    "can-i-trade-news": {
      question: "Can I trade news?",
      answer:
        "Trading during news events is permitted, but we recommend caution as market volatility can increase significantly during these times. Always ensure you have proper risk management in place when trading during news events.",
    },
    "what-size-account-can-i-trade-with": {
      question: "What size account can I trade with?",
      answer:
        "At LTIP, you can start your challenge on either a $10k, $25k, $50k, or $100k account. Select the account size that best fits your trading strategy and goals.",
    },
    "do-i-trade-on-live-or-demo-servers": {
      question: "Do I trade on live or demo servers?",
      answer:
        "All traders, whether on Stage 1, Stage 2, or funded, execute all their positions on a live server. This provides a more authentic trading experience with real market conditions.",
    },
    "are-there-any-free-cfd-prop-firms": {
      question: "Are there any free CFD prop firms?",
      answer:
        "It is unlikely that prop firms are offering their challenges for free due to the high cost of operating a prop firm. Most reputable prop firms, including LTIP, charge for their products to cover operational costs and ensure serious participation.",
    },
  },
  "about-us": {
    "who-can-join-the-ltip-programme": {
      question: "Who can join the LTIP programme?",
      answer:
        "We welcome all traders above the age of 18 from our permitted countries to become an LTIP trader. Our program is designed for both experienced traders looking to scale their strategies and dedicated newcomers who are committed to developing their skills.",
    },
    "which-broker-do-you-use": {
      question: "Which broker do you use?",
      answer:
        "We use our own broker and own servers at London Trading Index (LTI). This allows us to maintain high standards of execution and ensure a seamless trading experience for all our traders.",
    },
  },
  "risk-management": {
    "is-automated-trading-allowed": {
      question: "Is automated trading allowed?",
      answer:
        "Yes, we do allow EAs (Expert Advisors) on all stages of LTIP. However, HFT (High-Frequency Trading), arbitrage, or any other prohibited methods are strictly forbidden. All automated strategies must comply with our trading rules and risk parameters.",
    },
  },
  payments: {
    "do-i-receive-my-deposit-back": {
      question: "Do I receive my deposit back?",
      answer:
        "You do not receive your deposit back, as it acts as a fee for your funded account challenge. This deposit contributes to the operational costs of providing you with a funded trading account and the opportunity to trade with our capital.",
    },
  },
  payouts: {
    "how-does-the-payout-work": {
      question: "How does the payout work?",
      answer:
        "Payouts are processed every 14 days. As an LTIP trader, you keep 75% of the profits you generate, while LTIP retains 25%. To request a payout, you'll need to submit a withdrawal request through your dashboard once you've met the conditions on your live account.",
    },
    "do-i-pay-tax-on-my-trading-profits": {
      question: "Do I pay tax on my trading profits?",
      answer:
        "Please note we are not liable for assisting you with your tax obligations. As an LTIP trader, you are solely responsible for your tax liabilities. If you are unsure about your tax situation, we recommend consulting with a professional tax advisor in your jurisdiction.",
    },
    "how-do-i-get-paid-as-a-trader": {
      question: "How do I get paid as a trader?",
      answer:
        "Once you have met the conditions on the live account, you will be able to submit a withdrawal request within your dashboard. Payouts are processed every 14 days, and you'll receive 75% of the profits generated. You can choose from several payment methods including bank transfer, crypto, and various fintech payment solutions.",
    },
  },
}

export default function QuestionPage({ params }: { params: { category: string; questionId: string } }) {
  const { category, questionId } = params
  const categoryName =
    category === "getting-started"
      ? "Getting started"
      : category === "general-questions"
        ? "General questions"
        : category === "about-us"
          ? "About us"
          : category === "risk-management"
            ? "Risk management"
            : category === "payments"
              ? "Payments"
              : category === "payouts"
                ? "Payouts"
                : ""

  const questionData = faqData[category as keyof typeof faqData]?.[questionId as any]

  if (!questionData) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600">Question not found</p>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/faq">Back to FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/faq" className="hover:text-primary">
            All collections
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href={`/faq`} className="hover:text-primary">
            {categoryName}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-700">{questionData.question}</span>
        </div>

        {/* Question and answer */}
        <h1 className="text-3xl font-bold mb-4 text-black">{questionData.question}</h1>
        <p className="text-gray-600 mb-8">{questionData.answer}</p>

        {/* Related questions */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Related questions</h2>
          <div className="space-y-2">
            {Object.entries(faqData[category as keyof typeof faqData])
              .filter(([id]) => id !== questionId)
              .slice(0, 3)
              .map(([id, data]) => (
                <Link
                  key={id}
                  href={`/faq/${category}/${id}`}
                  className="block p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                >
                  {data.question}
                </Link>
              ))}
          </div>
        </div>

        {/* Back button */}
        <div className="mt-8">
          <Button variant="outline" asChild>
            <Link href="/faq">Back to all questions</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
