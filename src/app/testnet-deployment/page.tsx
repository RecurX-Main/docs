import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "07. Testnet Deployment & Developer Infrastructure | RecurX Documentation",
  description:
    "RecurX testnet provides developers with comprehensive tools and infrastructure for building payment solutions",
}

export default function TestnetDeploymentPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">07. Testnet Deployment & Developer Infrastructure</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          RecurX testnet equips developers with tools for building, testing, and deploying
          multi-chain payment and subscription solutions, including APIs, SDKs, smart contract
          libraries, and integration examples for E-commerce, SaaS, and DeFi platforms.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">Testnet Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Core Functionality</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>• Multi-chain payment processing</li>
                <li>• Subscription management</li>
                <li>• Token routing & conversion</li>
                <li>• Merchant dashboard</li>
              </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Developer Tools</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>• RESTful APIs</li>
                <li>• JavaScript/TypeScript SDKs</li>
                <li>• Smart contract libraries</li>
                <li>• Testing frameworks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">SDK & API Documentation</h2>

          <div className="space-y-6">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">JavaScript SDK</h3>
              <pre className="bg-green-200 dark:bg-green-800 p-4 rounded text-sm overflow-x-auto">
                <code>{`npm install @recurx/sdk

import { RecurXClient } from '@recurx/sdk';

const client = new RecurXClient({
  apiKey: 'your-api-key',
  network: 'testnet'
});

// Create a payment
const payment = await client.payments.create({
  amount: '100',
  currency: 'USDC',
  recipient: '0x...'
});`}</code>
              </pre>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">REST API</h3>
              <pre className="bg-green-200 dark:bg-green-800 p-4 rounded text-sm overflow-x-auto">
                <code>{`POST /api/v1/payments
{
  "amount": "100",
  "currency": "USDC",
  "recipient": "0x...",
  "metadata": {
    "orderId": "12345"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">Integration Examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">E-commerce</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Shopify, WooCommerce, custom checkout flows
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">SaaS Platforms</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">Subscription billing, usage-based pricing</p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">DeFi Applications</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">DEX integration, yield farming, staking</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg p-8 border border-yellow-200 dark:border-yellow-800">
          <h2 className="text-2xl font-semibold mb-6 text-yellow-900 dark:text-yellow-100">Developer Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">Documentation</h3>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                <li>• API reference guides</li>
                <li>• Integration tutorials</li>
                <li>• Code examples</li>
                <li>• Best practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">Community Support</h3>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                <li>• Discord developer channel</li>
                <li>• GitHub repositories</li>
                <li>• Developer grants program</li>
                <li>• Technical workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/testnet-deployment" />
    </main>
  )
}
