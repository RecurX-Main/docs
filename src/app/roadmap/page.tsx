import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "13. Roadmap | RecurX Documentation",
  description:
    "RecurX development roadmap outlines our strategic milestones and timeline for building the future of Web3 payments",
}

export default function RoadmapPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">13. Roadmap</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <h2 className="text-2xl font-semibold text-green-900 dark:text-green-100">
                Q3 2025 — Foundation & Community Building
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
                <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">Completed</h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                  <li>✅ Testnet Launch with core features</li>
                  <li>✅ Pre-Sale Start</li>
                </ul>
              </div>

              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
                <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">In Progress</h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                  <li>🔄 Whitepaper Launch</li>
                  <li>🔄 New Website UI</li>
                  <li>🔄 Smart Contract Security Audit</li>
                  <li>🔄 Tokenomics Release</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                4
              </div>
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100">
                Q4 2025 — Early Adoption & Token Launch
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Platform Launch</h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                  <li>⏳ Beta Mainnet Launch</li>
                  <li>⏳ Token Generation Event (TGE) & CEX + DEX listings</li>
                  <li>⏳ Full Platform Audits</li>
                  <li>⏳ Testnet Reward Distribution</li>
                </ul>
              </div>

              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Ecosystem Growth</h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                  <li>⏳ New Blockchain Integrations</li>
                  <li>⏳ Initial Partnerships with Web2 & Web3 merchants</li>
                  <li>⏳ Staking & Yield Module for RCX holders</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                1
              </div>
              <h2 className="text-2xl font-semibold text-purple-900 dark:text-purple-100">
                Q1 2026 — Ecosystem Expansion
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
                <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">
                  Platform Enhancement
                </h3>
                <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                  <li>⏳ Full Mainnet V2 with advanced modules</li>
                  <li>⏳ AI Analytics Dashboard for merchants</li>
                  <li>⏳ Fiat On-Ramp & Off-Ramp Integration (via 3rd party providers)</li>
                  <li>⏳ DIS (Decentralized Identity System) launch</li>
                </ul>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
                <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">Market Expansion</h3>
                <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                  <li>⏳ Expansion to 300+ merchants across Web2 & Web3</li>
                  <li>⏳ Community Governance Dashboard (light governance model)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                2
              </div>
              <h2 className="text-2xl font-semibold text-orange-900 dark:text-orange-100">
                Q2 & Q3 2026 — Scale & Utility Growth
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6 border border-orange-300 dark:border-orange-700">
                <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">Token Mechanisms</h3>
                <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                  <li>⏳ Quarterly RCX Token Burn & Buyback mechanisms</li>
                  <li>⏳ Liquidity Expansion & Treasury Strategies</li>
                </ul>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-6 border border-orange-300 dark:border-orange-700">
                <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">Platform Scale</h3>
                <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                  <li>⏳ Multi-Chain Support Expansion (10+ chains, 500+ tokens)</li>
                  <li>⏳ RecurX app Launch for smartphones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-lg p-8 border border-slate-200 dark:border-slate-800 mt-8">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">Key Milestones & Vision</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-100 dark:bg-slate-900/30 rounded-lg p-4 border border-slate-300 dark:border-slate-700 text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">2025</div>
              <p className="text-sm text-slate-800 dark:text-slate-200">Foundation & Token Launch</p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900/30 rounded-lg p-4 border border-slate-300 dark:border-slate-700 text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">2026</div>
              <p className="text-sm text-slate-800 dark:text-slate-200">Ecosystem Expansion & Scale</p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900/30 rounded-lg p-4 border border-slate-300 dark:border-slate-700 text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Beyond</div>
              <p className="text-sm text-slate-800 dark:text-slate-200">Global Payment Standard</p>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/roadmap" />
    </main>
  )
}
