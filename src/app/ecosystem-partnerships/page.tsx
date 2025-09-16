import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "11. Ecosystem & Partnerships | RecurX Documentation",
  description:
    "RecurX builds strategic partnerships across the Web3 ecosystem to enhance functionality and drive adoption",
}

export default function EcosystemPartnershipsPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">11. Ecosystem & Partnerships</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          RecurX builds strategic partnerships across the Web3 ecosystem to enhance functionality, expand reach, and
          drive adoption. Our partnership strategy focuses on creating synergistic relationships that benefit all
          stakeholders while advancing the broader adoption of decentralized payments.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">
            Strategic Partnership Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Blockchain Networks</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>
                  • <strong>BNB Chain:</strong> Primary deployment network
                </li>
                <li>
                  • <strong>Polygon:</strong> Ethereum scaling solution
                </li>
                <li>
                  • <strong>Solana:</strong> High-performance blockchain
                </li>
                <li>
                  • <strong>Berachain:</strong> Proof-of-Liquidity consensus
                </li>
                <li>
                  • <strong>Hemi Network:</strong> Bitcoin-Ethereum bridge
                </li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">DeFi Protocols</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>
                  • <strong>1inch:</strong> DEX aggregation
                </li>
                <li>
                  • <strong>OpenOcean:</strong> Cross-chain swaps
                </li>
                <li>
                  • <strong>Uniswap:</strong> Liquidity provision
                </li>
                <li>
                  • <strong>PancakeSwap:</strong> BSC ecosystem
                </li>
                <li>
                  • <strong>Jupiter:</strong> Solana aggregation
                </li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Wallet Integrations</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>
                  • <strong>MetaMask:</strong> Browser extension wallet
                </li>
                <li>
                  • <strong>Trust Wallet:</strong> Mobile-first solution
                </li>
                <li>
                  • <strong>WalletConnect:</strong> Universal protocol
                </li>
                <li>
                  • <strong>Phantom:</strong> Solana ecosystem
                </li>
                <li>
                  • <strong>Coinbase Wallet:</strong> Institutional grade
                </li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Fiat On/Off Ramps</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>
                  • <strong>MoonPay:</strong> Global fiat gateway
                </li>
                <li>
                  • <strong>Transak:</strong> Compliance-first approach
                </li>
                <li>
                  • <strong>Ramp:</strong> European markets
                </li>
                <li>
                  • <strong>Banxa:</strong> Asia-Pacific focus
                </li>
                <li>
                  • <strong>Simplex:</strong> Institutional solutions
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">Technology Partnerships</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Infrastructure Partners</h4>
              <ul className="space-y-1 text-green-800 dark:text-green-200 text-sm">
                <li>• Chainlink (Price feeds)</li>
                <li>• The Graph (Indexing)</li>
                <li>• IPFS (Storage)</li>
                <li>• Alchemy (Node services)</li>
              </ul>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Security Partners</h4>
              <ul className="space-y-1 text-green-800 dark:text-green-200 text-sm">
                <li>• CertiK (Smart contract audits)</li>
                <li>• Quantstamp (Security reviews)</li>
                <li>• Immunefi (Bug bounties)</li>
                <li>• Forta (Runtime monitoring)</li>
              </ul>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Analytics Partners</h4>
              <ul className="space-y-1 text-green-800 dark:text-green-200 text-sm">
                <li>• Dune Analytics (Dashboards)</li>
                <li>• DefiLlama (TVL tracking)</li>
                <li>• CoinGecko (Market data)</li>
                <li>• Messari (Research)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">Business Development</h2>

          <div className="space-y-6">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">E-commerce Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Web2 Integration</h4>
                  <ul className="space-y-1 text-purple-800 dark:text-purple-200 text-sm">
                    <li>• Shopify plugin development</li>
                    <li>• WooCommerce extensions</li>
                    <li>• Magento marketplace</li>
                    <li>• BigCommerce apps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Web3 Marketplaces</h4>
                  <ul className="space-y-1 text-purple-800 dark:text-purple-200 text-sm">
                    <li>• OpenSea integration</li>
                    <li>• Magic Eden partnership</li>
                    <li>• Foundation collaboration</li>
                    <li>• SuperRare payments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">
                SaaS & Subscription Services
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Developer Tools</h4>
                  <ul className="space-y-1 text-purple-800 dark:text-purple-200 text-sm">
                    <li>• GitHub Sponsors integration</li>
                    <li>• Vercel Pro subscriptions</li>
                    <li>• Netlify billing</li>
                    <li>• AWS marketplace</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Web3 Services</h4>
                  <ul className="space-y-1 text-purple-800 dark:text-purple-200 text-sm">
                    <li>• Alchemy subscriptions</li>
                    <li>• Moralis API billing</li>
                    <li>• QuickNode payments</li>
                    <li>• Infura premium tiers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800">
          <h2 className="text-2xl font-semibold mb-6 text-orange-900 dark:text-orange-100">Partnership Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">For Partners</h3>
              <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                <li>• Revenue sharing opportunities</li>
                <li>• Access to RecurX user base</li>
                <li>• Technical integration support</li>
                <li>• Co-marketing initiatives</li>
                <li>• Priority feature development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">For RecurX</h3>
              <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                <li>• Expanded distribution channels</li>
                <li>• Enhanced functionality</li>
                <li>• Reduced development costs</li>
                <li>• Market credibility</li>
                <li>• Network effects acceleration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/ecosystem-partnerships" />
    </main>
  )
}
