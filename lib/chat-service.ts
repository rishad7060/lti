// This is a simplified service for the chat functionality
// In a real implementation, you would connect this to Gemini AI

export type ChatMessage = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

// Sample responses focused on the organization's content
const organizationResponses = [
  "Our LTIP challenges are designed with transparent rules and live trading servers for an authentic experience.",
  "At LTIP, we offer account sizes ranging from $10k to $100k to suit different trading strategies.",
  "The profit split for funded traders is 75/25, with payouts processed every 14 days.",
  "Yes, we support both MetaTrader 5 and our custom Web Trader platform for your trading needs.",
  "To become an LTIP trader, you need to pass both Stage 1 (10% profit) and Stage 2 (5% profit) of our challenge.",
  "All trading at LTIP is conducted on live servers, not demo accounts, providing a real market experience.",
  "Our unique approach includes a deposit system where LTIP credits the remaining balance to your trading account after your initial deposit.",
  "We require KYC verification prior to trading to ensure a secure and compliant trading environment.",
  "London Trading Index has been established since 2019, providing years of proven market expertise.",
]

export async function sendChatMessage(message: string): Promise<ChatMessage> {
  // In a real implementation, this would connect to Gemini AI
  // and filter responses to only include organization-related information

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Get a random response from our organization-focused responses
  const randomResponse = organizationResponses[Math.floor(Math.random() * organizationResponses.length)]

  return {
    id: Date.now().toString(),
    content: randomResponse,
    role: "assistant",
    timestamp: new Date(),
  }
}
