import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "12. Community & Governance | RecurX Documentation",
  description:
    "RecurX implements a balanced governance model that combines community input with efficient decision-making",
}

export default function CommunityGovernancePage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">12. Community & Governance</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          RecurX governance combines core team decision-making with selective
          community voting on treasury, tokenomics, and emergency protocols. Governance employs
          on-chain (smart contracts) and off-chain (Discord) mechanisms, along with
          ambassador programs and community rewards.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">Governance Framework</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Core Team Decisions</h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed mb-3">
                Technical development, security updates, and operational matters are managed by the core team for
                efficiency.
              </p>
              <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                <li>• Smart contract upgrades</li>
                <li>• Security patches</li>
                <li>• Feature development</li>
                <li>• Partnership agreements</li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Community Voting</h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed mb-3">
                Strategic decisions affecting tokenomics, treasury allocation, and major protocol changes require
                community input.
              </p>
              <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                <li>• Treasury fund allocation</li>
                <li>• Token burn schedules</li>
                <li>• Fee structure changes</li>
                <li>• Emergency protocol actions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">Voting Mechanisms</h2>

          <div className="space-y-6">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">On-Chain Governance</h3>
              <p className="text-green-800 dark:text-green-200 leading-relaxed mb-4">
                For critical protocol decisions, we implement on-chain voting using smart contracts to ensure
                transparency and immutability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Voting Power</h4>
                  <ul className="space-y-1 text-green-800 dark:text-green-200 text-sm">
                    <li>• 1 RCX = 1 vote</li>
                    <li>• Staked tokens have 1.5x weight</li>
                    <li>• Minimum 1,000 RCX to propose</li>
                    <li>• 7-day voting period</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Quorum Requirements</h4>
                  <ul className="space-y-1 text-green-800 dark:text-green-200 text-sm">
                    <li>• 10% of circulating supply</li>
                    <li>• 60% approval threshold</li>
                    <li>• 48-hour execution delay</li>
                    <li>• Emergency veto power</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">Off-Chain Signaling</h3>
              <p className="text-green-800 dark:text-green-200 leading-relaxed mb-4">
                For non-binding proposals and community sentiment, we use Snapshot for gas-free voting.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-900 dark:text-green-100">Snapshot</div>
                  <p className="text-sm text-green-800 dark:text-green-200">Gas-free voting</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-900 dark:text-green-100">Discord</div>
                  <p className="text-sm text-green-800 dark:text-green-200">Community polls</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-900 dark:text-green-100">Forum</div>
                  <p className="text-sm text-green-800 dark:text-green-200">Discussion threads</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">Community Initiatives</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">Ambassador Program</h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                <li>• Community leadership roles</li>
                <li>• Monthly RCX rewards</li>
                <li>• Exclusive access to updates</li>
                <li>• Direct communication with team</li>
                <li>• Event organization support</li>
              </ul>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">Developer Grants</h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                <li>• Integration development funding</li>
                <li>• Open source contributions</li>
                <li>• Educational content creation</li>
                <li>• Bug bounty programs</li>
                <li>• Hackathon sponsorships</li>
              </ul>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">Community Rewards</h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                <li>• Social media campaigns</li>
                <li>• Referral bonuses</li>
                <li>• Content creation incentives</li>
                <li>• Trading competitions</li>
                <li>• Staking bonus multipliers</li>
              </ul>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">Educational Programs</h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                <li>• DeFi payment workshops</li>
                <li>• Integration tutorials</li>
                <li>• Webinar series</li>
                <li>• Documentation contributions</li>
                <li>• University partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800">
          <h2 className="text-2xl font-semibold mb-6 text-orange-900 dark:text-orange-100">Communication Channels</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Primary Channels</h4>
              <ul className="space-y-1 text-orange-800 dark:text-orange-200 text-sm">
                <li>• Discord server</li>
                <li>• Telegram groups</li>
                <li>• Twitter/X updates</li>
                <li>• Medium blog</li>
              </ul>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Developer Focus</h4>
              <ul className="space-y-1 text-orange-800 dark:text-orange-200 text-sm">
                <li>• GitHub repositories</li>
                <li>• Developer Discord</li>
                <li>• Stack Overflow</li>
                <li>• Technical forums</li>
              </ul>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Governance</h4>
              <ul className="space-y-1 text-orange-800 dark:text-orange-200 text-sm">
                <li>• Governance forum</li>
                <li>• Snapshot space</li>
                <li>• Proposal discussions</li>
                <li>• Voting announcements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/community-governance" />
    </main>
  )
}
