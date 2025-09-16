import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "03. Market Analysis | RecurX Documentation",
  description:
    "The global digital payments industry is undergoing a historic transformation with immense opportunities",
}

export default function MarketAnalysisPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">03. Market Analysis</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          The global digital payments industry is undergoing a historic transformation. As user demand shifts from
          centralized, fee-heavy platforms to decentralized, permissionless systems, the opportunity to disrupt and
          modernize the <strong>$9+ trillion</strong> digital payments market is immense.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          At the same time, most crypto payment protocols fail to address the needs of real-world businesses, including
          seamless integration, multi-chain asset support, and low-fee, high-speed settlement. This creates a growing
          product-market gap – one that RecurX is uniquely positioned to solve.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">Global Payments Landscape</h2>
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed mb-6">
            The global digital payments market is projected to surpass <strong>$14 trillion by 2027</strong>, driven by
            e-commerce growth, mobile adoption, and cross-border commerce. However, the current infrastructure is
            plagued by:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">High Fees</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                2-4% on average via traditional payment gateways like Stripe and PayPal
              </p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Slow Settlement</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Up to 7 business days for international payouts
              </p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Lack of Transparency</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">Especially in cross-border transactions</p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Financial Exclusion</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Underbanked populations, particularly in emerging markets
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">Rise of Crypto Payments</h2>
          <p className="text-green-800 dark:text-green-200 leading-relaxed mb-6">
            Cryptocurrency-based payments are gaining rapid momentum:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700 text-center">
              <div className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">300M+</div>
              <p className="text-sm text-green-800 dark:text-green-200">Global crypto users as of 2024</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700 text-center">
              <div className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">150+</div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Countries now support crypto-to-fiat off-ramps
              </p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700 text-center">
              <div className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">75%</div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Small businesses in LATAM and Southeast Asia express interest in crypto settlement
              </p>
            </div>
          </div>

          <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
            <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-100">
              However, existing crypto payment providers fall short:
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Complex setup or smart contract dependency</li>
              <li>• Limited multi-chain and token support</li>
              <li>• Price volatility and poor liquidity</li>
              <li>• Inconsistent merchant experience and reporting</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">
            Market Gap: Subscription & SaaS in Web3
          </h2>
          <p className="text-purple-800 dark:text-purple-200 leading-relaxed mb-6">
            There is a clear lack of infrastructure for subscription-based payments and recurring billing models in
            Web3:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700 text-center">
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">$400B+</div>
              <p className="text-sm text-purple-800 dark:text-purple-200">Global SaaS revenue per year</p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700 text-center">
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">60%</div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                SaaS tools want to explore crypto as payment method
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700 text-center">
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">0</div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Flexible crypto-native recurring payment engines exist
              </p>
            </div>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
            <p className="text-purple-900 dark:text-purple-100 font-medium">
              RecurX addresses this directly with customizable subscription plans, smart routing, and auto-conversion –
              making it the first full-stack crypto-native recurring payment solution for both Web2 and Web3 businesses.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-balance">Competitive Comparison</h2>
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Requirement</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Traditional Gateways</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Crypto Payment Projects</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">RecurX</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Multi-Asset Support</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Limited</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Partial (1-3 chains)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400 font-medium">
                  300+ cryptocurrencies
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Cross-Chain Payments</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400 font-medium">
                  ✅ (Native)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Instant Settlement</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ (2-7 days)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Partial</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400 font-medium">
                  ✅ (Instant)
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Fee Transparency</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400 font-medium">
                  ✅ (0%-0.5%)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Fiat Integration</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">✅</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400 font-medium">
                  ✅ (Optional)
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Recurring Billing</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">✅</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 dark:text-green-400 font-medium">
                  ✅ (Built-in)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-900 dark:text-orange-100">
            Total Addressable Market (TAM)
          </h2>
          <p className="text-orange-800 dark:text-orange-200 leading-relaxed mb-6">
            RecurX addresses all 4 sectors simultaneously, creating a powerful vertical and horizontal scale across the
            Web3 economy.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-orange-300 dark:border-orange-700 text-sm">
              <thead>
                <tr className="bg-orange-100 dark:bg-orange-900/30">
                  <th className="border border-orange-300 dark:border-orange-700 p-3 text-left">Sector</th>
                  <th className="border border-orange-300 dark:border-orange-700 p-3 text-left">Opportunity</th>
                  <th className="border border-orange-300 dark:border-orange-700 p-3 text-left">Market Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3 font-medium">
                    Global Digital Payments
                  </td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">
                    Replace legacy systems with DeFi rails
                  </td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3 font-bold">$14T+ by 2027</td>
                </tr>
                <tr className="bg-orange-50 dark:bg-orange-900/20">
                  <td className="border border-orange-300 dark:border-orange-700 p-3 font-medium">Crypto Payments</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">Gateway infrastructure</td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3 font-bold">$2.2B by 2026</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 dark:border-orange-700 p-3 font-medium">
                    SaaS/Subscriptions
                  </td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">
                    Power Web3 recurring revenue models
                  </td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3 font-bold">$400B+ market</td>
                </tr>
                <tr className="bg-orange-50 dark:bg-orange-900/20">
                  <td className="border border-orange-300 dark:border-orange-700 p-3 font-medium">
                    Multi-chain DeFi Tools
                  </td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3">
                    Analytics, SDK, settlement layer
                  </td>
                  <td className="border border-orange-300 dark:border-orange-700 p-3 font-bold">$1B+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg p-8 border border-yellow-200 dark:border-yellow-800">
          <h2 className="text-2xl font-semibold mb-6 text-yellow-900 dark:text-yellow-100">
            Market Timing & Strategic Advantage
          </h2>
          <p className="text-yellow-800 dark:text-yellow-200 leading-relaxed mb-6">
            Timing is critical. We are entering a post-2024 cycle where:
          </p>

          <ul className="space-y-3 text-yellow-800 dark:text-yellow-200 mb-6">
            <li>• Stablecoins and RCX-style utility tokens are gaining credibility</li>
            <li>• Web3-native subscription services (DePIN, SaaS, Tools, etc.) are growing</li>
            <li>• Users and merchants want instant, cost-efficient, non-custodial payment rails</li>
          </ul>

          <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-300 dark:border-yellow-700">
            <p className="text-yellow-900 dark:text-yellow-100 font-medium">
              RecurX is designed to serve this next wave of crypto commerce, giving us a first-mover advantage in
              subscription-ready, cross-chain, flexible payment infrastructure.
            </p>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/market-analysis" />
    </main>
  )
}
