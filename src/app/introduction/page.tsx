import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "01. Introduction | RecurX Documentation",
  description:
    "The global payment infrastructure remains burdened by outdated technologies, high fees, and geographical limitations",
}

export default function IntroductionPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">01. Introduction</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-6">
          The global payment infrastructure, though foundational to commerce, remains burdened by outdated technologies,
          high fees, geographical limitations, and reliance on centralized intermediaries. Web3 introduced programmable
          value transfer, but mainstream adoption remains fragmented due to poor user experience, network complexity,
          unstable tokenomics, and limited merchant integration.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          At the intersection of these challenges, <strong>RecurX</strong> emerges as a decentralized crypto-based
          payment protocol designed to redefine digital payments for both Web3-native and Web2-traditional businesses.
          With a strong focus on multi-chain operability, near-zero transaction fees, and liquidity-driven routing,
          RecurX offers a fully integrated solution for seamless payments and subscription management using over{" "}
          <strong>300+ cryptocurrencies</strong> and <strong>12+ fiat currencies</strong> with instant, transparent, and
          automated conversions.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-100">Core Adaptability</h2>
          <p className="text-indigo-800 dark:text-indigo-200 mb-4">
            Unlike many DeFi and payment projects that force proprietary token usage or lock merchants into rigid flows,
            RecurX is built with adaptability at its core:
          </p>
          <ul className="space-y-3 text-indigo-800 dark:text-indigo-200">
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
              <span>
                Users can pay in any supported crypto asset (e.g., BNB, SOL, MATIC), while merchants choose how they
                receive funds (RCX, stablecoins, or fiat)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
              <span>
                The protocol integrates with leading liquidity aggregators (e.g., 1inch, OpenOcean) to ensure efficient
                token conversion and minimize slippage
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
              <span>
                Settlement flows are designed to support real-time cross-chain execution with a focus on scalability and
                compliance
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-balance">What Makes RecurX Different?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">
              1. Utility-Centered Token (RCX)
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
              RCX isn&apos;t just a governance or speculative token – it is fundamentally embedded in the payment
              infrastructure, facilitating all routing, conversion, and reward layers.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">
              2. Multi-Chain by Default
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
              Unlike projects that depend on fragile bridges, RecurX supports multiple chains natively from launch
              including BSC, Polygon, Solana, Berachain, and Hemi ensuring payment agility and network redundancy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">3. Modular Architecture</h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
              RecurX provides both traditional API-based integration for Web2 companies and decentralized smart contract
              toolkits (SDKs) for Web3 projects, enabling adoption across all business types.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">
              4. Transparent Monetization
            </h3>
            <p className="text-orange-800 dark:text-orange-200 leading-relaxed">
              The platform charges 0% fees for direct RCX payments and offers low, transparent fees for other
              transactions, sustained through treasury management, premium features, and native staking protocols.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-lg p-6 border border-slate-200 dark:border-slate-800 mb-8">
          <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
            5. Flexible Governance & DAO Elements
          </h3>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
            While not a DAO-first protocol, RecurX includes selective community voting mechanisms for events such as
            emergency liquidity deployments or strategic reserve allocation executed transparently via website or social
            platforms.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-balance">Why Now?</h2>

        <p className="text-lg leading-relaxed mb-6">
          The rise of global crypto adoption, paired with the collapse of trust in centralized intermediaries, has
          accelerated demand for decentralized payment systems. However, current solutions are either too fragmented,
          too expensive, or too complex for average users and businesses.
        </p>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
          <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">
            RecurX&apos;s Unique Value Proposition
          </h3>
          <p className="text-yellow-800 dark:text-yellow-200 leading-relaxed">
            A true liquidity-driven, multi-chain, non-custodial payment engine that can scale globally while remaining
            regulatory-aware, gas-optimized, and tailored for mass-market use cases.
          </p>
        </div>
      </div>

      <PageNavigation currentPath="/introduction" />
    </main>
  )
}
