import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "Welcome | RecurX Documentation",
  description:
    "Welcome to the official documentation of RecurX - a next-generation decentralized payment and subscription protocol",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-2 sm:px-4">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-balance">Welcome</h1>
        <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">👋</div>
        <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          Welcome to the official documentation of <strong>RecurX</strong> - a next-generation decentralized payment and
          subscription protocol built for the evolving world of digital commerce.
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none prose-sm sm:prose-base">
        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          In a landscape where traditional payment infrastructure struggles to meet the demands of borderless,
          blockchain-based ecosystems, RecurX emerges as a trust-enabled, multi-chain payment solution designed for
          scale, speed, and accessibility.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
          Whether you're a builder, investor, partner, or contributor - this GitBook serves as your starting point to
          understand the vision, technology, and mechanics behind the RecurX protocol.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-4 sm:p-6 border border-blue-200 dark:border-blue-800">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-900 dark:text-blue-100">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <h3 className="font-medium text-blue-800 dark:text-blue-200 text-sm sm:text-base">Getting Started</h3>
              <ul className="space-y-1 text-xs sm:text-sm text-blue-700 dark:text-blue-300">
                <li>• Abstract</li>
                <li>• Introduction</li>
                <li>• Vision & Mission</li>
                <li>• Market Analysis</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-blue-800 dark:text-blue-200 text-sm sm:text-base">Core Features</h3>
              <ul className="space-y-1 text-xs sm:text-sm text-blue-700 dark:text-blue-300">
                <li>• Technology Overview</li>
                <li>• Use Cases</li>
                <li>• RecurX Token (RCX)</li>
                <li>• Ecosystem & Partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/" />
    </main>
  )
}
