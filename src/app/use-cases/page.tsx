import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "08. Use Cases | RecurX Documentation",
  description: "RecurX enables a wide range of payment scenarios across Web3 and traditional business models",
}

export default function UseCasesPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">08. Use Cases</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          RecurX enables a wide range of payment scenarios across Web3 and traditional business models. From simple
          one-time payments to complex subscription services, our protocol provides the flexibility and reliability
          needed for modern digital commerce.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">E-commerce Payments</h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed mb-4">
              Enable crypto payments for online stores with automatic conversion to preferred settlement currency.
            </p>
            <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
              <li>• Multi-currency checkout</li>
              <li>• Instant settlement</li>
              <li>• Fraud protection</li>
              <li>• Mobile-optimized</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">SaaS Subscriptions</h3>
            <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed mb-4">
              Automated recurring billing for software services with flexible pricing models.
            </p>
            <ul className="space-y-1 text-green-700 dark:text-green-300 text-sm">
              <li>• Monthly/annual billing</li>
              <li>• Usage-based pricing</li>
              <li>• Automatic renewals</li>
              <li>• Dunning management</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">DeFi Integration</h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed mb-4">
              Seamless payments within decentralized finance applications and protocols.
            </p>
            <ul className="space-y-1 text-purple-700 dark:text-purple-300 text-sm">
              <li>• DEX integration</li>
              <li>• Yield farming fees</li>
              <li>• Staking rewards</li>
              <li>• Governance payments</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">Creator Economy</h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm leading-relaxed mb-4">
              Direct payments to content creators, artists, and influencers with minimal fees.
            </p>
            <ul className="space-y-1 text-orange-700 dark:text-orange-300 text-sm">
              <li>• Fan subscriptions</li>
              <li>• NFT purchases</li>
              <li>• Tip payments</li>
              <li>• Royalty distribution</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">Gaming & Metaverse</h3>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed mb-4">
              In-game purchases, virtual asset trading, and metaverse commerce solutions.
            </p>
            <ul className="space-y-1 text-yellow-700 dark:text-yellow-300 text-sm">
              <li>• In-app purchases</li>
              <li>• Virtual goods</li>
              <li>• Tournament prizes</li>
              <li>• Land transactions</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg p-6 border border-cyan-200 dark:border-cyan-800">
            <h3 className="text-lg font-semibold mb-3 text-cyan-900 dark:text-cyan-100">Cross-Border Remittances</h3>
            <p className="text-cyan-800 dark:text-cyan-200 text-sm leading-relaxed mb-4">
              Fast, low-cost international money transfers with transparent exchange rates.
            </p>
            <ul className="space-y-1 text-cyan-700 dark:text-cyan-300 text-sm">
              <li>• Instant transfers</li>
              <li>• Low fees</li>
              <li>• Multiple currencies</li>
              <li>• Compliance ready</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-lg p-8 border border-slate-200 dark:border-slate-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">Enterprise Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-100 dark:bg-slate-900/30 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">B2B Payments</h4>
              <p className="text-sm text-slate-800 dark:text-slate-200">
                Automated invoice processing and supplier payments
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900/30 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Payroll Systems</h4>
              <p className="text-sm text-slate-800 dark:text-slate-200">
                Crypto salary payments and contractor disbursements
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900/30 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Treasury Management</h4>
              <p className="text-sm text-slate-800 dark:text-slate-200">
                Multi-signature wallets and automated treasury operations
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg p-8 border border-indigo-200 dark:border-indigo-800">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-900 dark:text-indigo-100">Implementation Examples</h2>

          <div className="space-y-6">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-6 border border-indigo-300 dark:border-indigo-700">
              <h3 className="text-lg font-semibold mb-3 text-indigo-900 dark:text-indigo-100">
                Case Study: NFT Marketplace
              </h3>
              <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed mb-4">
                A leading NFT marketplace integrated RecurX to accept payments in 50+ cryptocurrencies, resulting in 40%
                increase in transaction volume and 60% reduction in failed payments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-indigo-900 dark:text-indigo-100 mb-1">Before RecurX</h4>
                  <ul className="text-xs text-indigo-700 dark:text-indigo-300">
                    <li>• ETH payments only</li>
                    <li>• High gas fees</li>
                    <li>• 15% failed transactions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-900 dark:text-indigo-100 mb-1">After RecurX</h4>
                  <ul className="text-xs text-indigo-700 dark:text-indigo-300">
                    <li>• 50+ supported tokens</li>
                    <li>• 90% lower fees</li>
                    <li>• 6% failed transactions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-6 border border-indigo-300 dark:border-indigo-700">
              <h3 className="text-lg font-semibold mb-3 text-indigo-900 dark:text-indigo-100">
                Case Study: Web3 SaaS Platform
              </h3>
              <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed">
                A blockchain analytics platform implemented RecurX for subscription billing, enabling crypto-native
                recurring payments and reducing churn by 25% through flexible payment options.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/use-cases" />
    </main>
  )
}
