import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "02. Vision & Mission | RecurX Documentation",
  description:
    "To become the foundational payment infrastructure of Web3 enabling frictionless, borderless, and trust-driven commerce",
}

export default function VisionMissionPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">02. Vision & Mission</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">Vision</h2>
          <p className="text-lg leading-relaxed text-blue-800 dark:text-blue-200 mb-6">
            Establish RecurX as the core payment infrastructure for Web3, enabling
            seamless, borderless, and trust-centered transactions for individuals, businesses, and
            dApps.
          </p>
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed mb-6">
            In an era where digital finance is evolving rapidly, RecurX envisions a future where anyone from a freelance
            developer to a global enterprise can send, receive, and manage payments instantly, securely, and without
            centralized gatekeepers. We aim to eliminate financial boundaries, middlemen, and inefficiencies, building a
            payment ecosystem where crypto becomes more than an asset – it becomes a functional, everyday currency.
          </p>
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-300 dark:border-blue-700">
            <p className="text-blue-900 dark:text-blue-100 font-medium text-center">
              Our long-term goal is to be recognized as the <strong>Stripe + PayPal for Web3</strong>, powering a new
              generation of decentralized business models, merchant settlements, and automated recurring billing in a
              multi-chain, multi-asset environment.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">Mission</h2>
          <p className="text-lg leading-relaxed text-green-800 dark:text-green-200 mb-6">
            Simplify crypto payments and subscriptions through a multi-chain, low-fee,
            decentralized protocol powered by RCX, supported by community feedback, robust
            infrastructure, and performance-driven tokenomics.
          </p>
          <p className="text-green-800 dark:text-green-200 leading-relaxed mb-6">
            We are committed to solving the most pressing challenges in Web3 payments:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Complex UX & High Fees</h4>
              <p className="text-sm text-green-800 dark:text-green-200">→ Clean APIs, SDKs & 0% fee direct payments</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Lack of Trust & KYC</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                → Opt-in Decentralized Identity System (DIS) verification
              </p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Volatility & Liquidity Issues</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                → Strategic treasury management, buyback & burn systems
              </p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Fragmented Chains & Assets</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                → Cross-chain payment rails with native swap routing
              </p>
            </div>
          </div>

          <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
            <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-100">
              To achieve this, we focus on:
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Building a gas-optimized, merchant-friendly settlement system</li>
              <li>• Enabling instant token routing & stablecoin conversion across chains</li>
              <li>• Providing scalable staking & cashback incentives for token holders</li>
              <li>• Ensuring resilience with DAO-based emergency protocols and Treasury use-case</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">Strategic Objectives</h2>
          <p className="text-purple-800 dark:text-purple-200 leading-relaxed mb-6">
            To fulfill our mission, RecurX is focused on the following strategic pillars:
          </p>

          <div className="space-y-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                1. Adoption & Merchant Onboarding
              </h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Seamless dashboard, simple API integration, and premium merchant features.
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">2. Scalability</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Multi-chain architecture, Layer-2 optimization, and liquidity routing with 1inch/OpenOcean.
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">3. Trust & Compliance</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Optional DIS-based identity, transparent governance, and audit-first smart contract practices.
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">4. Sustainability</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Long-term token value growth through buybacks, burns, and profit-driven Treasury allocation.
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">5. Ecosystem Expansion</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Partnerships with wallets, DeFi apps, launchpads, and fiat off-ramps to expand use cases globally.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/vision-mission" />
    </main>
  )
}
