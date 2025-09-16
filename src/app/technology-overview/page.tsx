import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "06. Technology Overview | RecurX Documentation",
  description:
    "RecurX is built on a modular, multi-chain architecture designed for scalability, security, and seamless user experience",
}

export default function TechnologyOverviewPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">06. Technology Overview</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          RecurX is built on a modular, multi-chain architecture designed for scalability, security, and seamless user
          experience. The protocol leverages cutting-edge blockchain technology, smart contract optimization, and
          decentralized liquidity aggregation to create a robust payment infrastructure that can handle millions of
          transactions across multiple networks.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">Core Architecture</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Smart Contract Layer</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>• Gas-optimized payment contracts</li>
                <li>• Multi-signature treasury management</li>
                <li>• Automated subscription billing</li>
                <li>• Cross-chain bridge integration</li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Routing Engine</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>• 1inch & OpenOcean integration</li>
                <li>• Optimal path finding algorithms</li>
                <li>• Slippage protection mechanisms</li>
                <li>• Real-time price aggregation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">Multi-Chain Infrastructure</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-green-300 dark:border-green-700 text-sm">
              <thead>
                <tr className="bg-green-100 dark:bg-green-900/30">
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Network</th>
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Status</th>
                  <th className="border border-green-300 dark:border-green-700 p-3 text-left">Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">BNB Smart Chain</td>
                  <td className="border border-green-300 dark:border-green-700 p-3 text-green-600 dark:text-green-400">
                    Live
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Low fees, high throughput</td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Polygon</td>
                  <td className="border border-green-300 dark:border-green-700 p-3 text-green-600 dark:text-green-400">
                    Live
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Ethereum compatibility</td>
                </tr>
                <tr>
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Solana</td>
                  <td className="border border-green-300 dark:border-green-700 p-3 text-yellow-600 dark:text-yellow-400">
                    Q2 2025
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Ultra-fast transactions</td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Berachain</td>
                  <td className="border border-green-300 dark:border-green-700 p-3 text-yellow-600 dark:text-yellow-400">
                    Q3 2025
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Proof-of-Liquidity consensus</td>
                </tr>
                <tr>
                  <td className="border border-green-300 dark:border-green-700 p-3 font-medium">Hemi Network</td>
                  <td className="border border-green-300 dark:border-green-700 p-3 text-yellow-600 dark:text-yellow-400">
                    Q4 2025
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3">Bitcoin-Ethereum bridge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">
            Decentralized Identity System (DIS)
          </h2>

          <p className="text-purple-800 dark:text-purple-200 leading-relaxed mb-6">
            The DIS layer provides optional identity verification for merchants and users, enhancing trust without
            compromising privacy:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Merchant Verification</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Business registration, reputation scores, verified badges
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">User Protection</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Sybil resistance, fraud prevention, dispute resolution
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Privacy First</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Zero-knowledge proofs, optional participation, data sovereignty
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800">
          <h2 className="text-2xl font-semibold mb-6 text-orange-900 dark:text-orange-100">Security & Auditing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">
                Smart Contract Security
              </h3>
              <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                <li>• Multi-signature wallet controls</li>
                <li>• Time-locked upgrades</li>
                <li>• Emergency pause mechanisms</li>
                <li>• Formal verification processes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">Audit Partners</h3>
              <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                <li>• Tier-1 security firms</li>
                <li>• Continuous monitoring</li>
                <li>• Bug bounty programs</li>
                <li>• Community-driven reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/technology-overview" />
    </main>
  )
}
