import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "09. RecurX Token (RCX) | RecurX Documentation",
  description:
    "The RCX token is the cornerstone of the RecurX ecosystem, designed with real utility and sustainable tokenomics",
}

export default function RecurXTokenPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">09. RecurX Token (RCX)</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          The RCX token is the cornerstone of the RecurX ecosystem, designed with real utility and sustainable
          tokenomics. Unlike speculative tokens, RCX serves as the primary routing mechanism for payments, liquidity
          provision, and ecosystem governance, creating genuine demand through protocol usage.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">Token Specifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Basic Information</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>
                  <strong>Name:</strong> RecurX Token
                </li>
                <li>
                  <strong>Symbol:</strong> RCX
                </li>
                <li>
                  <strong>Total Supply:</strong> 1,000,000,000 RCX
                </li>
                <li>
                  <strong>Decimals:</strong> 18
                </li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Network Deployment</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>
                  <strong>Primary:</strong> BNB Smart Chain
                </li>
                <li>
                  <strong>Secondary:</strong> Polygon
                </li>
                <li>
                  <strong>Future:</strong> Solana, Berachain, Hemi
                </li>
                <li>
                  <strong>Standard:</strong> ERC-20/BEP-20
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">Token Distribution</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-green-300 dark:border-green-700 text-sm">
              <thead>
                <tr className="bg-green-100 dark:bg-green-900/30">
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Allocation</th>
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Percentage</th>
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Tokens</th>
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Vesting</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Public Sale</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">25%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">250,000,000</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">TGE: 20%, Linear 12 months</td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Private Sale</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">15%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">150,000,000</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">6 month cliff, Linear 18 months</td>
                </tr>
                <tr>
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Team & Advisors</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">20%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">200,000,000</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">
                    12 month cliff, Linear 36 months
                  </td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">
                    Ecosystem & Partnerships
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3">15%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">150,000,000</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Linear 48 months</td>
                </tr>
                <tr>
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">
                    Treasury & Development
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3">15%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">150,000,000</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Locked, Community governed</td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">
                    Liquidity & Market Making
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3">10%</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">100,000,000</td>
                  <td className="border border-green-300 dark:border-green-700 p-3">TGE: 50%, Linear 24 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">Core Utilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Payment Routing</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  RCX serves as the intermediate token for all cross-chain and multi-asset payments
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Fee Discounts</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Holders receive reduced transaction fees and premium features access
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Staking Rewards</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Earn yield through protocol revenue sharing and liquidity provision
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Governance Rights</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Vote on protocol upgrades, treasury allocation, and strategic decisions
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cashback Program</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Users earn RCX rewards for using the payment protocol
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Merchant Benefits</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Enhanced analytics, priority support, and advanced features
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800">
          <h2 className="text-2xl font-semibold mb-6 text-orange-900 dark:text-orange-100">Token Economics Model</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700 text-center">
              <div className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-2">Deflationary</div>
              <p className="text-sm text-orange-800 dark:text-orange-200">Regular token burns from protocol revenue</p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700 text-center">
              <div className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-2">Utility-Driven</div>
              <p className="text-sm text-orange-800 dark:text-orange-200">Real demand from payment processing</p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700 text-center">
              <div className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-2">Sustainable</div>
              <p className="text-sm text-orange-800 dark:text-orange-200">Revenue-backed value accrual mechanisms</p>
            </div>
          </div>

          <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6 border border-orange-300 dark:border-orange-700">
            <h3 className="text-lg font-semibold mb-4 text-orange-900 dark:text-orange-100">
              Value Accrual Mechanisms
            </h3>
            <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
              <li>
                • <strong>Transaction Volume:</strong> Increased usage drives token demand for routing
              </li>
              <li>
                • <strong>Staking Yield:</strong> Protocol revenue distributed to stakers
              </li>
              <li>
                • <strong>Buyback & Burn:</strong> Quarterly token burns from treasury profits
              </li>
              <li>
                • <strong>Liquidity Mining:</strong> Rewards for providing liquidity to RCX pairs
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/recurx-token" />
    </main>
  )
}
