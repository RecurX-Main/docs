import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "05. Solution | RecurX Documentation",
  description: "RecurX is building the next-generation decentralized payment gateway for Web3 and beyond",
}

export default function SolutionPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">05. Solution</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">Solution</h2>
          <p className="text-lg leading-relaxed text-green-800 dark:text-green-200 mb-6">
            RecurX is building the next-generation decentralized payment gateway – a multi-chain, gas-optimized, and
            trust-enabled crypto payment infrastructure that rivals Stripe and PayPal, purpose-built for Web3 and
            beyond.
          </p>
          <p className="text-green-800 dark:text-green-200 leading-relaxed">
            It simplifies payments and subscriptions for users, empowers merchants with powerful billing tools,
            introduces an identity layer for fraud protection, and anchors real transaction utility to its native token,
            RCX.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-balance">Key Innovations of RecurX</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
              1. Unified Payment Gateway for Web3 & Web2
            </h3>
            <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
              Enables users to pay with 300+ cryptocurrencies and stablecoins across multiple chains, with merchant
              settlement in RCX, stablecoins, or fiat.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">
              2. Multi-Chain Support & Smart Routing Engine
            </h3>
            <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
              Natively supports networks like BNB Chain, Polygon, Berachain, Hemi, with smart routing via 1inch and
              OpenOcean.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">
              3. Built-in Subscription & Recurring Billing Logic
            </h3>
            <p className="text-green-800 dark:text-green-200 leading-relaxed">
              Supports native recurring billing for monthly, quarterly, or custom intervals.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">
              4. Decentralized Identification System Layer (DIS)
            </h3>
            <p className="text-orange-800 dark:text-orange-200 leading-relaxed">
              Hybrid system for merchant and user verification without centralized KYC.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">
              5. Merchant Settlement Flexibility
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 leading-relaxed">
              Configurable settlement in RCX, stablecoins, or fiat via off-ramp partners.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg p-6 border border-cyan-200 dark:border-cyan-800">
            <h3 className="text-lg font-semibold mb-3 text-cyan-900 dark:text-cyan-100">
              6. Near-Zero Transaction Fees
            </h3>
            <p className="text-cyan-800 dark:text-cyan-200 leading-relaxed">
              0% fee for RCX payments, 0.1% for crypto, 0.5% for fiat settlements.
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
              7. Token-Centric Utility & Economic Alignment (RCX)
            </h3>
            <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
              Powers payment infrastructure, staking, cashback, and governance.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-balance">Problem vs Solution Matrix</h2>
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Problem</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">RecurX Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                  Complex multi-chain payments
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">
                  Cross-chain swaps + aggregator routing
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                  Lack of subscriptions in Web3
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">
                  Built-in recurring billing engine
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                  No trust layer for merchants
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">
                  Decentralized ID + verified merchant system
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">High transaction fees</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">
                  0%-0.5% cost range + gas optimization
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                  Poor token utility models
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">
                  Real payment flows, liquidity-driven demand
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                  User & merchant confusion
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400">
                  Simple dashboard + SDKs + no-code integration
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <PageNavigation currentPath="/solution" />
    </main>
  )
}
