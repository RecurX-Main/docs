import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "04. Problem | RecurX Documentation",
  description: "Despite explosive Web3 growth, payments remain fragmented, complex, and trust-deficient",
}

export default function ProblemPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">04. Problem</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-lg p-8 border border-red-200 dark:border-red-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-red-900 dark:text-red-100">Problem Statement</h2>
          <p className="text-lg leading-relaxed text-red-800 dark:text-red-200 mb-6">
            Despite the explosive growth of Web3 and crypto infrastructure, payments in the decentralized world remain
            fragmented, complex, and trust-deficient – especially for real-world commerce and recurring subscriptions.
          </p>
          <p className="text-red-800 dark:text-red-200 leading-relaxed mb-6">
            Traditional payment gateways like PayPal or Stripe offer seamless UX, settlement speed, and global
            compatibility but are fundamentally centralized, exclusionary to unbanked users, and incompatible with
            native crypto assets.
          </p>
          <p className="text-red-800 dark:text-red-200 leading-relaxed">
            On the other hand, current Web3 payment solutions suffer from critical gaps in scalability, user trust,
            merchant tooling, and cross-chain operability.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-balance">Key Problems in the Market</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
              1. No True Web3 Alternative to Stripe/PayPal
            </h3>
            <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
              Most crypto payment platforms are either token-specific, limited to single-chain operations, or rely on
              custodial infrastructure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
              2. User Experience is Complicated
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
              From wallet connections and gas fees to chain switching and token approvals – end users face friction at
              every step.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">
              3. Merchants Lack Subscription Tools
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
              Web3-native recurring payments are nearly impossible for most merchants today.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">
              4. Cross-Chain Payments Are Broken
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
              No current payment protocol abstracts chain complexity or offers native cross-chain swaps.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">
              5. No Trust Layer or Identity Verification
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
              Fraud, Sybil attacks, and fake merchants plague Web3 commerce.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">
              6. Fee Models Are Unsustainable
            </h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm leading-relaxed">
              High gas fees, custodial commissions, or protocol-level charges create poor economic incentives.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800 mb-8">
          <h3 className="text-lg font-semibold mb-3 text-indigo-900 dark:text-indigo-100">
            7. Token Utility Models Are Weak or Misaligned
          </h3>
          <p className="text-indigo-800 dark:text-indigo-200 leading-relaxed">
            Most payment tokens lack real usage, relying on speculation rather than infrastructure demand.
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Result</h2>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            Web3 projects, merchants, and users are left with incomplete payment solutions, lack of cross-chain
            operability, no subscription infrastructure, zero trust mechanisms, and tokens with weak or artificial
            demand.
          </p>
        </div>
      </div>

      <PageNavigation currentPath="/problem" />
    </main>
  )
}
