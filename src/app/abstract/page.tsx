import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "Abstract | RecurX Documentation",
  description: "RecurX is a decentralized, multi-chain crypto payment protocol designed to modernize digital commerce",
}

export default function AbstractPage() {
  return (
    <main className="mx-auto max-w-4xl px-2 sm:px-4">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-balance">Abstract</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none prose-sm sm:prose-base">
        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          RecurX is a decentralized, multi-chain crypto payment protocol designed to modernize digital commerce by
          enabling seamless, secure, and cost-efficient payments and subscriptions for Web3 and Web2 platforms alike. At
          its core, RecurX leverages the RCX token to facilitate token routing, stabilize value transfers, incentivize
          liquidity, and unlock programmable financial flows all without traditional intermediaries.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          The RecurX protocol empowers merchants to accept payments in over <strong>300+ cryptocurrencies</strong> and{" "}
          <strong>12+ fiat currencies</strong>, which are auto-routed and converted via decentralized liquidity
          aggregators (e.g., 1inch, OpenOcean) to their preferred settlement format whether RCX, stablecoins, or fiat.
          Built for scalability and speed, the system is deployed across multiple blockchains including BSC, Polygon,
          Solana, Berachain, Hemi and optimized with gas-efficient smart contracts and near-zero transaction fees.
        </p>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-4 sm:p-6 border border-green-200 dark:border-green-800 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-900 dark:text-green-100">
            Key Features
          </h2>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-green-800 dark:text-green-200">
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2 mt-1 flex-shrink-0">•</span>
              <span>
                <strong>Strategic treasury system</strong> to allocate platform profits toward buybacks, liquidity
                reinforcements, and operational support
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2 mt-1 flex-shrink-0">•</span>
              <span>
                <strong>Flexible liquidity architecture</strong> to counter volatility and support RecurX's role as the
                internal routing token
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2 mt-1 flex-shrink-0">•</span>
              <span>
                <strong>Adaptive reserve & governance layer</strong> that enables conditional, vote-driven asset
                reallocations when required
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2 mt-1 flex-shrink-0">•</span>
              <span>
                <strong>Tiered merchant ecosystem</strong> offering powerful APIs, SDKs, branding tools, and fiat
                off-ramp support
              </span>
            </li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          The RCX token serves not only as a value bridge but also anchors long-term economic alignment through a
          well-structured tokenomics and vesting model, mirroring the discipline of Tier-1 projects like Aptos,
          Starknet, and SUI. It ensures minimized TGE pressure, long-term team/investor alignment, and scalable growth
          through incentivized staking, liquidity provisioning, and cashback systems.
        </p>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-4 sm:p-6 border border-purple-200 dark:border-purple-800 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-purple-900 dark:text-purple-100">
            Decentralized Identification System (DIS)
          </h2>
          <p className="text-sm sm:text-base text-purple-800 dark:text-purple-200 leading-relaxed">
            RecurX introduces a Decentralized Identification System (DIS) layer that enhances trust, fraud prevention,
            and accountability in Web3 commerce. Merchants and users can link cryptographically verified identities to
            wallets, enabling trusted merchant badges, reputation scores, and Sybil-resistant access all while
            preserving user privacy through optional participation.
          </p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          RecurX does not function as a DAO, but incorporates limited community voting in specific protocol decisions
          (e.g., strategic reserve deployment, emergency liquidity top-ups), using on-chain and off-chain methods (e.g.,
          dashboard and social voting) in early phases.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg p-4 sm:p-6 border border-blue-200 dark:border-blue-800 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-900 dark:text-blue-100">
            Future Goals
          </h2>
          <p className="text-sm sm:text-base text-blue-800 dark:text-blue-200 mb-3 sm:mb-4">
            In its fully deployed phase, RecurX aims to:
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-blue-800 dark:text-blue-200">
            <li>• Act as the backbone infrastructure for subscription-based and one-time Web3 payments</li>
            <li>• Onboard Web2 merchants through customizable integrations with real-time crypto-fiat conversion</li>
            <li>
              • Serve as a liquidity engine powering frictionless multi-chain commerce, enterprise APIs, and
              cross-border financial access
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-4 sm:p-6 border border-orange-200 dark:border-orange-800">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-orange-900 dark:text-orange-100">
            Why It Matters
          </h2>
          <p className="text-sm sm:text-base text-orange-800 dark:text-orange-200 leading-relaxed">
            In a market fragmented by chain complexity, unstable liquidity, and high transaction fees, RecurX introduces
            a universal payment protocol built for scale, designed for compliance, and backed by token utility.
          </p>
        </div>
      </div>

      <PageNavigation currentPath="/abstract" />
    </main>
  )
}
