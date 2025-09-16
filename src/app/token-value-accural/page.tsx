import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "10. Token Value Accrual & Stability Mechanisms | RecurX Documentation",
  description:
    "RecurX implements multiple value accrual mechanisms to ensure sustainable token economics and long-term stability",
}

export default function TokenValueAccrualPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">10. Token Value Accrual & Stability Mechanisms</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          RecurX implements multiple value accrual mechanisms to ensure sustainable token economics and long-term
          stability. Unlike speculative tokens, RCX derives its value from real protocol usage, revenue generation, and
          strategic treasury management designed to create consistent upward pressure on token value.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">
            Primary Value Accrual Mechanisms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                1. Transaction Volume Growth
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed mb-3">
                As payment volume increases, demand for RCX as the routing token grows proportionally.
              </p>
              <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                <li>• Every cross-chain payment requires RCX</li>
                <li>• Higher volume = higher token velocity</li>
                <li>• Network effects drive adoption</li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">2. Revenue-Based Buybacks</h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed mb-3">
                25% of protocol revenue is used for quarterly token buybacks and burns.
              </p>
              <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                <li>• Reduces circulating supply</li>
                <li>• Creates deflationary pressure</li>
                <li>• Transparent on-chain execution</li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                3. Staking Yield Distribution
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed mb-3">
                40% of protocol revenue is distributed to RCX stakers as yield rewards.
              </p>
              <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                <li>• Incentivizes long-term holding</li>
                <li>• Reduces liquid supply</li>
                <li>• Compound reward mechanisms</li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                4. Liquidity Mining Rewards
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed mb-3">
                Liquidity providers earn additional RCX rewards for supporting trading pairs.
              </p>
              <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                <li>• Deepens market liquidity</li>
                <li>• Reduces price volatility</li>
                <li>• Attracts institutional capital</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">
            Treasury Management Strategy
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-green-300 dark:border-green-700 text-sm">
              <thead>
                <tr className="bg-green-100 dark:bg-green-900/30">
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Revenue Allocation</th>
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Percentage</th>
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Staking Rewards</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">40%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Incentivize long-term holding</td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Buyback & Burn</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">25%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">
                    Reduce supply, increase scarcity
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Development Fund</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">20%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">
                    Protocol improvements, new features
                  </td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Liquidity Support</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">10%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Market making, stability</td>
                </tr>
                <tr>
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Emergency Reserve</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">5%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Crisis management, security</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">Stability Mechanisms</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Price Stability Pool</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Automated market operations to reduce volatility during high-volume periods
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Liquidity Backstop</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Emergency liquidity provision during market stress events
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Vesting Schedules</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Long-term vesting prevents sudden supply shocks from team/investor tokens
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800">
          <h2 className="text-2xl font-semibold mb-6 text-orange-900 dark:text-orange-100">Long-Term Value Drivers</h2>

          <div className="space-y-4">
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Network Effects</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                More merchants → more users → more transactions → higher RCX demand
              </p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Cross-Chain Expansion</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Each new blockchain integration multiplies potential transaction volume
              </p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Enterprise Adoption</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Large-scale B2B payments create sustained, high-volume demand
              </p>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/token-value-accrual" />
    </main>
  )
}
